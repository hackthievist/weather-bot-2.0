const Twitter = require('twitter');
require('dotenv').config();

const { twitter } = require('../config');

const client = new Twitter(twitter.api);

const generateTweet = async (body) => {
  const tweet = body;
  return tweet;
};

const tweet = async ({ body }) => {
  const tweetBody = await generateTweet(body);
  const response = await client.post('statuses/update', { status: tweetBody });
  return response;
};


module.exports = {
  tweet,
};
