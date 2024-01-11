const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
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

module.exports = mongoose.model('wishlist', wishlistSchema); 