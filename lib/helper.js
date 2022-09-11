const BASE_URL="http://localhost:3000/"
//all user
export const getUsers = async(student_id) => {
    const response = await fetch(`${BASE_URL}api/users`)
    const json = await response.json()
    return json;
}

//single user
export const getUser = async(formData) => {
    const response = await fetch(`${BASE_URL}api/users/${student_id}`)
    const json = await response.json()
    if(json) return json;
    return{}
}
//posting new user`
export async function addUser(formData){
    try{
        const Options = {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formData)
        }
       
        const response = await fetch(`${BASE_URL}api/users`, Options)
        const json = await response.json()
        return json;
    }
    catch(error){
    return error;
    }
}
//update a new user
export async function updateUser(student_id,formData){
    const Options={
        method:'PUT',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(formData)
    }
    const response = await fetch(`${BASE_URL}api/users/${student_id}`,Options)
    const json = await response.json()
    return json;
}
//delete a new user
export async function deleteUser(student_id){
    const Options={
        method:'DELETE',
        headers:{'Content-Type':"application/json"},
    
    }
    const response = await fetch(`${BASE_URL}api/users/${student_id}`,Options)
    const json = await response.json()
    return json;
}
