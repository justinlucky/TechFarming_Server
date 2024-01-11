const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: [String],
    duration: {
        minimum: Number,
        maximum: Number,
    },
    cost: {
        minimum: Number,
        maximum: Number,
    },
    offer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offer',
    },
    discount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'discount',
    },
    description: [String],
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
});

module.exports = mongoose.model('services', serviceSchema);
