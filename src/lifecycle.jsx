import rightarrow from '/assets/arrowright.png'
import rightarrowhover from '/assets/arrowhoverright.png'
import leftarrow from '/assets/arrowleft.png'
import leftarrowhover from '/assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from './bg.js'
import {NavLink} from 'react-router-dom';
import title from '/assets/lifecycletitle.png'
import doggie from '/assets/doggie.webp'
//menu imports
import menuHome from '/assets/menu-home.png';
import menuArtifacts from '/assets/menu-artifacts.png';
import menuCaseStudies from '/assets/menu-casestudies.png';
import menuLifeCycle from '/assets/menu-lifecycle.png';
import menuSensory from '/assets/menu-sensory.png';
import menuEmotional from '/assets/menu-emotional.png';
import menuResistance from '/assets/menu-resistance.png';
import menuClosing from '/assets/menu-closing.png';
import menuReferences from '/assets/menu-references.png';
import menuHomeHover from '/assets/menu-homehover.png';
import menuArtifactsHover from '/assets/menu-artifactshover.png';
import menuCaseStudiesHover from '/assets/menu-casestudieshover.png';
import menuLifeCycleHover from '/assets/menu-lifecyclehover.png';
import menuSensoryHover from '/assets/menu-sensoryhover.png';
import menuEmotionalHover from '/assets/menu-emotionalhover.png';
import menuResistanceHover from '/assets/menu-resistancehover.png';
import menuClosingHover from '/assets/menu-closinghover.png';
import menuReferencesHover from '/assets/menu-referenceshover.png';


function LifeCycle() {
     setBg({image: 'url("src/assets/bg2.jpg")'})
 const [arrowR, setArrowR] = useState(rightarrow);
 const [arrowL, setArrowL] = useState(leftarrow);

 const [home, setHome] = useState(menuHome);
   const [artifacts,setArtifacts] = useState(menuArtifacts);
 const [caseStudies, setCaseStudies] = useState(menuCaseStudies);
   const [lifeCycle,setLifeCycle] = useState(menuLifeCycle);
 const [sensory, setSensory] = useState(menuSensory);
   const [emotional,setEmotional] = useState(menuEmotional);
 const [resistance, setResistance] = useState(menuResistance);
   const [closing,setClosing] = useState(menuClosing);
 const [references, setReferences] = useState(menuReferences);

  return (
    <div>
      <div id="nav"> 
          <NavLink to="/">
          <img id="menu"
          src ={home}
            onMouseEnter={() => setHome(menuHomeHover)}
        onMouseLeave={() => setHome(menuHome)}
      />
          </NavLink>
     
     <NavLink to="/artifacts">
          <img id="menu"
          src ={artifacts}
          onMouseEnter={() => setArtifacts(menuArtifactsHover)}
        onMouseLeave={() => setArtifacts(menuArtifacts)}
      />
      </NavLink>
  

         <NavLink to="/casestudies">  
          <img id="menu"
          src ={caseStudies}
                  onMouseEnter={() => setCaseStudies(menuCaseStudiesHover)}
        onMouseLeave={() => setCaseStudies(menuCaseStudies)}
      />
          </NavLink>
      
           
          <img id="menu"
          src ={menuLifeCycleHover}
           
      />
         
      
           <NavLink to="/sensory">
          <img id="menu"
          src ={sensory}
            onMouseEnter={() => setSensory(menuSensoryHover)}
        onMouseLeave={() => setSensory(menuSensory)}
      />
          </NavLink>
      
           <NavLink to="/emotional">
          <img id="menu"
          src ={emotional}
            onMouseEnter={() => setEmotional(menuEmotionalHover)}
        onMouseLeave={() => setEmotional(menuEmotional)}
      />
          </NavLink>
      
          <NavLink to="/resistance">
          <img id="menu"
          src ={resistance}
            onMouseEnter={() => setResistance(menuResistanceHover)}
        onMouseLeave={() => setResistance(menuResistance)}
      />
          </NavLink>
      
              <NavLink to="/closing">
          <img id="menu"
          src ={closing}
            onMouseEnter={() => setClosing(menuClosingHover)}
        onMouseLeave={() => setClosing(menuClosing)}
      />
          </NavLink>
      
              <NavLink to="/references">
          <img id="menu"
          src ={references}
            onMouseEnter={() => setReferences(menuReferencesHover)}
        onMouseLeave={() => setReferences(menuReferences)}
      />
          </NavLink>
      
        </div>
<div id="sectionparent" style={{marginBottom: "20vh"}}> 
  <div id="sectionLparent">
  <div id="sectionL">
<p>Over a billion years ago,the Appalachian Mountains stood at around the height of the present-day Rocky Mountains. 
    Through the course of millions of years, erosion caused by glaciers, plant growth, and the flow of wind and water, 
    has whittled them down into the low ridges that they are today.¹ In this same way, albeit on a much smaller 
    and more rapid scale, the objects around us are affected by microscopic wear, and an object is constantly being transformed. 
    Even objects that stand untouched are worn down through chemical processes that take place as it makes contact with the air around it.</p> 

 <p>Why do we generally accept the life cycle of natural things, such as erosion of mountains,  but try so desperately to counter wear
     on our manufactured belongings? An obvious answer to that, of course, is the fact that wearing of mountains happens across lifetimes,
      and wearing of our possessions happens throughout the course of our life. We were not there to see the Appalachian Mountains standing 
      over 10,000 feet tall,, but we were there to see our table, car, childhood stuffed toy, etc. in its pristine form. </p>

   </div>
            <div id="image">
            <img
            id="image"
            src={doggie}
            >
            </img>
            <div id="caption">
              <p> Wear on a relief in Prague. Via r/WellWorn</p>
            </div>
          </div>

  </div>
    <div id="sectionRparent">
      <div id="titles">
        <img
        id="titles"
        src={title}
        >
        </img>
      </div>
 
      
     <div id="sectionR">
<p>Wear tells a life story of an object. The posters on r/WellWorn aren’t intrigued by the wear itself, but the story the wear tells. 
    Patterns of wear on our objects are caused by repeated action through rituals, in the same way wind and water follow consistent paths. 
    Zack’s jeans have a phone sized rectangle faded into the fabric over the pocket, caused by him placing his phone in the pocket every 
    time he wore them. He mentions in our conversation that the phone had worn down a hole that he had to repair. Many of the photos on 
    r/WellWorn are of wear that happened through repeated use, such as patina rubbing off on metal surfaces that hands touched repeatedly ²,
     or divots forming in the center of staircases where thousands of feet have stepped and slowly eroded the concrete. </p>

<p>Wear is an inevitable characteristic of an object, whether it happens slowly and unnoticeable to the human eye, or much more rapidly. 
    Our objects are always in a state of transformation, just like everything else in nature, simply by existing in the world. </p>


     </div>
     <div id ="footnote">
  <p> 1. Clark, Sandra H.B, <i>Birth of the Mountains: The Geologic Story of the Southern Appalachian Mountains</i>(USGS,2001), 17-19.</p>
   <p> 2. Some of the most popular posts on r/WellWorn are photographs of statues and monuments, where certain parts of the sculpture, such as hands on 
   replicas of people, and the tops of heads of replicas of dogs, appear shiny from repeated touch. </p>
  </div>  
     </div>
  </div>

    <NavLink to="/casestudies">
<img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
  </NavLink>
  <NavLink to ="/sensory">
  <img id="arrowright" 
  src={arrowR}
  onMouseEnter={() => setArrowR(rightarrowhover)}
  onMouseLeave={() => setArrowR(rightarrow)}
  />
  </NavLink>

</div>


  )
    }

export default LifeCycle