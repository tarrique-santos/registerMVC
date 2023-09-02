// app/controllers/home.js

exports.indexHomepage = (req, res) => {

    // lógica da requisição aqui  
    
    res.render('../views/index', {
      title: 'Minha App',
      subtitle: 'Bem vindo à página inicial' 
    });
  
  }