import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Chart from "chart.js/auto";
import "./Performance.css";
import { getstudentdata } from "../../service/quizapi";

const Performance = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
  const [academicMarks, setAcademicMarks] = useState([]);
  const [fresh, setFresh] = useState(false);
  const [currentMarks, setCurrentMarks] = useState([]);
  const [dynamicMarks, setDynamicMarks] = useState([]);
  const [academicSubjects, setAcademicSubjects] = useState([]);
  const [currentSubjects, setCurrentSubjects] = useState([]);
  const [dynamicSubjects, setDynamicSubjects] = useState([]);
  const [performance, setPerformance] = useState("");
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/welcome');
  };

  const navigateToTest = () => {
    navigate('/CurrentScreen2');
  };

  const loadData = () => {
    setFresh(!fresh);
    console.log("Load data called");
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    let Marks = getstudentdata(email);

    Marks.then((data) => {
      console.log("Data received:", data[3]);
    if(data[1] !== undefined){

      var AMarks = Object.values(data[1]);
      var ASubjects = Object.keys(data[1]);
    }

    if (data[2] !== undefined) {
      
      var CMarks = Object.values(data[2]);
      var CSubjects = Object.keys(data[2]);
    }
    if(data[3] !== undefined)
    {
      var DMarks = Object.values(data[3]);
      var DSubjects = Object.keys(data[3]);

    }

    
     

      setAcademicMarks(AMarks);
      setCurrentMarks(CMarks);
      setDynamicMarks(DMarks);

      setAcademicSubjects(ASubjects);
      setCurrentSubjects(CSubjects);
      setDynamicSubjects(DSubjects);

      console.log("All data loaded successfully");
    });
  }, [fresh]);

  useEffect(() => {
    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }

    const data1 = {
      labels: currentSubjects,
      datasets: [
        {
          data: currentMarks,
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };

    const data2 = {
      labels: dynamicSubjects,
      datasets: [
        {
          data: dynamicMarks,
          backgroundColor: ["orange", "purple", "pink"],
        },
      ],
    };

    const ctx1 = chartRef1.current.getContext("2d");
    chartInstance1.current = new Chart(ctx1, {
      type: "pie",
      data: data1,
    });

    const ctx2 = chartRef2.current.getContext("2d");
    chartInstance2.current = new Chart(ctx2, {
      type: "bar",
      data: data2,
    });
if (academicMarks != undefined) {
  var Asum = academicMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  console.log("Sum of all academic marks:", Asum);
}

if(currentMarks !== undefined)
{
  var Csum = currentMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("Sum of all current marks:", Csum);

}
if (dynamicMarks !== undefined) {
  var Dsum = dynamicMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("Sum of all dynamic marks:", Dsum);
  
}
if(Asum !== undefined && Csum !== undefined && Dsum !== undefined)
{
  let total = Asum + Csum + Dsum;
  total = Math.round(total / 10);
if (total > 70 ) {
      setPerformance("Fast Learner");
    } else {
      if (total > 50) {
        setPerformance("Average Learner");
      } else {
        setPerformance("Slow Learner");
      }
    }
}

    
  }, [fresh, academicMarks, currentMarks, dynamicMarks, academicSubjects, currentSubjects, dynamicSubjects]);

  return (
    <div className="Performance">
      <h2>Test Performance</h2>
      <button onClick={loadData} className="btn btn-primary">Load Data</button>
      <div className="chart-content">
        <div>
          <h1>Past Test Performance</h1>
        </div>
        <div>
          <h1>Current Test Performance</h1>
        </div>
      </div>
      <div className="chart-container">
        <canvas style={{ border: "3px solid black", margin: "10px", height: "100px", width: "200px" }} ref={chartRef1}></canvas>
        <canvas style={{ border: "3px solid black", margin: "5px", height: "290px", width: "200px" }} ref={chartRef2}></canvas>
      </div>
      <h1>Student Categorization</h1>
  {dynamicMarks?.length == 3 ?<><div className="category" style={{ justifyContent: "center" }}>
        <div>Your Marks: {parseInt(academicMarks)}</div>
        <div>Here is your Category</div>
        <div>{performance}</div>
      </div></>:<><div>Give All Tests to View Your Category</div></>}  
      <br />
      <div className="foot">
        <div onClick={navigateToTest} className="btn btn-primary">Give Your Next Test</div>
        <div onClick={navigateToHome} className="btn btn-primary">Home Page</div>
      </div>
    </div>
  );
};

export default Performance;
