'use strict';

const dbConnection = require('../database/dbConnection');

const Buy = function(buy) {
    this.pdf_charge = buy.pdfCharge;
    this.charge_id = buy.chargeId;
}

Buy.create = function(newBuy, result) {
    dbConnection.query("INSERT INTO compras set ?", newBuy, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

module.exports = Buy;