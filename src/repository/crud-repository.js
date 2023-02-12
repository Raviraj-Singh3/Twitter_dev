
class crudRepository {

    constructor(model){
        this.model = model;
    }

    async create(data) {
        try {
            console.log("crud repo",data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error;
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.findByIdAndUpdate(modelId, data, {new: true});
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error;
        }
    }
    async destroy(id) {
        try {
            const result = await this.model.findByIdAndRemove(id);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error;
        }
    }
}

export default crudRepository;