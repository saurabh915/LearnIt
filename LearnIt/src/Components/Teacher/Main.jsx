import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

// import './Main.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";




export default function Main() {
  return (
    <div>
      {/* File created successfully */}
      
      {/*<---------------------------- Class Allotted section-----------------------> */}

<Link to='/Class_alloted'>
            <Button >Class Allotted</Button>   </Link>
            
            <Link to='/Performance'>
            <Button >Performance</Button>   </Link>

            <Link to='/Subject_Selection'>
            <Button >Subject_Selection</Button>   </Link>

            <Link to='/Student_List'>
            <Button >Student_List</Button>   </Link>
   
    


      
      
    </div>
  )
}


