const mongoose = require('mongoose');

const factSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Stoicism', 'Psychology'],
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Fact', factSchema);
