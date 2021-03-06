const mongoose = require('mongoose');
const numberSchema = mongoose.Schema({
    number: {type: String , required: true},
    location: {type: String, required: true},
    shortCode: {type: String, required: true},
    status: {type: String, required: true},
    createdAt:  {type: Date , required: true}
})

module.exports = mongoose.model('Numbers', numberSchema)