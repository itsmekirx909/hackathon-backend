const mongoose = require('mongoose')

const ambulanceSchema = mongoose.Schema({
    user_id: String,
    emergency: String,
    location: Object,
    type: String,
    status: String
})

const ambulanceModel = mongoose.model('ambulance', ambulanceSchema)

module.exports = ambulanceModel