/* https://github.com/danielgynn/express-authentication/blob/local/models/user.js */

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  local: {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    graduation: Number,
    birthday: String,
    school: String,
    major: String,
    gender: String
  },
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
