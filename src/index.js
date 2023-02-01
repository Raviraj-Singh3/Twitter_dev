const express =  require('express')
const connect = require('./config/database')
const Tweet = require('./models/tweet')
const app = express();

app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log("database connected");

    const tweet = await Tweet.create({
         content: 'hey'
        
    })
    console.log(tweet)
})