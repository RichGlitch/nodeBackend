var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: [true, 'Name field is required.'] },
    email: { type: String, unique: true, required: [true, 'Email field is required.'] },
    password: { type: String, required: [true, 'Password field is required.'] },
    img: { type: String },
    role: { type: String, required: [true, 'Password field is required.'], default: 'USER_ROLE' },
});

module.exports = mongoose.model('User', userSchema);