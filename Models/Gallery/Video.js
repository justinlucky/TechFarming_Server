const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    video: String, 
    video_text: String,
    video_url: String,
    video_from: String,
    video_type: String,
    video_description: String,
    time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('video', videoSchema);