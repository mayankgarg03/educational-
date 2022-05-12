import React from 'react'
import "./Home.css"
import web from "../images/undraw_studying_re_deca.svg";
import Common from './Common';

function Home() {
  return (
   <>
   <div className="home-content">
   <Common
           starting="Grow Yourself With US"
           middle="We are the group of talented people making to learnn in your comfort"
           get= "Get Started"
           image={web}
       />

   </div>
      
   </>
  )
}

export default Home