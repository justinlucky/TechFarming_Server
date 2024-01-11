const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    profile_pic: String,
    date_of_birth: Date,
    gender: String,
    is_verified: Boolean,
    is_admin: Boolean,
    is_seller: Boolean,
    has_subscription: Boolean,
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'email',
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subscription',
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location',
    },
    is_linkTo_SocialAccount: {
        type: Boolean,
        socialAccount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'socialAccount',
        }
    }
})

module.exports = mongoose.model('user', userSchema);