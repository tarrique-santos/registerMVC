const bcrypt = require('bcrypt');
const db = require('../../models/DataBase');

module.exports = {
  EmailValidate: async ( email ) => { 
    let pair = await db.connect();
    let [rows] = await connection.query(`select * from users where email = ?` , [email]);
    return (rows.length) >= 1;
  },

  RegisterUser: async ( name , email , password ) => {
    let pair = await db.connect();
    let encrypt = await bcrypt( password , 8 );
    let res = await connection.query(`insert into users (name , email , password )` , [ name , email , encrypt]);
  },
}
const User = require('../../models/user.js');

module.exports = {
  index: async (req, res) => {
    const users = await User.getAll();
    res.render('users/index', {users});
  }
}