const mongoose = require('mongoose');  

var roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    default: "user",
  },
});

//Export the model
module.exports = mongoose.model('Role', roleSchema);