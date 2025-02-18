const getHomePage = (req, res) => {
    //process data
    //call models
    res.send('Hello World!')
}

const getHIHI = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getHIHI
}