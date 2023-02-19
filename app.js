const express = require('express')
const credentials = require('../controllers/credentials')
const control = require('../controllers/control')
const router = express.Router()

router.post('/api/login', credentials.login)


router.post('/api/signup', credentials.signUp)


router.post('/api/emergency/ambulance', control.ambulanceController)

router.post('/api/emergency/fire', control.fireController)

router.post('/api/emergency/police', control.policeController)

router.get('/api/emergency/ambulance', control.ambulanceGet)

router.get('/api/emergency/fire', control.fireGet)

router.get('/api/emergency/police', control.policeGet)

router.put('/api/emergency/ambulance', control.ambulanceStatus)

router.put('/api/emergency/fire', control.fireStatus)

router.put('/api/emergency/police', control.policeStatus)

router.delete('/api/emergency/ambulance', control.ambulanceDelete)

router.delete('/api/emergency/fire', control.fireDelete)

router.delete('/api/emergency/police', control.policeDelete)


module.exports = router