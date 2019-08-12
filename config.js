module.exports = {
  twitter: {
    api: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.ACCESS_TOKEN_KEY,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    },
  },
  google: {
    api: {
      url: process.env.GOOGLE_MAP_API_URL,
      key: process.env.GOOGLE_API_KEY,
    },
  },
  darksky: {
    api: {
      url: process.env.DARKSKY_API_URL,
      key: process.env.DARKSKY_API_KEY,
    },
  },
};
