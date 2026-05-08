import rightarrow from '/assets/arrowright.png'
import rightarrowhover from '/assets/arrowhoverright.png'
import leftarrow from '/assets/arrowleft.png'
import leftarrowhover from '/assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from './bg.js'
import {NavLink} from 'react-router';
import title from '/assets/artifactstitle.png'
import untitled from '/assets/untitled.jpg'
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


function Artifacts() {
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
     
          <img id="menu"
          src ={menuArtifactsHover}
         
      />
  

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
<div id="sectionparent"> 
  <div id="sectionLparent">
  <div id="sectionL">
<p> Authors Rachel P. Maines and James J. Glynn define ‘numinous objects’, 
  taken from the Roman pagan word for spirit, numen, as museum objects that 
  hold importance because of psychological relation to history, rather than 
  material importance.¹ </p>

<p>The numinosity of said objects allows some to linger in community memory long
   after they disappear. ‘This vessel, the New Orleans, was abandoned unfinished 
   when the war ended. It remained at Shiphouse Point on Lake Ontario until the turn 
   of this century, when the combined action of the elements and souvenir hunters 
   completed its demolition. Today the ship survives in community memory and in the 
   artifacts made from its numinous remains: canes, rocking chairs, boxes, and so
    forth, some of which have found their way into the collections of the 
    Pickering-Beach Museum in Sackets Harbor.' ² . </p>

<p> Maines and Glynn state that the exhibition standards set by art museums have 
  become the model for other museums to follow, and because of this, museum 
  collections struggle to include “artifacts of historical significance that may 
  lack redeeming aesthetic importance”. ³ When the objects are judged by material 
  truth rather than cultural mythology and association, their wear becomes an 
  important identifiable characteristic in whether items are deemed 'worthy' of
   belonging to a museum collection. 
</p>

   </div>
<div id ="footnote">
  <p> 1. Maines, Rachel P. and Glynn, James J. <i>Numinous Objects/</i> (The Public 
  Historian, 1993), 1-3.</p>
   <p> 2. Maines and Glynn,<i> Numinous Objects</i>, 9. </p>
    <p> 3.  Maines and Glynn, <i>Numinous Objects</i>, 12. </p>
     <p> 4. Rubio, Fernando Dominguez. <i>Preserving the Unpreservable: Docile
      and Unruly Objects at MoMA</i> (Theory and Society, 2014) 5. </p>
      <p> 5. Outside this section, my mentions to ‘objects’ will refer to all 
        identifiable collections of matter, including those which can decay and 
        change over time. </p>
      <p> 6. Rubio, <i>Preserving the Unpreservable</i>, 5.  </p>
      <p> 7. Rubio, <i>Preserving the Unpreservable</i>, 19.   </p>
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
    
     <div id="image">
      <img
      id="image"
      src={untitled}
      >
      </img>
      <div id="caption">
        <p> Untitled by Nam June Paik. Via MoMA</p>
      </div>
    </div>

     <div id="sectionR">
<p>Avoiding wear, then, becomes a major part of maintaining a museum collection. 
  In his article ‘Preserving the Unpreservable’, Fernando Dominguez Rubio 
  explores this through a study he conducts on artworks at the MoMA. Rubio 
  argues that the museum aims to stabilize artworks into classifiable and 
  exhibitable objects, implying a separation between the idea of an artwork 
  and an object. ⁴ An ‘object’ ⁵ defined by Rubio, is seen as an immortal
   and permanent expression of a material,  while artworks are subject 
   to the same processes of change and decay as they interact with the environment
    they are placed within, making “museum collections..better conceptualized as 
    collections of processes rather than as collections of ‘objects’." ⁶ </p>

 <p>The ‘objects’ art museums like the MoMA appear to have, however,
   are classified by Rubio as either ‘docile’ or ‘unruly’. Unruly objects
    are artworks that are, by nature, variable and ever-changing, such as 
    media art, like Rubio’s example of Untitled by Nam June Paik. As the technology
     that made up his piece became obsolete, elements worn beyond repair had to be
      replaced with newer forms of technology. But these replacements would cause 
      departure from the aesthetics of the piece as imagined by Paik. “The museum 
      thus faced an interesting dilemma. It could "freeze" the artwork as it was in
       2011… abstaining from making any further modification. This option would 
       secure the authenticity of the artwork, but at the cost of sentencing it to 
       a sure death, as most of the technologies required to run Untitled were
        already malfunctioning or obsolete. An alternative ..would be to keep 
        Untitled alive by constantly migrating it to newer technological 
        platforms. This solution would imply altering Untitled's form and
         potentially its meaning, thus giving rise to questions about its 
         authenticity and authorship since the museum would be effectively
          usurping Nan June Paik's role as the author of the artwork.” ⁷. </p>

<p>The battle by museums to immortalize objects raises an interesting question in 
  our relationship with our personal collections of objects. Do we have an 
  expectation for objects to serve us in an immortal state, or do we understand 
  the life cycle of wear, repair, and replacement to apply to objects that are
   manufactured? To begin my evaluation, I interviewed two acquaintances about an
    object of their personal choosing. 
</p>

     </div>
     </div>
  </div>

    <NavLink to="/">
<img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
  </NavLink>
  <NavLink to ="/casestudies">
  <img id="arrowright" 
  src={arrowR}
  onMouseEnter={() => setArrowR(rightarrowhover)}
  onMouseLeave={() => setArrowR(rightarrow)}
  />
  </NavLink>

</div>


  )
    }

export default Artifacts