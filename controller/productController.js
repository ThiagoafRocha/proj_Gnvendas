'use strict';

const Product = require('./../model/productModel');

exports.findAll = function(req, res) {
    Product.findAll(function(err, product) {
        if (err)
            res.send(err);

        res.send(product);
    });
};

exports.create = function(req, res) {
    const newProd = new Product(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Product.create(newProd, function(err, product) {
            if (err)
                res.send(err);
        });
    }
};