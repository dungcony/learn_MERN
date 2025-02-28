const express = require('express')
const { getHomePage, getHIHI, postCreateUser, getCreatePage } = require('../Controllers/homeController')
const router = express.Router()

//khai bao route
router.get('/', getHomePage)
router.get('/hihihi', getHIHI)
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

module.exports = router