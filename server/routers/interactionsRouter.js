const router = require('express').Router();
const controller = require('../controllers/interactions.js');

router.post('/', controller.post);

module.exports = router;