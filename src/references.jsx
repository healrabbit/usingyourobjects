import rightarrow from '/assets/arrowright.png'
import rightarrowhover from '/assets/arrowhoverright.png'
import leftarrow from '/assets/arrowleft.png'
import leftarrowhover from '/assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from './bg.js'
import {NavLink} from 'react-router';
import title from '/assets/referencestitle.png'
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

function CaseStudies() {
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
          <div id="cstitle" >
          <img
          id="titles"
          src={title}
          >
          </img>
        </div>

        <div id="references">
<p>Maines, Rachel P., and James J. Glynn. “Numinous Objects.” The Public Historian 15, no. 1 (1993): 9–25. https://doi.org/10.2307/3378030.
</p>
<p>Rubio, Fernando Domínguez. “Preserving the Unpreservable: Docile and Unruly Objects at MoMA.” Theory and Society43, no. 6 (2014): 617–45. http://www.jstor.org/stable/43694738.
</p>
<p>Gibson, Margaret. “Melancholy Objects.” Mortality 9, no. 4 (November 2004): 285–99. https://doi.org/10.1080/13576270412331329812. 
</p>
<p>Jackson, Steven J. “Rethinking Repair.” Media Technologies, February 28, 2014, 221–40. https://doi.org/10.7551/mitpress/9780262525374.003.0011. </p>
<p></p>
 </div>
<div id="badgeparent"> 
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
    <NavLink to="/casestudies" >
    <img id="menu"
    src ={caseStudies}
     onMouseEnter={() => setCaseStudies(menuCaseStudiesHover)}
  onMouseLeave={() => setArtifacts(menuCaseStudies)}
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
       
    <img id="menu"
    src ={menuReferencesHover}

/>

  </div>
 
    <NavLink to="/closing">
<img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
  </NavLink>

  
</div>
</div>

  )
    }

export default CaseStudies