const mysql = require ('mysql/promise');

console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_USER)
console.log(process.env.MYSQL_PSSSWORD)

const connection =mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password: process.env.MYSQL_PSSSWORD,
    database: process.env.MYSQL_DATABASE
})

module.exports = connection;