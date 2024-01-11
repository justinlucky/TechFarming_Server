const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    recent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recent'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    }
})

module.exports = mongoose.model('search', searchSchema);