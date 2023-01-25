import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import User from '../../../model/User';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../../../database/connectdata';
db();

export default NextAuth({
	
	providers: [
		CredentialsProvider({
		  // The name to display on the sign in form (e.g. 'Sign in with...')
		  name: 'Credentials',
		  
		  credentials: {
			username: { name: "username"  },
			password: {  name: "password" }
		  },
		  async authorize(credentials,req) {
			const username = credentials.username ;
			const password = credentials.password ;
			const user = await User.findOne ( { username } )
			if (!user) {
				throw new Error ( " You haven't registered yet " )
			}
			if ( user ) {
				return signInUser ( { password , user } )
		  }
		}
		})
	  ],
	secret : "secret",
	database: process.env.MONGODB_URI,


  });	

  const signInUser = async({password,user}) => {
	if(!user.password){
		throw new Error("Please enter pasword")
	}
	if(req.session.isAdmin){
		req.session.redirectTo = '/admin_page'
	}
	else{
		req.session.redirectTo = '/user_page'
	}
	return user
}

export const redirect = (req, res) => {
    if (req.session.redirectTo) {
        res.writeHead(302, { Location: req.session.redirectTo });
        res.end();
    } else {
        res.json({});
    }
};

