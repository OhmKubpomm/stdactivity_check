import db from '../../../database/connectdata';
import { getUsers, postUser, putUser, deleteUser } from '../../../database/usercontroller';
export default async function indexuser(req, res) {
  try {
    // Connect to the database
    await db().catch(() => res.status(500).json({ error: 'Error connecting to the database' }));

    // Get the HTTP method from the request
    const { method } = req;

    // Handle different HTTP methods
    switch (method) {
      case 'GET':
        // GET ALL USERS
        await getUsers(req, res);
        break;
      case 'POST':
        // CREATE NEW USER
        await postUser(req, res);
        break;
      case 'PUT':
        // UPDATE USER
        await putUser(req, res);
        break;
      case 'DELETE':
        // DELETE USER
        await deleteUser(req, res);
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