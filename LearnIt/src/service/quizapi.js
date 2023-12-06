
const url = "http://localhost:8000"
// export const getstudentdata = async(credentials)=>{
//     try {
// console.log("trying to make request");
//         const response = await fetch(`http://localhost:8000/studentdata`, {
//             method: 'POST',
//             headers: {
//               "Content-Type": "application/json",
             
//             },
//             body: JSON.stringify(

//               { email: credentials}
      
//               )
//           });
//           const averageMarks = await response.json();
//      let avg =  averageMarks.user[0].AverageMarks;
//      let subject  = averageMarks.user[0].Marks
//      let ans  = [avg, subject]
//           return ans;
       


//     } catch (error) {
//         console.log("error while adduser",error.message);
//     }
// }



export const getstudentdata = async(credentials)=>{
    try {
console.log("trying to make request");
        const response = await fetch(`:http//localhost:8000/studentdata`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { email: credentials}
      
              )
          });
          const averageMarks = await response.json();
     let avg =  averageMarks.user[0].AverageMarks;
     let subject  = averageMarks.user[0].Marks
     console.log();
     let ans  = [avg, subject,averageMarks.user[2],averageMarks.user[3]]
     response.status(202).send(ans);
          return ans;
       


    } catch (error) {
        console.log("error while adduser",error.message);
    }
}




export const postcurrentTestR = async(credentials, cResult)=>{
    try {
console.log("trying to make request");
        const response = await fetch(`http://localhost:8000/cResult`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { 
                email: credentials,
                cResult: cResult
           
              },

              )
          });
          const averageMarks = await response.json();
   
          return averageMarks;
       


    } catch (error) {
        console.log("error while addCmarks",error.message);
    }
}