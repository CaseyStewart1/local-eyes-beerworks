const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is the root'));
router.post('/beers', controllers.createBeer);
router.get('/beers', controllers.getAllBeers);
router.get('/beers/:id', controllers.getBeerById);

module.exports = router;
