import User from '../../table/User';
import data from '../../database/data';
import db from '../../database/connectdata';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  
  res.send({ message: 'seeded successfully' });
};
export default handler;