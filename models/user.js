var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not a valid value'
}

var userSchema = new Schema({
    name: { type: String, required: [true, 'Name field is required.'] },
    email: { type: String, unique: true, required: [true, 'Email field is required.'] },
    password: { type: String, required: [true, 'Password field is required.'] },
    img: { type: String },
    role: { type: String, required: [true, 'Password field is required.'], default: 'USER_ROLE', enum: validRoles },
});

userSchema.plugin(uniqueValidator, { message: '{PATH} This email has an account already.' });

module.exports = mongoose.model('User', userSchema);