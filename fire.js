const mongoose = require('mongoose')

const fireSchema = mongoose.Schema({
    user_id: String,
    emergency: String,
    location: Object,
    type: String,
    status: String
})

const fireModel = mongoose.model('fire', fireSchema)

module.exports = fireModel