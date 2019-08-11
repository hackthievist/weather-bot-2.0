const express = require('express');
const TweetController = require('../controllers/TweetController');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/tweet', TweetController.tweet);

module.exports = router;
