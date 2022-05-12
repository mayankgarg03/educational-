import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Educationalwebapp from './Mainweb/Educationalwebapp';
import Spelling from './mainActivities/Spelling';
import Comprehension from './mainActivities/Activitysecond/Comprehension';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Home from './Mainweb/Home';
import About from './Mainweb/About';
import Contact from './Mainweb/Contact';
import Service from './Mainweb/Service';
import Navbarweb from "./Mainweb/Navbarweb"
import Passage from './Components/Passage/Passage';


function App() {
  return (
    <>  
    <Router>
    <Routes>
    <Route path='/' element={<Educationalwebapp/>}/>
      
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='/spelling' element={<Spelling/>}/>
       <Route path='/Comprehension' element={<Comprehension/>}/>
       </Routes>

    </Router>

    </> 
  
  );
}

export default App;
