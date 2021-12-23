const Beer = require('../models/beer');
const Style = require('../models/style');
const suggestBeer = async (req, res) => {
  try {
    console.log('hi');
    const beer = await new Beer(req.body);
    await beer.save();
    res.status(201).send({
      beer
    });
  } catch (error) {
    // return res.status(500).json({ error: error.message });
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

const getAllStyles = async (req, res) => {
  try {
    const styles = await Style.find();
    return res.status(200).json({ styles });
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

const updateBeer = async (req, res) => {
  console.log('hihi there', req.body);
  try {
    const { id } = req.params;
    Beer.findByIdAndUpdate(id, req.body, { new: true }, (err, beer) => {
      if (err) {
        // res.status(500).send(err);
      }
      if (!beer) {
        // res.status(200).send('No Beer');
      }
      return res.status(200).json(beer);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteBeer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Beer.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Beer Gone');
    }
    throw new Error('Beer ran dry');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  suggestBeer,
  getAllBeers,
  getAllStyles,
  getBeerById,
  updateBeer,
  deleteBeer
};
