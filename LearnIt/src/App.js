import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Form from './Components/Login/Form';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome.jsx'
import Test from './Components/Welcome/Test/Test.jsx'
import Performance from './Components/Performance/Performance';
import Subjects from './Components/Welcome/Test/Subjects/Subjects';
function App() {
  return (
    <div className="App">
     
     
<Router>

     <Navbar/>
     <Routes>
    <Route exact path = "/Student" element ={<Form />} />
    <Route exact path = "/test" element ={<Test />} />
    <Route exact path = "/subjects" element ={<Subjects />} />
    <Route exact path = "/Parent" element ={<Form />} />
    <Route exact path = "/Teacher" element ={<Form />} />
    <Route exact path = "/welcome" element ={<Welcome />} />
    <Route exact path = "/performance" element ={<Performance />} />

     </Routes>
   </Router>  

   
    </div>
  );
}

export default App;
