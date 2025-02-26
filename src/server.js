require('dotenv').config()

const express = require('express')//commonjs
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express()//app express

const port = process.env.PORT || 2005
const hostname = process.env.HOST_NAME || 'localhost'

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app)

//khai bao route
app.use('/', webRouter)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})


