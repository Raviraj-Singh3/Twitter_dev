import TweetService from '../services/tweet-service.js';

const tweetService = new TweetService();

export const create = async(req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'successfully created a tweet',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'can not create a tweet',
            err: error
        })
    }
}