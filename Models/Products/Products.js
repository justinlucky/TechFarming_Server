const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'seller',
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    priceRange: {
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'priceRange',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand',
        required: true,
    },
    manufacturer: {
        name: String,
        location: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'location',
        },
    },
    stock_quality: {
        type: Number,
        default: 0,
    },
    stock_quantity:{
        type: Number,
        default: 0,
        required: true,
    },
    images: [
        {
            image: [String],
            image_url: [String],
            image_alt: [String],
        },
        {
            image: [String],
            image_url: [String],
            image_alt: [String],
        },
        {
            image: [String],
            image_url: [String],
            image_alt: [String],
        },
    ], 
    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rating',
    },
    discount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'discount',
    }
})

module.exports = mongoose.model('product', productSchema);