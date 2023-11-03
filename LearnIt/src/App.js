import './App.css';


import Navbar from './Components/Navbar/Navbar.jsx';
import Form from './Components/Login/Form';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Performance from './Components/Performance/Performance';
import Main from './Components/Teacher/Main';
import MainScreen from './Components/Parent/MainScreen';
import Attendence from './Components/Parent/Attendence';
import Feedback from './Components/Parent/Feedback';
import Student_List from './Components/Teacher/Student_List';
import Subject_Selection from './Components/Teacher/Subject_Selection';
import Class_alloted from './Components/Teacher/Class_alloted';
import Welcome from './Components/Welcome/Welcome';
import Classes from './Components/Teacher/Classes';
import HomePage from './Components/Home.jsx';
import TestScreen from './Components/Welcome/Test/TestScreen.js';
import CurrentScreen1 from './Components/Welcome/Test/CurrentTest/CurrentScreen1.js';
// import Quiz1 from './Components/Welcome/Test/CurrentTest/Quiz1.js';

import Social1 from './Components/Welcome/Test/CurrentTest/Subjects1/Social1/Social1.js';
import Math1 from './Components/Welcome/Test/CurrentTest/Subjects1/Math1/Math1.js';
import Science1 from './Components/Welcome/Test/CurrentTest/Subjects1/Science1/Science1.js';
import Social2 from './Components/Welcome/Test/Untaught/Subjects2/Social2/Social2.js';
import Math2 from './Components/Welcome/Test/Untaught/Subjects2/Math2/Math2.js';
import Science2 from './Components/Welcome/Test/Untaught/Subjects2/Science2/Science2.js';
import CurrentScreen2 from './Components/Welcome/Test/Untaught/CurrentScreen2.js';
import Socialp from './Components/Welcome/Test/Untaught/Subjects2/Social2/Socialp.js';
import Mathp from './Components/Welcome/Test/Untaught/Subjects2/Math2/Mathp.js';
import Sciencep from './Components/Welcome/Test/Untaught/Subjects2/Science2/Sciencep.js';

function App() {
  return (

    <div className="App">


      <Router>

        <Navbar />
        {/* <----------------- Student Section ------------> */}

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Student" element={<Form />} />
          <Route exact path="/Parent" element={<Form />} />
          <Route exact path="/Teacher" element={<Form />} />
          <Route exact path="/Welcome" element={<Welcome />} />
          <Route exact path="/TestScreen" element={<TestScreen />} />
          <Route exact path="/CurrentScreen1" element={<CurrentScreen1 />} />
          <Route exact path="/Social1" element={<Social1/>}/>
          <Route exact path="/Math1" element={<Math1/>}/>
          <Route exact path="/Science1" element={<Science1 />} />
          <Route exact path="/CurrentScreen2" element={<CurrentScreen2/>} />
          <Route exact path="/Social2" element={<Social2/>}/>
          <Route exact path="/Math2" element={<Math2/>}/>
          <Route exact path="/Science2" element={<Science2 />} />
          <Route exact path="/Socialp" element={<Socialp/>} />
          <Route exact path="/Mathp" element={<Mathp/>}/>
          <Route exact path="/Sciencep" element={<Sciencep/>}/>

          {/* <----------------- Teacher Section ------------> */}

          <Route exact path="/main" element={<Main />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/class_alloted" element={<Class_alloted />} />
          <Route exact path="/Student_List" element={<Student_List />} />
          <Route exact path="/Subject_Selection" element={<Subject_Selection />} />


          {/* <---------------Parent Section --------------> */}
          <Route exact path="/mainscreen" element={<MainScreen />} />
          <Route exact path="/performance" element={<Performance />} />
          <Route exact path="/attendence" element={<Attendence />} />
          <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
