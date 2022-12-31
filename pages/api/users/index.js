import db from '../../../database/connectdata';
import {getUsers,postUser,putUser,deleteUser} from  '../../../database/controller';
import axios from 'axios';
export default async function indexuser(req,res){
    db().catch(() => res.status(405).json({error:"error connect"}));
  try {
    //type of request
    const {method}=req;

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
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;       
    }
} catch (error) {
    // Handle any errors that may occur during the request
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
}

