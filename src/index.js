import  express from 'express';
import connect from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';

import User from './models/user.js';
import UserRespository from './repository/user-repository.js';
import TweetRepository from './repository/tweet-repository.js';
import LikeService from './services/like-service.js'


//const setupAndStartServer = async()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
   

    app.use('/api', apiRoutes);

    app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log("database connected");

    // const userRepo = new UserRespository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);
    // const users = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[5].id, 'Tweet', users[0].id);
})
//}
//setupAndStartServer();