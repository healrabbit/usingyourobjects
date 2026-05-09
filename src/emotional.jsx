import rightarrow from '/assets/arrowright.png'
import rightarrowhover from '/assets/arrowhoverright.png'
import leftarrow from '/assets/arrowleft.png'
import leftarrowhover from '/assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from './bg.js'
import {NavLink} from 'react-router-dom';
import title from '/assets/emotionaltitle.png'
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


function Emotional() {
     setBg({image: 'url("usingyourobjects/assets/bg2.jpg")'})
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
         
      
          
          <img id="menu"
          src ={menuEmotionalHover}
           
      />
         
      
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
<div id="sectionparent" > 
  <div id="sectionLparent">
  <div id="sectionL">
<p>Like the numinous objects found in museums and collections, we hold numinous objects in our personal lives, 
    little tokens serving as a physical manifestation of some memory. These objects are kept in spite of their wear, 
    as they don’t serve any utilitarian purpose in our lives.</p>

<p> Autumn mentions that one of the reasons she keeps her shoes to this day despite considering them too worn to actually wear 
    out, is to act as a holder of memory. Although specific childhood instances of her wearing the shoes have faded from her memory, 
    the knowledge that she has had the object throughout her childhood, is a sort of <i> numen </i> that she attributes to the object.  </p>
 
<p>Inversely, some objects hold importance in their wear. 
</p>


   </div>
<div id ="footnote">
  <p> 1. Gibson, Margaret. <i> Melancholy Objects</i> (Brunner Routledge, 2004) 6. </p>
    
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
<p>In Margaret Gibson’s “Melancholy Objects”, she investigates mourning objects as transitional objects, filling in for the deceased
     in the way that transitional objects for growing toddlers fill in for their parent’s constant presence. Gibson mentions that clothing
      is better than photograph in triggering instant image and memory of the body of the deceased, because the object of clothing opens up
       senses of both sight, touch, and smell. ¹ The scent of the person, the feeling of touching them while they wore this piece of clothing,
        it all remains intact in the materiality of the object. </p>


<p>I found it interesting how Zack was able to specifically recall that the first wear on his pants was made by his old roommate Isaac.
     He mentions Isaac periodically in our conversation. For context, Isaac, who Zack had a close friendship with, recently moved across 
     the country.  Although Zack’s pants are his own possession, he is able to use them as a transitional object for Isaac’s missing 
     presence, because of the memory held in the wears that Isaac put into the pants, which remain visible long after he returned them 
     to Zack. A new replica of this same item would not hold the same sensory data, and thus would not carry the same emotional weight. 
</p>


     </div>
  </div>
  </div>

    <NavLink to="/sensory">
<img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
  </NavLink>
  <NavLink to ="/resistance">
  <img id="arrowright" 
  src={arrowR}
  onMouseEnter={() => setArrowR(rightarrowhover)}
  onMouseLeave={() => setArrowR(rightarrow)}
  />
  </NavLink>

</div>


  )
    }

export default Emotional