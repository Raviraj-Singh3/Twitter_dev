const express =  require('express')
const connect = require('./config/database')
const TweetService = require('./services/tweet-service')
const HashtagRepository = require('./repository/hashtag-repository')
const app = express();

app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log("database connected");

    // const repo = new HashtagRepository();
    // const hashtag = await repo.bulkCreate([
    //     {
    //     title: "cool"
    //     },
    //     {
    //     title: "sunday"
    //     },
    //     {
    //     title: "excited"
    //     }
    // ])
    // console.log(hashtag)

    const repo = new TweetService();
    const tweet = await repo.create({
        content: "today, hey there I am #excited #cool #2023, #newYear",
    })
    console.log(tweet)
})