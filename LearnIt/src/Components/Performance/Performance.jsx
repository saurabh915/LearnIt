import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import Chart from "chart.js/auto";
import "./Performance.css";
import axios from "axios";
import { getstudentdata } from "../../service/quizapi";
const Performance = () => {

  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
const [academicMarks, setAcademicMarks] = useState([]);
const [fresh, setRefresh] = useState(false);
const [currentMarks, setCurrentMarks] = useState([])
const [dynamicMarks, setDynamicMarks] = useState([])
const [academiSubjects, setAcademicSubjects] = useState([]);
const [currentSubjects, setCurrentSubjects] = useState([])
const [dynamicSubjects, setDynamicSubjects] = useState([])
  const [performance, setperformance] = useState("");

  const navigate = useNavigate();



  const navigatetohome =()=>{

navigate('/welcome')
  }
  const navigatetotest =()=>{

navigate('/CurrentScreen2')
  }
const loaddata = ()=>{
  setRefresh(!fresh);
  console.log("load data called");
}
  useEffect( () => {
    const email = localStorage.getItem("email");
    let Marks =  getstudentdata(email);
console.log(Marks);
Marks.then((data)=>{
  console.log("data2 is given ");
  console.log(data[2]);
  let AMarks = [];
  let CMarks = [];
  let DMarks = [];
  
  let ASubjects= [];
  let CSubjects = [];
  let DSubjects = [];
AMarks = Object.values(data[1]);
CMarks = Object.values(data[2]);
DMarks = Object.values(data[3]);

ASubjects = Object.keys(data[1]);
CSubjects = Object.keys(data[2]);
DSubjects = Object.keys(data[3]);


setAcademicMarks(AMarks);
setCurrentMarks(CMarks);
setDynamicMarks(DMarks);


setAcademicSubjects(ASubjects);
setCurrentSubjects(CSubjects);
setDynamicSubjects(DSubjects);
console.log("all work is");
  console.log(academicMarks);
  console.log(currentMarks);
  console.log(dynamicMarks);
})


   },[]);
  
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

  // Data for the second chart
  const data2 = {
    labels: dynamicSubjects,
    datasets: [
      {
        data:  dynamicMarks,
        backgroundColor: ["orange", "purple", "pink"],
      },
    ],
  };

  // Chart 1
  const ctx1 = chartRef1.current.getContext("2d");
  chartInstance1.current = new Chart(ctx1, {
    type: "pie",
    data: data1,
  });

  // Chart 2
  const ctx2 = chartRef2.current.getContext("2d");
  chartInstance2.current = new Chart(ctx2, {
    type: "bar",
    data: data2,
  });

  const Asum = academicMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("sum of all is"+ " " + Asum)
  const Csum = currentMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("sum of all is"+ " " + Csum)
  const Dsum = currentMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("sum of all is"+ " " + Dsum)

  let total = Asum  + ( Csum * 10) + (Dsum * 10);
  total = Math.round(total /10);
  if(total >70)
  {
    setperformance("Fast Learner")
  } 
  else{
    if(total > 50){
      setperformance("Average Learner")
    }
    else{
      setperformance("Slow Learner")
    }
  } 
}, [fresh])

 

  return (
    <div className="Performance">
      <h2>Test Performance</h2>
      <button onClick={()=>{loaddata()}}className="btn btn-primary">Load Data</button>
      <div className="chart-container">
      
        <h1>Current Test Performance</h1>
        <canvas
          style={{ border: "2px solid black", margin: "10px" }}
          ref={chartRef1}
        >
        </canvas>
        <h1>Dynamic Test Performance</h1>
        <canvas style={{ border: "2px solid black" }} ref={chartRef2}></canvas>
      </div>
      <div>
        <h1>student categorization</h1>
        <div>{parseInt(academicMarks)}</div>
        <div>Here is your Category</div>
        <div>{performance}</div>
        
      </div>
      <br />
      <div className="foot">

<div onClick={()=>{ navigatetotest()}} className="btn btn-primary">Give Your Next Test</div>
      <div onClick={()=>{ navigatetohome()}} className="btn btn-primary">Home Page</div>
      </div>
    </div>
  );
};

export default Performance;
