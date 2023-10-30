import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function MainScreen() {
  return (
    <div>
      {/* <PerformancePage/> */}
      File created succesfully .........!

      <div>
        

          <Link to='/performance' >
            <Button >Performance</Button>

          </Link>

          <Link to='/Attendence'>
            <Button >Attendence</Button>
          </Link>

          <Link to='/Feedback'>
            <Button >Feedback</Button>

          </Link>
        

        


      </div>

    </div>
  )
}
