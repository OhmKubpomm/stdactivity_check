//controller//
import Map from '../../../model/Map';

//GET location
export async function getLocations(req, res) {
    try {
        const location = await Map.find();
        // If no location are found, return a 404 error
        if (!location.length) return res.status(404).json({ error: 'Data not found' });
        // Otherwise, return the list of location
        return res.status(200).json(location);
    } catch (error) {
        // If an error occurs, return a 500 error
        return res.status(500).json({ error: 'Error while fetching data' });
    }
}

//GET location 1
export async function getLocation(req,res){
    try{
        const locationId = req.params.locationId;
        const location = await Map.findOne({locationId});
        if (!location) return res.status(404).json({error: "data not found"});
        res.status(200).json(location)
    }
    catch(error){
        res.status(500).json({error:"cannot get location data"});
    }
}




//POST Location 
export async function postLocation(req,res){
    try{
        const formData = req.body;
        if(!formData)return res.status(400).json({error:"form data not provided"});
        const location = new Map(formData);
        const savedLocation = await location.save();
        return res.status(201).json(savedLocation);
    }
    catch(error){
        return res.status(500).json({error:"error while saving data"})
    }
}