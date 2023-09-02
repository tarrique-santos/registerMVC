const express = require('express');
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index.js');
const app = express();
const bodyParser = require('body-parser');
const database = require('./models/DataBase.js');
const cadastroController = require('./app/controllers/cadastroController.js');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"views/js")));
// app.use(session({
  //   secret: 'seu_segredo_de_sessao',
  //   resave: false,
  //   saveUninitialized: false,
  // }));
  
  // app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }))
  
app.get('/', (req, res) => {
  res.render('index'); // vai renderizar index.ejs
});

app.get('/home' , (req, res) => {
  res.render('home');
});

app.post('/cadastro', (req, res) => {
  console.log("qualquer coisa")
  cadastroController.insertuser(req , res);
 
});

app.use(express.static('public')); 
app.use(router);
database.connect();
const port = 4000;

app.listen(port, () => {

  console.log(`Servidor rodando em http://localhost:${port}`);
});

// const session = require("espress-session");
// app.use(session({secret:"info63"}));
 
module.exports = app;