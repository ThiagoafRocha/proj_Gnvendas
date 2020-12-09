const table = document.getElementById("tbody-results");
const name = document.getElementById("name").value;
const cpf = document.getElementById("cpf").valeu;
const tel = document.getElementById("tel").value;
let products = [];


var resultado = axios.get(`http://localhost:5000/produtos`);

async function handleBoleto(id) {
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    });

    const prod_qt = parseInt(document.getElementById(id).value);
    const prod_name = products[id].nome;
    const prod_value = parseInt(products[id].valor) * 100;

    const expire = new Date();
    expire.setDate(expire.getDate() + 2);

    const expireDay = expire.getDate();
    const expireMonth = expire.getMonth() + 1;
    const expireYear = expire.getFullYear();

    const expireFormat = expireYear + "-" + expireMonth + "-" + expireDay;

    const response = await api.post('/boleto', {
        nome: name,
        cpf,
        tel,
        qnt: prod_qt,
        prod_name,
        prod_value,
        expireFormat
    });

    const chargeId = response.data.data.charge_id;
    const pdfCharge = response.data.data.pdf.charge;

    const res = await api.post('/compra', {
        pdfCharge,
        chargeId
    });

    //window.location.href = pdfCharge;

}

resultado.then(response => {
    const data = response.data;
    let id_button = 0;
    data.forEach(item => {
        table.innerHTML += `<tr>
                        <td class="col-5" id="prod_name">${item.nome}</td>
                        <td class="col-3" id="prod_value">${item.valor}</td>
                        <td class="col-2"><input type="number" name="qnt" id=${id_button}></td>
                        <td  class="col-2"><button class="btn btn-primary" onclick="handleBoleto(${id_button})">Comprar</button></td>
                      </tr>`;
        products.push(item);
        id_button += 1;
    })
})

//function retornaDataHoraAtual(){
//  var dNow = new Date();
//  var localdate = dNow.getDate() + "/" + (dNow.getMonth()+1) + "/" + dNow.getFullYear() + " "  + dNow.getHours() + ":" + dNow.getMinutes();
//  return localdate;
//  }