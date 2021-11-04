const router = require('express').Router();
const controller = require('../controllers/products.js')

router.get('/');
router.get('/:product_id/styles');
router.get('/:product_id');
// router.get('/:product_id/related', controller.getRelatedProductIds);

module.exports = router;