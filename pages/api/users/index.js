import db from '../../../database/connectdata';
import {getUsers,postUser,putUser,deleteUser} from  '../../../database/controller';

export default async function indexuser(req,res){
    db().catch(() => res.status(405).json({error:"error connect"}));

    //type of request
    const {method} =req
    switch(method){
        case'GET':
        getUsers(req,res);
        break;

        case'POST':
        postUser(req,res);
        break;

        case'PUT':
        putUser(req,res);
        break;

        case'DELETE':
        deleteUser(req,res);
        break;

        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            res.status(405).end('Method ${method} Not Allowd');
            break;
            
    }
}