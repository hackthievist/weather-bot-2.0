const Twitter = require('twitter');
const fetch = require('node-fetch');
const states = require('../data/states.json');
require('dotenv').config();

const { twitter, google, darksky } = require('../config');

const generateTweet = async (locationData, weatherData) => {
  const tweet = `The weather at ${locationData} is ${weatherData.temperature}. It is ${weatherData.summary}`;
  return tweet;
};

const encodeAddress = address => encodeURIComponent(address);

const getGeoCoordinates = async (location) => {
  const { url, key } = google.api;
  const encodedAddress = encodeAddress(location);
  const response = await fetch(`${url}?address=${encodedAddress}&key=${key}`);
  const jsonData = await response.json();
  if (jsonData.results.length === 0) return {};
  const geoLocation = jsonData.results[0].geometry.location;
  const formattedAddress = jsonData.results[0].formatted_address;
  const geoCoordinates = [geoLocation.lat, geoLocation.lng];
  return { geoCoordinates, formattedAddress };
};

const getWeather = async (geoCoordinates) => {
  const { key, url } = darksky.api;
  const [latitude, longitude] = geoCoordinates;
  const response = await fetch(`${url}/${key}/${latitude},${longitude}`);
  const jsonData = await response.json();
  const weatherData = {
    summary: jsonData.currently.summary,
    temperature: jsonData.currently.temperature,
  };
  return weatherData;
};

const getState = () => {
  const randomIndex = Math.floor(Math.random() * 37);
  const state = states[randomIndex];
  return state;
};

const tweet = async (location) => {
  const client = new Twitter(twitter.api);
  const randomState = getState();
  const locationData = location || randomState;
  const geoCoordinates = await getGeoCoordinates(locationData);
  if (geoCoordinates.geoCoordinates.length === 0) return { error: 'Invalid location' };
  const weatherData = await getWeather(geoCoordinates.geoCoordinates);
  const tweetBody = await generateTweet(geoCoordinates.formattedAddress, weatherData);
  const response = await client.post('statuses/update', { status: tweetBody });
  return response;
};


module.exports = {
  tweet,
  getState,
};
