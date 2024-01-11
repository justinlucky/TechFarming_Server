const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating: Number,
    feedback: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
});

module.exports = mongoose.model('rating', ratingSchema);