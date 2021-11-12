const router = require('express').Router();
const controller = require('../controllers/cart.js')

router.get('/', controller.getCart);
router.post('/', controller.addToCart);

module.exports = router;