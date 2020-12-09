const express = require('express');
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const gnBoletos = require('./resources/gn_boleto_node');
const products = require('./routes/productRoutes');
const buy = require('./routes/buyRoutes');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.use('/produtos', products);
app.use('/compra', buy);

app.post('/boleto', gnBoletos);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});