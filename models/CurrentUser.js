var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var currentUserSchema = new mongoose.Schema({
  local: {
    name: String,
    email: String,
    university: String,
    password: String
  },
});

currentUserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

currentUserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('CurrentUser', currentUserSchema);
