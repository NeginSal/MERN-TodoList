const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }

}, { timestamps: true })

module.exports = mongoose.model('Todo', todoSchema)