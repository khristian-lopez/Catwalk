const router = require('express').Router();
const controller = require('../controllers/reviews.js')

router.get('/:product_id', controller.getOne);
router.get('/meta/:product_id', controller.getReviewMetadata);
router.post('/');
router.put('/:reviews_id/helpful');
router.put('/:reviews_id/report');

module.exports = router;