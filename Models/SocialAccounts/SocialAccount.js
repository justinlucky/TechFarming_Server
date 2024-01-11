const mongoose = require('mongoose');

const socialAccountSchema = new mongoose.Schema({
    instagram: String,
    google: String,
});

module.exports = mongoose.model('socialAccount', socialAccountSchema);