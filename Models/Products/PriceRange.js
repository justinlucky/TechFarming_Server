const mongoose = require('mongoose');

const priceRangeSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
});

module.exports = mongoose.model('priceRange', priceRangeSchema);