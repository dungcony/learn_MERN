require('dotenv').config()

const express = require('express')//commonjs
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express()//app express

const port = process.env.PORT || 2005
const hostname = process.env.HOST_NAME || 'localhost'


//config template engine
configViewEngine(app)

//khai bao route
app.use('/test', webRouter)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})


// //simple query
connection.query(
    'select * from Users',
    function (err, results, fields) {
        console.log(">>> results >>>", results);
        //console.log(">>>fields>>>", fields);
    }
);