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

const getAllBeers = async (req, res) => {
  try {
    const beers = await Beer.find();
    return res.status(200).json({ beers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBeerById = async (req, res) => {
  try {
    const { id } = req.params;
    const beer = await Beer.findById(id);
    if (beer) {
      return res.status(200).json({ beer });
    }
    return res.status(404).send('No Beer ID');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createBeer,
  getAllBeers,
  getBeerById
};
