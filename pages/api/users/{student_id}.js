import db from '../../../database/connectdata';
import {getUser,putUser,deleteUser} from  '../../../database/controller';

export default async function indexuser(req,res){
    db().catch(() => res.status(405).json({error:"error connect"}));
  const{method} = req
  switch(method){
        case "GET":
        getUser(req,res);
        break;
        case'PUT':
        putUser(req,res);
        break;
        case'DELETE':
        deleteUser(req,res);
        break;
        default:
            res.setHeader('Allow',['GET','PUT','DELETE']);
            res.status(405).end('Method ${method} Not Allowd');
            break;
  }
    
}