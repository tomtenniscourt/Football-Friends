 const URL = "http://localhost:5001"
 
 export const getAllUsers = async() => {
    try {
       const result = await fetch(`${URL}/Users`)
       return result.json()
    } catch(err) {
       return err
 }}

