const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const experienceSchema = new Schema({
  titre: String,
  description: String,
});

module.exports = mongoose.model('Experience', experienceSchema);
