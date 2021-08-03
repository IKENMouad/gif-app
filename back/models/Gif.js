const mongoose = require('mongoose');

const gifSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    comments: [{
        description: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    }]
    // file: {
    //     data: Buffer,
    //     contentType: String
    // },
}, { timestamps: true });

module.exports = mongoose.model('Gif', gifSchema);