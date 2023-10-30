import React, { useEffect, useState } from 'react'

function Subjects() {
    const [subjects, setSubjects] = useState(["Physics","Physics","Physics","Physics","Physics"]);
    useEffect(() => {
        // Fetch subjects from your server
        fetch('https://your-server-api.com/subjects')
          .then((response) => response.json())
          .then((data) => setSubjects(data))
          .catch((error) => console.error('Error fetching subjects:', error));
      }, []);
  
    return (
    <>
     <div>
      <h2>Subjects</h2>
      <div className="button-container border  ">
        {subjects.map((subject, index) => (
          <button className="btn m-2 btn-primary " key={index}>{subject}</button>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Subjects