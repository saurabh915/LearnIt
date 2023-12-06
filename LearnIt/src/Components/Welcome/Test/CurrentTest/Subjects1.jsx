//this is my Subjects.jsx
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Subjects2 from '../Untaught/Subjects2'
import CurrentScreen2 from '../Untaught/CurrentScreen2';
function Subjects() {
  const [subjects, setSubjects] = useState(["Science",'Maths', "Social", "Hindi", "English"]);
  const [Usubjects, setUSubjects] = useState([]);
  const [Fsubjects, setFSubjects] = useState([]);
const [dynamic , setDynamic] =useState(false);
  const navigate = useNavigate();
  const allowDTest = ()=>{

return true;
  }


  useEffect(() => {
    let email = localStorage.getItem("email");
    // Fetch subjects from your server
    const headers = new Headers({
      'Content-Type': 'application/json', // Example header, replace with your headers
    
    });
    
    // Fetch options object with headers
    const requestOptions = {
      method: 'POST', // or 'POST', 'PUT', etc.
      headers: headers,
      body: JSON.stringify({email: email}),
      // Additional options can be added, such as body for POST requests
    };
    

    
    fetch('http://localhost:8000/subjects',requestOptions)
    .then((response) => response.json())
    .then((data) => 
    {
    
      let arr = [];
      arr =   Object.keys(data.subjects) 
      console.log("unactive subjects are in frontend");
      setUSubjects(arr)
      console.log(Usubjects);
const newArray = subjects.filter(element => !Usubjects.includes(element.toLocaleLowerCase()));
console.log("new array is"+ newArray);
setFSubjects(newArray);
console.log("fsubjects length is" + Fsubjects.length);
if (Fsubjects.length == 0) {
  console.log("length is zero");
  setDynamic(false)
}
      }
          )
      .catch((error) => console.error('Error fetching subjects:', error));



     
  },[]);
  const giveTest = (subject) => {
    navigate(`/${subject.replace(/\s/g, "")}1`)
  }
  return (
    <>
      <div>

        { 
        dynamic?
        <>
        <h2>Current Test Subjects</h2>
        <div className="button-container border  ">
          {subjects.map((subject, index) => (
            !Usubjects.includes(subject.toLocaleLowerCase()) ? <button onClick={() => {  giveTest(subject) }} className="btn m-2 btn-primary " key={index}>{subject}</button>:<button onClick={() => { giveTest(subject) }} className="btn m-2 btn-primary disabled" key={index}>{subject}</button>
            ))}
        </div> </>:
           
        <div>
        <CurrentScreen2/>
        </div>
        
        }
      
      </div>
      
      

    </>
  )
}

export default Subjects