const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: String,
    phone_number: Number,
    owner_name: String,
    email: String,
    is_linkTo_SocialAccount: {
        type: Boolean,
        socialAccount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'socialAccount',
        }
    },
    logo: {
        type: String,
        required: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    is_manufacturer: {
        type: Boolean,
        required: true,
        brands: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'brand'
        }
    },
})

module.exports = mongoose.model('seller', sellerSchema);