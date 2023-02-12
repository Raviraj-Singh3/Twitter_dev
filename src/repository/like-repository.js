import crudRepository from "./crud-repository.js";
import Like from "../models/like.js";

class LikeRepository extends crudRepository {

    constructor() {
        super(Like)
    }

    async findByUserAndLikeable(data) {
        try {
            const result = await Like.findOne(data);
            return result;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw error
        }
    }
}

export default LikeRepository;