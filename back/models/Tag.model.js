const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Tag', tagSchema);