const Twitter = require('../services/TwitterUtilService');

module.exports = {
  async tweet(req, res) {
    const { tweet } = req.body;
    const tweetResponse = await Twitter.tweet(tweet);
    return res.status(200).send(tweetResponse);
  },
};
