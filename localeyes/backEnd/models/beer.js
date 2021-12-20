const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Beer = new Schema(
  {
    name: { type: String, required: true },
    style: { type: String, required: true },
    abv: { type: String, required: true },
    ibu: { type: String, required: false },
    onTap: { type: Boolean, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('beers', Beer);
