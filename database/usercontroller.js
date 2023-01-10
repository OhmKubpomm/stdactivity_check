//controller//
import User from '../model/User';




//GET USER
export async function getUsers(req, res) {
    try {
        const users = await User.find();
        // If no users are found, return a 404 error
        if (!users.length) return res.status(404).json({ error: 'Data not found' });
        // Otherwise, return the list of users
        return res.status(200).json(users);
    } catch (error) {
        // If an error occurs, return a 500 error
        return res.status(500).json({ error: 'Error while fetching data' });
    }
}

//GET USER 1
export async function getUser(req,res){
    try{
        const studentId = req.params.studentId;
        const user = await User.findOne({studentId});
        if (!user) return res.status(404).json({error: "data not found"});
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({error:"cannot get user data"});
    }
}

//POST USER 
export async function postUser(req,res){
    try{
        const formData = req.body;
        if(!formData)return res.status(400).json({error:"form data not provided"});
        const user = new User(formData);
        const savedUser = await user.save();
        return res.status(201).json(savedUser);
    }
    catch(error){
        return res.status(500).json({error:"error while saving data"})
    }
}
//POST MULTIPLE USERS
export async function postUsers(req,res){
    try{
        const formData = req.body;
        if(!formData)return res.status(400).json({error:"form data not provided"});
        // map through formData array and create new user instances
        const users = formData.map(user => new User(user));
        // insert all user instances into the database
        const savedUsers = await User.insertMany(users);
        return res.status(201).json(savedUsers);
    }
    catch(error){
        return res.status(500).json({error:"error while saving data"})
    }
}



//PUT USER -->UPDATE USER
export async function putUser(req,res){
    try{
        const studentId = req.params.studentId;
        const formData = req.body;
        if(!formData)return res.status(400).json({error:"form data not provided"});
        const user = await User.findOneAndUpdate({studentId}, formData, {new: true});
        if (!user) return res.status(404).json({ error: "data not found" });
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(500).json({error:"error while updating data"})
    }
}
// DELETE USER
export async function deleteUser(req,res){
    try{
        const studentId = req.params.studentId;
        const user = await User.findOneAndDelete({studentId});
        if (!user) return res.status(404).json({ error: "data not found" });
        return res.status(200).json({message: "Data Deleted"});
    }
    catch(error){
        return res.status(500).json({error:"error while deleting data"})
    }
}

