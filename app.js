const express = require('express')
const credentials = require('../controllers/credentials')
const control = require('../controllers/control')
const router = express.Router()

router.post('/api/login', credentials.login)


router.post('/api/signup', credentials.signUp)


router.post('/api/emergency/ambulance', control.ambulanceController)

router.post('/api/emergency/fire', control.fireController)

router.post('/api/emergency/police', control.policeController)


module.exports = router