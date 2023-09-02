const mysql = require('mysql2/promise');

async function connect() {
    try {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection;
        }
        const connection = await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            database: 'cadastroBooksMVC'
        });
       
        console.log("Conectou no MySQL!");
        global.connection = connection;
        return connection;
    } catch (error) {
  
}
}
module.exports = { connect }