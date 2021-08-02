const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: { 
        type: String, 
        default: 'client', 
        enum: ["client", "admin"]
    },

});

const User = mongoose.model('User', UserSchema);

module.exports = User;