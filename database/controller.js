//controller//
import User from '../model/User';

import axios from 'axios';

//GET USER
export async function getUsers(_req, res) {
    try {
      // Make a GET request to the /api/users route using axios
      const response = await axios.get('/api/users');
      const users = response.data;
  
      // If no users are found, return a 404 error
      if (!users.length) return res.status(404).json({ error: 'Data not found' });
  
      // Otherwise, return the list of users
      return res.status(200).json(users);
    } catch (error) {
      // If an error occurs, return a 404 error
      return res.status(404).json({ error: 'Error while fetching data' });
    }
  }
  

//GET USER 1
export async function getUser(req,res){
    try{
        const {student_id} = req.query;
        if(student_id){
            const response = await axios.get(`/api/users/${student_id}`);
            const user = response.data;
            if (!user) return res.status(404).json({error: "data not found"});
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
      
        const user = new User(formData);
        const savedUser = await user.save();
        return res.status(200).json(savedUser);
        const formData = req.body;
        if(!formData)return res.status(404).json({error:"form data not provied"});

        const response = await axios.post('/api/users', formData);
        return res.status(200).json(response.data);
    }
    catch(error){
        return res.status(404).json({error:"error while update data"})
    }
}
//PUT USER -->UPDATE USER
export async function putUser(req,res){
    try{
        const{student_id} = req.query;
        const formData    = req.body;
        if(student_id && formData){
            const response = await axios.put(`/api/users/${student_id}`, formData);
            res.status(200).json(response.data)
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
            const response = await axios.delete(`/api/users/${student_id}`);
            return res.status(200).json({deleted:student_id})
        }
        res.status(404).json({error:"User not selected"});
    }
    catch{
    }
}