import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Class_alloted() {
  return (
    <div>
      csacasc
           
{/* <--------------------------Dropdown Classes of students --------------------> */}
   
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item to="#/action-1">Class 8</Dropdown.Item>
        <Dropdown.Item to="#/action-2">Class 9</Dropdown.Item>
        <Dropdown.Item to="#/action-3">Class 10</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
  )
}
