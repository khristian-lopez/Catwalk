const router = require('express').Router();
const controller = require('../controllers/qa.js')

router.get('/questions/:product_id', controller.getAllQuestions);
router.get('/questions/:question_id/answers', controller.getAllAnswers);
router.post('/questions');
router.post('/questions/:question_id/answers');
router.put('/questions/:question_id/helpful');
router.put('/questions/:question_id/report');
router.put('/answers/:answer_id/helpful', controller.markHelpful);
router.put('/answers/:answer_id/report');

module.exports = router;