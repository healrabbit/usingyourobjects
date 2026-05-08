import rightarrow from '/assets/arrowright.png'
import rightarrowhover from '/assets/arrowhoverright.png'
import { useState } from 'react';
import setBg from "./bg.js";
import  '/assets/bg1.jpg'
import { NavLink } from "react-router-dom";
import title from '/assets/title.png'
function Homepage() {
      setBg({image: 'url("/assets/bg1.jpg")'})
 const [arrowR, setArrowR] = useState(rightarrow);
  return (
<div> 
    <div> <img
    id="titletape"
    src={title}
    /> </div>
<NavLink to="/artifacts">
  <img id="arrowright" 
  src={arrowR}
  onMouseEnter={() => setArrowR(rightarrowhover)}
  onMouseLeave={() => setArrowR(rightarrow)}
  />
 </NavLink>

</div>
  )
    }

export default Homepage