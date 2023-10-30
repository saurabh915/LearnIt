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
import Test from './Components/Welcome/Test/Test'
import Subjects from './Components/Welcome/Test/Subjects/Subjects'

function App() {
  return (
    
    <div className="App">
     
     
<Router>

     <Navbar/>
     <Routes>
    <Route exact path = "/Student" element ={<Form />} />
    <Route exact path = "/Parent" element ={<Form />} />
    <Route exact path = "/Teacher" element ={<Form />} />
    <Route exact path = "/Welcome" element ={<Welcome />} />
    <Route exact path = "/test" element ={<Test />} />
    <Route exact path = "/subjects" element ={<Subjects />} />

   {/* <----------------- Teacher Section ------------> */}

    <Route exact path = "/main" element ={<Main />} />
    <Route exact path = "/class_alloted" element ={<Class_alloted />} />
    <Route exact path = "/Student_List" element ={<Student_List />} />
    <Route exact path = "/Subject_Selection" element ={<Subject_Selection />} />

   
    {/* <---------------Parent Section --------------> */}
    <Route exact  path="/mainscreen" element ={<MainScreen/>}/>
    <Route exact path = "/performance" element ={<Performance />} />
<Route exact path ="/attendence" element={<Attendence/>}/>
<Route exact path="/feedback" element={<Feedback/>}/>
     </Routes>
   </Router>  

   
    </div>
  );
}

export default App;
