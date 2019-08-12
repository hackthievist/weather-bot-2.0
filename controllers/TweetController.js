const Twitter = require('../services/TwitterUtilService');

module.exports = {
  async tweet(req, res) {
    try {
      const { location } = req.body;
      const tweetResponse = await Twitter.tweet(location);
      if (tweetResponse.error) {
        return res.status(400).send({
          error: tweetResponse.error,
        });
      }
      return res.status(200).send(tweetResponse);
    } catch (err) {
      return res.status(500).send({
        message: 'An error occurred',
        error: err,
      });
    }
  },
};
