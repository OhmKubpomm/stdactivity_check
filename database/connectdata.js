import mongoose from 'mongoose';

const db = () =>{


if(mongoose.connections[0].readyState){
  console.log('Already connect');
  return;
}
mongoose.connect(process.env.MONGODB_URI,{},err=>{
  if(err) throw err;
  console.log('Connection success');
})
}
export default db;