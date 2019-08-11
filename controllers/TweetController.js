const Twitter = require('../services/TwitterUtilService');

module.exports = {
  async tweet(req, res) {
    try {
      const { tweet } = req.body;
      const tweetResponse = await Twitter.tweet({ body: tweet });
      return res.status(200).send(tweetResponse);
    } catch (err) {
      return res.status(500).send({
        message: 'An error occurred',
        error: err,
      });
    }
  },
};
