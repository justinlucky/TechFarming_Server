const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    address: [String],
})

module.exports = mongoose.module('location', locationSchema);