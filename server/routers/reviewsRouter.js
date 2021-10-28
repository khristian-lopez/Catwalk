const router = require('express').Router();
const controller = require('../controllers/reviews.js')

router.get('/');
router.get('/meta');
router.post('/');
router.put('/:reviews_id/helpful');
router.put('/:reviews_id/report');

module.exports = router;