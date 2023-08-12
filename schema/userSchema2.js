import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';



 const roomSchema = mongoose.Schema({
    roomno:String,
    roomtype:String,
    servantname:String,
    servantcontact:String,
    roomprice:String,
    roomdescription:String,
    availabilitystatus:String


})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'room');



const room = mongoose.model('room', roomSchema);

export default room;