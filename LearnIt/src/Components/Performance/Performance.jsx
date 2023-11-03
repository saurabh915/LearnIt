import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./Performance.css";
import axios from "axios";
import { getstudentdata } from "../../service/quizapi";
const Performance = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
  const [marks, setmarks] = useState(0);
  const [subject, setsubject] = useState({});
  const [performance, setperformance] = useState("");

  useEffect( () => {
    const email = localStorage.getItem("email");
    let averageMarks =  getstudentdata(email);
  averageMarks.then((data)=>{
    setmarks(data[0]);
    setsubject(data[1]);
  })

 console.log(subject["science"]);

    const currentMarks = 50;
    const dynamicMarks = 45;

    const result =
      0.4 * marks + 0.25 * dynamicMarks + 0.35 * currentMarks;
    setmarks(result);
    if (result < 50) {
      setperformance("Slow Learner");
    } else if (result >= 50 && result < 70) {
      setperformance("Average Learner");
    } else {
      setperformance("Advance Learner");
    }

    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }

    // Data for the first chart
    const data1 = {
      labels: ["Science", "Maths", "English"],
      datasets: [
        {
          data: [subject["science"], subject["maths"],subject["english"]],
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };

    // Data for the second chart
    const data2 = {
      labels: ["Science-A", "Physics", "Maths"],
      datasets: [
        {
          data: [10, 40, 50],
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
  }, []);

  return (
    <div>
      <h2>Test Performance</h2>
      <div className="chart-container">
      
        <h1>Past Test Performance</h1>
        <canvas
          style={{ border: "2px solid black", margin: "10px" }}
          ref={chartRef1}
        >
        </canvas>
        <h1>Current Test Performance</h1>
        <canvas style={{ border: "2px solid black" }} ref={chartRef2}></canvas>
      </div>
      <div>
        <h1>student catagorization</h1>
        <div>{marks}</div>
        <div>Here is your Category</div>
        <div>{performance}</div>
      </div>
    </div>
  );
};

export default Performance;
