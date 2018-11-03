const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema({
  titre: String,
  description: String,
});

module.exports = mongoose.model('Experience', experienceSchema);
