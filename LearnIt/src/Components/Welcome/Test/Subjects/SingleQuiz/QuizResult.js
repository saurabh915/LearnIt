import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuizResult(props) {
  const Navigate = useNavigate()
const viewPerformance = ()=>{
  Navigate('/performance')
}


  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    
    <button id="next-button" onClick={viewPerformance}>View Performance</button>
    </>
  )
}

export default QuizResult