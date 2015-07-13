var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/*GET preguntas y respuestas*/
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

/* GET créditos. */
router.get('/author', function(req, res) {
  res.render('author', { autor: 'Pedro Ibeas',
  						 foto: '/images/foto.jpg'

			});
});


module.exports = router;
