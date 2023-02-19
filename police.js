const mongoose = require('mongoose')

const policeSchema = mongoose.Schema({
    user_id: String,
    emergency: String,
    location: Object,
    type: String,
    status: String
})

const policeModel = mongoose.model('police', policeSchema)

module.exports = policeModel