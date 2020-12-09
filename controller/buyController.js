'use strict';

const Buy = require('./../model/buyModel');

exports.create = function(req, res) {
    const newBuy = new Buy(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor, insira todos os valores necessários.' });
    } else {
        Buy.create(newBuy, function(err, buy) {
            if (err)
                res.send(err);
        });
    }
};