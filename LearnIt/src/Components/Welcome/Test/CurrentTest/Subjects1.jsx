//this is my Subjects.jsx
/*import "./Subjects1.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Subjects from './../Untaught/Subjects2';
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
    
    <section class="main">
      <div class="main-top">
        <h1>Subject</h1>
      
      </div>
      <section class="main-skills">
        <div class="card">
         
          <h3>Science</h3>
          <p>Join Over 1 million Students.</p>
          <button>Get Started</button>
        </div>
        <div class="card">
         
          <h3>Mathematics</h3>
          <p>Join Over 3 million Students.</p>
          <button>Get Started</button>
        </div>
        <div class="card">
         
          <h3>Social Science</h3>
          <p>Join Over 2 million Students.</p>
          <button>Get Started</button>
        </div>
        <div class="card">
          
          <h3>Hindii</h3>
          <p>Join Over 1 million Students.</p>
          <button>Get Started</button>
        </div>
      </section>
      );
      

    
  

export default Subjects */
 
 //Import the CSS file
import "./Subjects1.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Subjects() {
  const [subjects, setSubjects] = useState(["Science", 'Maths', "Social"]);
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
      body: JSON.stringify({ email: email }),
      // Additional options can be added, such as body for POST requests
    };

    fetch('http://localhost:8000/subjects', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let arr = [];
        arr = Object.keys(data.subjects);
        console.log(arr);
        setUSubjects(arr);
        console.log(Usubjects);
        const newArray = subjects.filter(element => !Usubjects.includes(element));
        console.log("new array is" + newArray);
        setFSubjects(newArray);
      })
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);

  const giveTest = (subject) => {
    navigate(`/${subject.replace(/\s/g, "")}1`);
  };

  return (
    <section className="main">
      <div className="main-top">
        <h1>Subject</h1>
      </div>
      <section className="main-subjects">
        <div className="card">
          <h3>Science</h3>
          <p>Enhancing your scientific concepts</p>
          <button onClick={() => giveTest("Science")}>Get Started</button>
        </div>
        <div className="card">
          <h3>Mathematics</h3>
          <p>Strengthning mathematical skills.</p>
          <button onClick={() => giveTest("Maths")}>Get Started</button>
        </div>
        <div className="card">
          <h3>Social Science</h3>
          <p>Encouraging a holistic view of the world.</p>
          <button onClick={() => giveTest("Social")}>Get Started</button>
        </div>
        
      
      </section>
    </section>
  );
}

export default Subjects;
