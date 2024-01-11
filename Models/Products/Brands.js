const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name: String,
    manufacturer: {
        name: String,
        location: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'location',
        },
    },
});

module.exports = mongoose.model('brand', brandSchema);