require('dotenv').config()

const { TwitterApi } = require('twitter-api-v2')

const client = new TwitterApi({
    appKey:process.env.API_KEY,
    appSecret:process.env.API_KEY_SECRET,
    accessToken:process.env.ACCESS_TOKEN,
    accessSecret:process.env.ACCESS_SECRET,
})

const rwClient = client.readWrite

module.exports = rwClient;