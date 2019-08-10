const Twitter = require('twitter');
require('dotenv').config();

const { twitter } = require('./config');

const client = new Twitter(twitter.api);

client.post('statuses/update', { status: 'Refactor...' }, (error, tweet, response) => {
  if (error) throw error;
  console.log(tweet); // Tweet body.
  console.log(response); // Raw response object.
});
