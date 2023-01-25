//controller//
import Activity from '../../../model/Activity';

//GET Activity
export async function getActivitys(req, res) {
    try {
        const activitys = await Activity.find();
        // If no activitys are found, return a 404 error
        if (!activitys.length) return res.status(404).json({ error: 'Data not found' });
        // Otherwise, return the list of activitys
        return res.status(200).json(activitys);
    } catch (error) {
        // If an error occurs, return a 500 error
        return res.status(500).json({ error: 'Error while fetching data' });
    }
}

//GET Activity 1
export async function getActivity(req,res){
    try{
        const activityId = req.params.activityId;
        const activity = await Activity.findOne({activityId});
        if (!activity) return res.status(404).json({error: "data not found"});
        res.status(200).json(activity)
    }
    catch(error){
        res.status(500).json({error:"cannot get activity data"});
    }
}

//POST Activity 
export async function postActivity(req,res){
    try{
        const formData = req.body;
        if(!formData)return res.status(400).json({error:"form data not provided"});
        const activity = new Activity(formData);
        const savedActivity = await activity.save();
        return res.status(201).json(savedActivity);
    }
    catch(error){
        return res.status(500).json({error:"error while saving data"})
    }
}



//PUT Activity -->UPDATE Activity
export async function putActivity(req,res){
    try{
        const activityId = req.params.activityId;
        const formData = req.body;
        if(!formData)return res.status(400).json({error:"form data not provided"});
        const activity = await Activity.findOneAndUpdate({activityId}, formData, {new: true});
        if (!activity) return res.status(404).json({ error: "data not found" });
        return res.status(200).json(activity);
    }
    catch(error){
        return res.status(500).json({error:"error while updating data"})
    }
}
// DELETE Activity
export async function deleteActivity(req,res){
    try{
        const activityId = req.params.activityId;
        const activity = await Activity.findOneAndDelete({activityId});
        if (!activity) return res.status(404).json({ error: "data not found" });
        return res.status(200).json({message: "Data Deleted"});
    }
    catch(error){
        return res.status(500).json({error:"error while deleting data"})
    }
}

