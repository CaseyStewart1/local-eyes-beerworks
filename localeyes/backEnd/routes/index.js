const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is the root'));
router.post('/beers', controllers.createBeer);
router.get('/beers', controllers.getAllBeers);
router.get('/beers/:id', controllers.getBeerById);
router.put('/beers/:id', controllers.updateBeer);
router.delete('/beers/:id', controllers.deleteBeer);

module.exports = router;
