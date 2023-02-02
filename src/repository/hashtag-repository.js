const Hashtag = require('../models/hashtags')

class HashtagRepository {
    
    async create(data) {
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data) {
        try {
            const hashtag = await Hashtag.insertMany(data);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const hashtag = await Hashtag.findByIdAndRemove(id);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(datalist) {
        try {
            const hashtag = await Hashtag.find({
                title: datalist
            })
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;