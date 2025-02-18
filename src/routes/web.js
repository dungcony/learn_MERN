const express = require('express')
const { getHomePage, getHIHI } = require('../Controllers/homeController')
const router = express.Router()

//khai bao route
router.get('/', getHomePage)
router.get('/hihihi', getHIHI)


module.exports = router