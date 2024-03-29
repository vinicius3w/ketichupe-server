//Importar o mongoose
const mongoose = require('../database');
const bcryptjs = require('bcryptjs');

//Definição do Schema (arquitetura de informação no DB para a entidade Project)
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
