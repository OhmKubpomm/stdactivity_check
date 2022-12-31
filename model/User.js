import {Schema,models,model,mongoose} from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    studentid:{type: String},
    studentname: { type: String },
    studentdate:{type: String },
    studentdepartment:{type: String},
    studentfield:{type: String},
    username: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean, required: true, default: false },
  });

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;