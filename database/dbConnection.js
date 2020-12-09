'use strict';
const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_produtos'
});

dbConnection.connect(function (err) {
    if (err) throw err;

    console.log("Connectado!");
});

module.exports = dbConnection;