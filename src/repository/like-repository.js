import crudRepository from "./crud-repository.js";
import Like from "../models/like.js";
class likeRepository extends crudRepository {

    constructor() {
        super(Like)
    }
}

export default likeRepository;