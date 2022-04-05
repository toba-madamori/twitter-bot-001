const rwClient = require('./twitterClient')
const cronJob = require('cron').CronJob

const tweet = async()=>{
    try {
        await rwClient.v1.tweet("automated tweet!!")
    } catch (error) {
        console.error(error)
    }
}


const job = new cronJob('40 14 * * *', ()=>{
    tweet()
})

// job.start();