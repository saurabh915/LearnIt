import { response } from "express";

export const addUser = async(req,res)=>{
    try {
        console.log(req.body);
     
 
        res.status(200).json({msg:'message from server: Task Complete zali Kay ??'})
    
      

   
return ;

} catch (error) {
    return res.status(500).json(error)
}
}