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

const getCreatePage = (req, res) => {
    res.render('create-user.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, myname, myCity } = req.body

    let [results, fields] = await connection.query(
        `insert into Users(email, name, city)
        values (?, ?, ?)`,
        [email, myname, myCity],
    )

    //const [results, fields] = await connection.query('select * from Users u')

    console.log(">>> results >>>", results);

    res.send('hi')

}


module.exports = {
    getHomePage,
    getHIHI,
    postCreateUser,
    getCreatePage
}