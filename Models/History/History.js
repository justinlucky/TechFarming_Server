const mongoose = require('mongoose');

const recentSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'brand',
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

module.exports = mongoose.model('recent', recentSchema);