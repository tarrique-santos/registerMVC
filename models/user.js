let dataBase = require("./DataBase");
let bcrypt = require("bcrypt");
const mysql = require('mysql2');
const config = require('../settings.js');

const connection = mysql.createConnection(config.database);

// modelo User que usa a conexão
const User = {
    getAll: () => {
        return connection.query('SELECT * FROM users');
    }
};
const router = require('express').Router();
const UserController = require('../app/controllers/userController');

router.get('/', UserController.index);

module.exports = router;
module.exports = User;
async function checkInfo(email, password) {
    const encrypted = await mdFive(password);
    const sql = `select * from user where email = ? and password = ?`;
    const credences = [email, password];

    try {
        let connection = await dataBase.connect();
        let [rows] = await connection.query(sql, credences);

        if (rows.length >= 1) {
            return rows[0];
        } else return null;

    } catch (E) {
        console.log("Erro na checagem!")
        throw Error;
    }
}

async function checkEmail(email) {
    const sql = `select * from user where email = ?`;
    const credences = [email];

    try {
        const connection = await dataBase.connect();
        const [res] = await connection.query(sql, credences);

        if (res.length >= 1) {
            console.log("E-mail em uso!");
            return 1;
        } else {
            console.log("E-mail não em uso!")
            return 0;
        }
    } catch (E) {
        console.log("Erro ao checar o e-mail!")
        throw Error;
    }
}

const insertUser = async (req, resp) => {
    const { nome, email, senha } = req.body;
    
    const hash = bcrypt.hashSync(senha, 10);
    console.log(hash)
    const sql = `insert into users (name , email , password) values (?, ?, ?)`;
    const values = [nome, email, hash];
    // const match = await bcrypt.compare(password, user.passwordHash);
    try {
     
        const connection = await dataBase.connect();
        const res = await connection.execute(sql, values);
        console.log(res)
        console.log(req.body);
        if (res[0].affectedRows >= 1) {
            console.log("Usuário cadastrado com sucesso!");
            return true;
        } else {
            console.log("cgrgrgtg");
            return false;
        }
    } catch (E) {

    }
}

module.exports = { checkInfo, checkEmail, insertUser };