const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
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
    is_checkout: Boolean,
    number_of_products: Number,
    if_discount: {
        type: Boolean,
        discount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'discount'
        }
    },
    is_first_order: Boolean,
});

module.exports = mongoose.model('cart', cartSchema);