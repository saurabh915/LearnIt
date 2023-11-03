// import React, { useState, useEffect } from 'react';

// function CurrentQuiz() {
//   const [quizData, setQuizData] = useState(null);

//   useEffect(() => {
//     // Fetch quiz data from your backend API endpoint
//     async function fetchQuizData() {
//       try {
//         const response = await fetch('/api/quiz'); // Adjust the API endpoint to match your actual route
//         if (response.ok) { 
//           const data = await response.json();
//           if (data.length > 0) {
//             // Assuming the first quiz is the "current" quiz
//             setQuizData(data[0]);
//           }
//         } else {
//           console.error('Failed to fetch quiz data');
//         }
//       } catch (error) {
//         console.error('Error fetching quiz data', error);
//       }
//     }

//     fetchQuizData();
//   }, []);

//   return (
//     <div>
//       <h1>Current Quiz</h1>
//       {quizData ? (
//         <div>
//           <h2>{quizData.title}</h2>
//           <ul>
//             {quizData.questions.map((question, index) => (
//               <li key={index}>
//                 <p>{question.questionText}</p>
//                 <ul>
//                   {question.options.map((option, i) => (
//                     <li key={i}>{option}</li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading quiz data...</p>
//       )}
//     </div>
//   );
// }

// export default CurrentQuiz;

import React from 'react'
import { Link } from 'react-router-dom';


export default function CurrentQuiz() {
  return (
    <div>
      
      File created succesfully .........!

      <div>
        

          <Link to='.\Quiz\Components\Quiz' >
            <div className='btn btn-primary' >Give Test</div>

          </Link>

      </div>

    </div>
  )
}
