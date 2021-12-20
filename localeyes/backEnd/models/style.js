const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Style = new Schema(
  {
    style: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('styles', Style);
