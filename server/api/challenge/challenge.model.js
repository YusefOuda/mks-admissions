'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChallengeSchema = new Schema({
  challenge_order: Number,
  instructions: String,
  additional_objects: String
});

module.exports = mongoose.model('Challenge', ChallengeSchema);