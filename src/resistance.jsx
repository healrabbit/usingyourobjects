import rightarrow from '/assets/arrowright.png'
import rightarrowhover from '/assets/arrowhoverright.png'
import leftarrow from '/assets/arrowleft.png'
import leftarrowhover from '/assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from './bg.js'
import {NavLink} from 'react-router-dom';
import title from '/assets/resistancetitle.png'
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


function Senses() {
     setBg({image: 'url("src/assets/bg1.jpg")'})
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
      
           
          <NavLink to="/lifecycle">
                  <img id="menu"
                  src ={lifeCycle}
                    onMouseEnter={() => setLifeCycle(menuLifeCycleHover)}
                onMouseLeave={() => setLifeCycle(menuLifeCycle)}
              />
                  </NavLink>
         
      
          
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
         
      
          
          <img id="menu"
          src ={menuResistanceHover}
      />
         
      
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
<div id="sectionparent" > 
  <div id="sectionLparent">
  <div id="sectionL">
<p>Wear manifests as a form of resistance in several ways. The first: embracing wear. We are, constantly,
     through advertising and social practice, encouraged to possess objects that appear new, clean, and well maintained.
      As object obsolescence continues to become more carefully planned, the choice to utilize and maintain a worn object 
      is an act of defiance towards this obsolescence. Autumn considers this in our conversation, when she discusses her 
      uncertainty towards making future repairs to her object. </p>

<p>Another form or resistance is simply using your objects. Fear of wear has caused us to regard our objects in the same way 
    museums do- as things that should remain static and unchanging . An entire product category is created by this fear, with 
    a variety of protective covers being produced for objects ranging from shoes to furniture. Using your objects, accepting that 
    wear is a natural phenomenon that happens to all objects, thus resists the push to transform objects into untouchable relics. 
    The way Autumn’s family uses objects- being gentle with them, using them only for what they are designed for, swapping multiples, 
    tries to prolong object lifespans but still accepts the fact that they are something that is meant to be used, something that will
     eventually accumulate wear. 

</p>


   </div>
<div id ="footnote">
  <p> 1. Jackson, Steven J. <i> Rethinking Repair</i> (MIT Press, 2014) 10-11. </p>
    
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
<p>Repair is also a form of resistance. Repair also allows us to prolong object life cycles and delay obsolescence. 
    In Rethinking Repair, Steven J. Jackson considers repair in the context of technology. He connects repair to Marx’s
     concept of commodity fetishism, where the social value of labor is hidden, and objects are instead thought to have value
      in their intrinsic properties. Jackson argues that commodity fetishism can be disrupted by connecting the object to it’s
       moment of origin. ¹ When we repair, we better understand the inner workings of the object, and are connected back to the labor
        that manufactured it to begin with. </p>

<p>In our conversation, Zack talks extensively about past and planned future repairs to his jeans.
     The ability to repair seems to have become a positive quality of the jeans, and he invites wear because it 
     leads to the ability to make more repairs and alterations. I thought it was very important that Zack stated 
     he never wants to break an item past repair. He is rough with his items when he understands that he is able to repair 
     them so they continue to have a utilitarian purpose. As he said to Isaac when he apologized for creating the first 
     noticeable wear to the jeans: “It's ok, I can fix it”. 
 
</p>


     </div>
  </div>
  </div>

    <NavLink to="/emotional">
<img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
  </NavLink>
  <NavLink to ="/closing">
  <img id="arrowright" 
  src={arrowR}
  onMouseEnter={() => setArrowR(rightarrowhover)}
  onMouseLeave={() => setArrowR(rightarrow)}
  />
  </NavLink>

</div>


  )
    }

export default Senses