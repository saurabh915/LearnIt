//this is my Subjects.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Subjects() {
  const [subjects, setSubjects] = useState(["Science",'Maths', "Social", "Hindi", "English"]);
  const [Usubjects, setUSubjects] = useState([]);
  const [Fsubjects, setFSubjects] = useState([]);

  const navigate = useNavigate();
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
      console.log(arr);
      setUSubjects(arr)
      console.log(Usubjects);
const newArray = subjects.filter(element => !Usubjects.includes(element));
console.log("new array is"+ newArray);
setFSubjects(newArray);
      }
          )
      .catch((error) => console.error('Error fetching subjects:', error));



     
  }, []);
  const giveTest = (subject) => {
    navigate(`/${subject.replace(/\s/g, "")}1`)
  }
  return (
    <>
      <div>
        <h2>Subjects</h2>
        <div className="button-container border  ">
          {subjects.map((subject, index) => (
          !Usubjects.includes(subject.toLocaleLowerCase())  ? <button onClick={() => { giveTest(subject) }} className="btn m-2 btn-primary " key={index}>{subject}</button>:<button onClick={() => { giveTest(subject) }} className="btn m-2 btn-primary disabled" key={index}>{subject}</button>
          ))}
        </div>
      </div>

    </>
  )
}

export default Subjects