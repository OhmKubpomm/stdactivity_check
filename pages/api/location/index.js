import db from '../../../database/connectdata';
import { getLocation, postLocation, putLocation, deleteLocation } from './locationcontroller';
export default async function indexlocation(req, res) {
  try {
    // Connect to the database
    await db().catch(() => res.status(500).json({ error: 'Error connecting to the database' }));

    // Get the HTTP method from the request
    const { method } = req;

    // Handle different HTTP methods
    switch (method) {
      case 'GET':
        // GET ALL locations
        await getLocation(req, res);
        break;
      case 'POST':
        // CREATE location
        await postLocation(req, res);
        break;
      case 'PUT':
        // UPDATE location
        await putLocation(req, res);
        break;
      case 'DELETE':
        // DELETE location
        await deleteLocation(req, res);
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