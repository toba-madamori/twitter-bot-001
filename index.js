const rwClient = require('./twitterClient')

const tweet = async()=>{
    try {
        await rwClient.v1.tweet("automated tweet!!")
    } catch (error) {
        console.error(error)
    }
}

tweet();