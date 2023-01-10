import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
    studentid:'1',
    studentname:'รณกร' ,
    studentdate:'2022-02-30',
    studentdepartment:'ท่องเที่ยว',
    studentfield:'เทคโนโลยีสารสนเทศ',
    username: 'ohm',
    password:bcrypt.hashSync('123456'),
    isAdmin: { type: Boolean, required: true, default: false },
    },
    {
    studentid:'2',
    studentname:'รณกร' ,
    studentdate:'2022-02-30',
    studentdepartment:'ท่องเที่ยว',
    studentfield:'เทคโนโลยีสารสนเทศ',
    username: 'ohm2',
    password:bcrypt.hashSync('123456'),
    isAdmin: { type: Boolean, required: true, default: false },
    },
 
  ],
}

export default data;