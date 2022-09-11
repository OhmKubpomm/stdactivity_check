import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      student_id:'20',
      student_date:'2022-02-30',
      student_department:'ท่องเที่ยว',
      student_field:'เทคโนโลยีสารสนเทศ',
      student_name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      student_id:'20',
      student_date:'2022-02-30',
      student_department:'ท่องเที่ยว',
      student_field:'เทคโนโลยีสารสนเทศ',
      student_name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
 
  ],
}

export default data;