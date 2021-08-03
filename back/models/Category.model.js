const mongoose = require('mongoose');

const categordySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    displayName: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    }
});

//Export the model
module.exports = mongoose.model('Category', categordySchema);