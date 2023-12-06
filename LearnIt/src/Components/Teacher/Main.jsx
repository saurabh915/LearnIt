// Main.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Main.css'; // Import your CSS file

// Import your components for different pages
import Student_List from './Student_List';
import Performance from './../Performance/Performance';

export default function Main() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="main-container">
      {/* Left side - Navigation */}
      <div className="navigation-container">
       <Button onClick={() => handleLinkClick('Student_List')} className="nav-button">
          Student List
        </Button>
        <Button onClick={() => handleLinkClick('Performance')} className="nav-button">
          Performance
        </Button>
       
      </div>

      {/* Right side - Display Redirected Content */}
      <div className="content-container">
        {selectedLink === 'Performance' && <Performance />}
        {selectedLink === 'Student_List' && <Student_List />}
      </div>
    </div>
  );
}
