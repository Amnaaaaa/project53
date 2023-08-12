
import room from'../schema/userSchema2.js';
export const addRoom = async(request , response) => {
    
    const room= request.body;

    const newUser = new room(room)
    try{

        await newUser.save();
        response.status(201).json(newUser);
        }
        catch(error){
            response.status(409).json({message:error.message});
        }
    }

    export const getUsers = async (request, response) => {
        try{
            const users = await User.find();
            response.status(200).json(users);
        }catch( error ){
            response.status(404).json({ message: error.message });
        }
    }

    export const getUser =async (request, response) => {
       // console.log(request.params.id);
        try{
            //const user = await User.find({_id: request.params.id});
            const user =await User.findById(request.params.id);
            response.status(200).json(user);
        }catch( error ){
            response.status(404).json({ message: error.message });
        }
    }

    export const editUser = async (request, response) => {
        // console.log(request.params.id);
        let user= request.body;
        const editUser= new User(user);
         try{
             //const user = await User.find({_id: request.params.id});
            await User.updateOne({ _id:request.params.id},editUser);
             response.status(201).json(editUser);
         }catch( error ){
             response.status(409).json({ message: error.message });
         }
     }
    


     export const deleteUser = async (request, response) => {
    
         try{
            
            await User.deleteOne({ _id:request.params.id});

             response.status(200).json({messgae:'deleted successfully'});

         }catch( error ){
             response.status(409).json({ message: error.message });
         }
     }
    