const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const employeeSchema = new Schema({
  nom: String,
  prenom: String,
  age: Number,
  poste: String,
  experienceId: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
