'use strict';

var Gerencianet = require('gn-api-sdk-node');

var clientId = 'Client_Id_4e4327e045ceb277ed5f62db8c46c399c309e0bf';
var clientSecret = 'Client_Secret_bb1ad596c70e1c17089cd27ec860816670412681';

var options = {
    client_id: clientId,
    client_secret: clientSecret,
    sandbox: true
}

module.exports = function(req, res) {
    const name = req.body.nome;
    const cpf = req.body.cpf;
    const tel = req.body.tel;
    const prod_qt = req.body.qnt;
    const prod_name = req.body.prod_name;
    const prod_value = req.body.prod_value;
    const expireFormat = req.body.expireFormat;

    var body = {

        payment: {
            banking_billet: {
                expire_at: expireFormat,
                customer: {
                    name: name,
                    email: 'oldbuck@gerencianet.com.br',
                    phone_number: tel,
                    cpf: cpf,
                    birth: '2020-06-10',
                    juridical_person: {
                        corporate_name: 'Empresa Gorbadoc',
                        cnpj: '92247037000137'
                    }
                }
            }
        },

        items: [{
            name: prod_name,
            value: prod_value,
            amount: prod_qt
        }],
        shippings: [{
            name: 'Default Shipping Cost',
            value: 100
        }]
    }


    var gerencianet = new Gerencianet(options);

    gerencianet
        .oneStep([], body)
        .then((data) => {
            res.json(data);
        })
        .catch(console.log)
        .done();

}