import axios from "axios";
const url = "http://localhost:8000"
export const login = async(data)=>{
    try {
        console.log("made request");
     let res =    await axios.post(`${url}/addUser`,data);
     return res.data;
    } catch (error) {
        console.log("error while adduser",error.message);
    }
}