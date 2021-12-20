const Beer = require('../models/beer');

const createBeer = async (req, res) => {
  try {
    const beer = await new Beer(req.body);
    await beer.save();
    return res.status(201).json({
      beer
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// const getAllBeers = async (req, res) => {
//   try {
//     const beers = await Beer.find();
//     return res.status(200).json({ beers });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

module.exports = {
  createBeer
  // getAllBeers
};
