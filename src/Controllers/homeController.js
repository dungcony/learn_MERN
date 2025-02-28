const connection = require('../config/database')
const { getAllUser } = require('../services/CRUD')

const getHomePage = async (req, res) => {

    return res.render('home.ejs', {
        listUsers: await getAllUser()
    })

}

const getHIHI = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create-user.ejs')
}

const getUpdatePage = (req, res) => {
    res.render('update.ejs')
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
    getCreatePage,
    getUpdatePage
}