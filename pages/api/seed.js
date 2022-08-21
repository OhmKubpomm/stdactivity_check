import user from '../../table/user';
import data from '../../database/data';
import db from '../../database/connectdata';

const handler = async (req, res) => {
  await db.connect();
  await user.deleteMany();
  await user.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;