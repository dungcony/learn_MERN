require('dotenv').config()
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_host,
    port: process.env.DB_port,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_name
})


module.exports = connection