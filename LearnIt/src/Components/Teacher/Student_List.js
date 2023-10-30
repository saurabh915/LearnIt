import React, { useState, useEffect } from "react";
import "./student_list.css";

const StudentList = () => {
  const [students] = useState([
    {
      name: "John Doe",
      usn: "19CS101",
      branch: "Computer Science",
      section: "A",
      cgpa: 9.5,
    },
    {
      name: "Jane Doe",
      usn: "19CS102",
      branch: "Computer Science",
      section: "B",
      cgpa: 9.0,
    },
    {
      name: "Peter Parker",
      usn: "19CS103",
      branch: "Computer Science",
      section: "C",
      cgpa: 8.5,
    },
  ]);

  useEffect(() => {
    // Fetch the student data from an API or database here
    // and set the students state variable
  }, []);

  const renderStudentList = () => {
    return (
      <table className="student-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>USN</th>
            <th>Branch</th>
            <th>Section</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.usn}>
              <td>{student.name}</td>
              <td>{student.usn}</td>
              <td>{student.branch}</td>
              <td>{student.section}</td>
              <td>{student.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="student-list-page">
      <h1>Student List</h1>
      {students.length > 0 ? renderStudentList() : <p>No students found.</p>}
    </div>
  );
};

export default StudentList;
