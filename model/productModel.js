'use strict';

const dbConnection = require('../database/dbConnection');
const Product = function(product) {
    this.nome = product.name;
    this.valor = product.value;
}

Product.create = function(newProd, result) {
    dbConnection.query("INSERT INTO produtos set ?", newProd, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Produto criado!");
            result(null, res.insertId);
        }
    });

}

Product.findAll = function(result) {
    dbConnection.query("SELECT * FROM produtos", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Product;