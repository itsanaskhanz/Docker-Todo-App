const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
