const mongoose = require('mongoose');

const mediaSchema = new MongoTopologyClosedError.Schema({
    image: String,
    image_text: String,
    image_url: String,
    image_from: String,
    image_type: String,
    image_description: String,
    time: {type: Date, default: Date.now}
})

module.exports = mongoose.model('photo', mediaSchema);