
import mongoose from "mongoose"

const Connection = async () =>{
    const URL='mongodb://amy:1234@ac-bztvls9-shard-00-00.ts2n9jb.mongodb.net:27017,ac-bztvls9-shard-00-01.ts2n9jb.mongodb.net:27017,ac-bztvls9-shard-00-02.ts2n9jb.mongodb.net:27017/?ssl=true&replicaSet=atlas-100i3b-shard-0&authSource=admin&retryWrites=true&w=majority';

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('database connected successfully');

    }catch(error) {
        console.log('error while connection to database', error);

    }

}

export default Connection;