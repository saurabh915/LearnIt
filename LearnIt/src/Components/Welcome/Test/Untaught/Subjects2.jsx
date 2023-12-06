//this is my Subjects.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Subjects() {
  const [subjects, setSubjects] = useState(["Science", "Maths", "Social Science", "Hindi", "Engish"]);

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch subjects from your server
    fetch('https://your-server-api.com/subjects')
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);
  const giveTest = (subject) => {
    navigate(`/${subject}quiz`)
  }
  return (
    <section className="main">
      <div className="main-top">
        <h1>Subject</h1>
      </div>
      <section className="main-subjects">
        <div className="card">
          <h3>Science</h3>
          <p>Join Over 1 million Students.</p>
          <button onClick={() => giveTest("Science")}>Get Started</button>
        </div>
        <div className="card">
          <h3>Mathematics</h3>
          <p>Join Over 3 million Students.</p>
          <button onClick={() => giveTest("Maths")}>Get Started</button>
        </div>
        <div className="card">
          <h3>Social Science</h3>
          <p>Join Over 2 million Students.</p>
          <button onClick={() => giveTest("Social")}>Get Started</button>
        </div>
        
      
      </section>
    </section>
  );
}

export default Subjects