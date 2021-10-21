let express = require('express');

let app = express();

let port = 3000;

app.use(express.static('style'));

app.set("view engine", "ejs");

app.listen(port, function(){
	console.log('Servidor rodando na porta', port);
});

module.exports = app;