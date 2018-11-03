const mongoose = require('mongoose');

const { Schema } = mongoose;

const employeeSchema = new Schema({
  nom: String,
  prenom: String,
  age: Number,
  poste: String,
  experienceId: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
