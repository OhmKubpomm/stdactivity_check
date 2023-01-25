import db from '../../../database/connectdata';
import { getActivity, postActivity, putActivity, deleteActivity } from './activitycontroller';
export default async function indexactivity(req, res) {
  try {
    // Connect to the database
    await db().catch(() => res.status(500).json({ error: 'Error connecting to the database' }));

    // Get the HTTP method from the request
    const { method } = req;

    // Handle different HTTP methods
    switch (method) {
      case 'GET':
        // GET ALL USERS
        await getActivity(req, res);
        break;
      case 'POST':
        // CREATE NEW USER
        await postActivity(req, res);
        break;
      case 'PUT':
        // UPDATE USER
        await putActivity(req, res);
        break;
      case 'DELETE':
        // DELETE USER
        await deleteActivity(req, res);
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