const mysql = require ('mysql/promise');

const connection =mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password: process.env.MYSQL_PSSSWORD,
    database: process.env.MYSQL_DATABASE
})

module.exports = connection;