const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    is_paid: Boolean,
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location',
    },
});

module.exports = mongoose.model('checkout', checkoutSchema);