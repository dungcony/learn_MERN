const connection = require('../config/database')

const getHomePage = (req, res) => {

    let users = []

    // //simple query
    connection.query(
        'select * from Users',
        function (err, results, fields) {
            users = results;
            console.log(">>> results >>>", results);
            //console.log(">>>fields>>>", fields);
            console.log(">>>check: ", users)
            res.send(JSON.stringify(users))
        }
    );
}

const getHIHI = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getHIHI
}