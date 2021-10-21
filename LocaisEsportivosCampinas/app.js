const app = require('./config/server');

app.get('/', function(req, res){
   res.render("Index.ejs");
});

app.get('/galeriafotos', function(req, res){
    res.render("GaleriaFotos.ejs");
 });

app.get('/cadastro', function(req, res){
   res.render("Cadastro.ejs");
});


app.get('/login', function(req, res){
   res.render("Login.ejs");
});

app.get('/sugestoes', function (req, res) {
   res.render("Sugestoes.ejs");
});

