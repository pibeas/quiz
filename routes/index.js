var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: []});
});

/* GET créditos. */
router.get('/author', function(req, res) {
  res.render('author', { autor: 'Pedro Ibeas',
  						 foto: '/images/foto.jpg',
  						 errors: []
			});
});

// Autoload de comandos con ids
router.param('quizId', quizController.load);  // autoload :quizId

//Definición de las rutas de quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new',					quizController.new);
router.post('/quizes/create',				quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',	quizController.edit);
router.put('/quizes/:quizId(\\d+)',			quizController.update);
router.delete('/quizes/:quizId(\\d+)',		quizController.destroy);

module.exports = router;
