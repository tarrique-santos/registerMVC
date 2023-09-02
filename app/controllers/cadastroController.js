const {insertUser} =  require("../../models/user")
  const getRegisterpage = async(req, res) =>{ 
    res.render('../views/cadastro', {
      title: 'Minha App',
      subtitle: 'Bem vindo à página inicial' 
    });
  
  }

module.exports = {
  insertuser:(req , res) => insertUser(req, res),
  getRegisterpage
}