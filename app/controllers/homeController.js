exports.getHomepage = (req, res) => {

    // lógica da requisição aqui  
    
    res.render('../views/home', {
      title: 'Minha App',
      subtitle: 'Bem vindo à página inicial' 
    });
  
  }