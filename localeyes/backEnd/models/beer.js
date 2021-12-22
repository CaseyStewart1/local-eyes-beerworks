const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Beer = new Schema(
  {
    name: { type: String, required: true },
    style: { type: String, required: false },
    abv: { type: String, required: false },
    ibu: { type: String, required: false },
    onTap: { type: Boolean, required: false },
    description: { type: String, required: false },
    likes: { type: Number, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('beers', Beer);
