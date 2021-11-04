const dbConnection = require('../../config/dbserver');
const {getLocais} = require("../models/locais");

module.exports.locaisListar = function(app, req, res) {

    let connection = dbConnection();
    getLocais(connection , function (error, result) {
    res.render("inicio.js", {locais: result});
    });

}