//controller//
import User from '../table/User';
//GET USER
export async function getUsers(req,res){
    try{
        const users = await User.find({})

            if(!users) return res.status(404).json({error:"data not found"})
            res.status(200).json(users)
        }catch (error){
            res.status(404).json({error:"ERROR WHILE FETCHING DATA"})
        }
        }
//GET USER 1
export async function getUser(req,res){
    try{
        const {student_id} = req.query;
        if(student_id){
            const user = await User.findById(student_id);
            res.status(200).json(user)
        }
        res.status(404).json({error:"user not selected"});
    }
    catch(error){
        res.status(404).json({error:"cannot get user data"});
        
    }
}

//POST USER 
export async function postUser(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error:"form data not provied"})
        User.create(formData,function(err,data){
                return res.status(200).json(data)
        })
    }
    catch(error){
        return res.status(404).json({error:"error "})
    }
}
//PUT USER -->UPDATE USER
export async function putUser(req,res){
    try{
        const{student_id} = req.query;
        const formData    = req.body;
        if(student_id && formData){
            await User.findByIdAndUpdate(student_id,formData);
            res.status(200).json(formData)
        }
        res.status(400).json({error:"user not selected"})
    }
    catch(error){
        return res.status(404).json({error:"error while update data"})
    }
}
//delete USER
export async function deleteUser(req,res){
    try{
        const {student_id} = req.query;
        if(student_id){
            const user = await User.findByIdAndDelete(student_id);
            return res.status(200).json({deleted:student_id})
        }
        res.status(404).json({error:"User not selected"});
    }
    catch{

    }
}