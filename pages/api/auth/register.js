import bcryptjs from 'bcrypts';
import Users from '../../../table/User';

export default async function  Regis(req,res) {
    const body = req.body;
    const userExit = await User.findOne({email: body.email});
    
    if(userExit){
        res.status(200).json({message:'Already Signin'})
        return;
    }
const salt = await bcryptjs.genSalt(10);
const hashpass = await bcryptjs.hash(body.password,salt);
const user = new Users({email:body.email,password:hashpass});
await user.save()
res.status(200).json({message:'Registered success'});
}

