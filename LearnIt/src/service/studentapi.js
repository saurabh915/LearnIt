import axios from "axios";
const url = "http://localhost:8000"
export const addUser = async(data)=>{
    try {
        console.log("made request");
     let res =    await axios.get(`${url}/addUser`);
     return res.data;
    } catch (error) {
        console.log("error while adduser",error.message);
    }
}