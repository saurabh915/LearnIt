import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom';
function Welcome() {
  const navigate = useNavigate();
  function viewPerformance() {
    navigate('/performance')
  }
  // function GiveTest() {
  //   navigate('/test')
  // }
  function GiveTest(){
    navigate('/TestScreen')
  }
  return (
    <>
      <div className='welcome'>
        <div className='left'>
          <h2 style={{ border: "5px solid green" }}>Welcome to journey Champ</h2>
          <h3 style={{ fontSize: '18px', marginTop: '20px', textDecoration: 'underline' }}>This journey will take you at your highest potential</h3>
          <button type="button" onClick={viewPerformance} class="btn btn-success">View Performance</button>
        </div>
        <div className='right' >
          <button type="button" class="btn btn-success" style={{ marginRight: '30px', marginTop: '300px' }}>Profile</button>
          <button type="button" onClick={GiveTest} class="btn btn-success" style={{ marginLeft: '30px', marginRight: "60px", marginTop: '300px' }}>Give Test</button>
          <button type="button" class="btn btn-success" style={{ marginRight: '180px', marginTop: '300px' }}>Content</button>
        </div>
      </div>
    </>
  )
}

export default Welcome