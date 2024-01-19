import mongoose from "mongoose";




export const connect = async ()=>{

    await mongoose.connect('mongodb://gssp4167:Penubothu@ac-mu0cqdd-shard-00-00.wbfhlpt.mongodb.net:27017,ac-mu0cqdd-shard-00-01.wbfhlpt.mongodb.net:27017,ac-mu0cqdd-shard-00-02.wbfhlpt.mongodb.net:27017/?ssl=true&replicaSet=atlas-mm049r-shard-0&authSource=admin&retryWrites=true&w=majority');

}
