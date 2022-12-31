const BASE_URL = "http://localhost:3000/";

// Get all users
export const getUsers = async() => {
  try {
    const response = await fetch(`${BASE_URL}api/users`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get a single user
export const getUser = async(student_id) => {
  try {
    const response = await fetch(`${BASE_URL}api/users/${student_id}`);
    const json = await response.json();
    if (json) return json;
    return {};
  } catch (error) {
    console.error(error);
    return {};
  }
}

// Add a new user
export async function addUser(formData) {
  try {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    };

    const response = await fetch(`${BASE_URL}api/users`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return {};
  }
}

// Update a user
export async function updateUser(student_id, formData) {
  try {
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    };

    const response = await fetch(`${BASE_URL}api/users/${student_id}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return {};
  }
}

// Delete a user
export async function deleteUser(student_id) {
  try {
    const options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    };

    const response = await fetch(`${BASE_URL}api/users/${student_id}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return {};
  }
}