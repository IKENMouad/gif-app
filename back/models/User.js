const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token_verification: {
        type: String,
        required: false,
        unique: true,
    },
    email_verification: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('User', userSchema);