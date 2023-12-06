//All subjects 

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function CurrentScreen2() {
  const [subjects, setSubjects] = useState(["Science",'Maths', "Social"]);
  const [Usubjects, setUSubjects] = useState([]);
  const [Fsubjects, setFSubjects] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch subjects from your server
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
      console.log("and data is");
      console.log(data);
    
      let arr = [];
      arr =   Object.keys(data.subjects) 
      setUSubjects(arr)
      console.log(Usubjects);
const newArray = subjects.filter(element => !Usubjects.includes(element.toLocaleLowerCase()));
console.log("new array is"+ newArray.length);
setFSubjects(newArray);


      }
          )
      .catch((error) => console.error('Error fetching subjects:', error));



  }, []);
  const giveTest = (subject) => {
    navigate(`/${subject}p`)
  }
  return (
    <>
      <div>
        <h2>Subjects</h2>
        <div className="button-container border  ">
          {subjects.map((subject, index) => (
            <button onClick={() => { giveTest(subject) }} className="btn m-2 btn-primary " key={index}>{subject}</button>
          ))}
        </div>
      </div>

    </>
  )
}

export default CurrentScreen2;