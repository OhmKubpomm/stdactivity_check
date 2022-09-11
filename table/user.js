import {Schema,models,model } from 'mongoose';

const userSchema = new Schema(
  {
    student_id:{type: String},
    student_name: { type: String, required: true },
    student_date:{type: String },
    student_department:{type: String},
    student_field:{type: String},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = models.users || model('users', userSchema);
export default User;