const connection = require('../config/database')

const getHomePage = (req, res) => {

    return res.render('home.ejs')

    // let users = []

    // // //simple query
    // connection.query(
    //     'select * from Users',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>> results >>>", results);
    //         //console.log(">>>fields>>>", fields);
    //         console.log(">>>check: ", users)
    //         res.send(JSON.stringify(users))
    //     }
    // );
}

const getHIHI = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    let { email, myname, myCity } = req.body

    console.log(">> req.body", email, '\n', myname, '\n', myCity)

    connection.query(
        `insert into Users(email, name, city) 
        values (?, ?, ?)`,
        [email, myname, myCity],
        function (err, results) {
            console.log(results)
            res.send('create user success')
        }
    )
}

module.exports = {
    getHomePage,
    getHIHI,
    postCreateUser
}