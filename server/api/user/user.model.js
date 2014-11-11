'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  fullName: String,
  email: String,
  skype: String,
  github: String,
  cohort_choice: String,
  current_challenge: String
});

module.exports = mongoose.model('User', UserSchema);