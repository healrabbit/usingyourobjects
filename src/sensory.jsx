import rightarrow from './assets/arrowright.png'
import rightarrowhover from './assets/arrowhoverright.png'
import leftarrow from './assets/arrowleft.png'
import leftarrowhover from './assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from './bg.js'
import {NavLink} from 'react-router';
import title from './assets/sensorytitle.png'
import walnuts from './assets/walnuts.jpeg'
//menu imports
import menuHome from './assets/menu-home.png';
import menuArtifacts from './assets/menu-artifacts.png';
import menuCaseStudies from './assets/menu-casestudies.png';
import menuLifeCycle from './assets/menu-lifecycle.png';
import menuSensory from './assets/menu-sensory.png';
import menuEmotional from './assets/menu-emotional.png';
import menuResistance from './assets/menu-resistance.png';
import menuClosing from './assets/menu-closing.png';
import menuReferences from './assets/menu-references.png';
import menuHomeHover from './assets/menu-homehover.png';
import menuArtifactsHover from './assets/menu-artifactshover.png';
import menuCaseStudiesHover from './assets/menu-casestudieshover.png';
import menuLifeCycleHover from './assets/menu-lifecyclehover.png';
import menuSensoryHover from './assets/menu-sensoryhover.png';
import menuEmotionalHover from './assets/menu-emotionalhover.png';
import menuResistanceHover from './assets/menu-resistancehover.png';
import menuClosingHover from './assets/menu-closinghover.png';
import menuReferencesHover from './assets/menu-referenceshover.png';


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
         
      
          
          <img id="menu"
          src ={menuSensoryHover}
           
      />
         
      
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
<p>I have this one comforter cover that my mom sewed out of my childhood bedsheets. It no longer fits my bed, but I keep my twin comforter
 regardless just so I can use this cover, because the worn fabric of the bedsheets is incredibly soft, softer than any cotton/jersey/linen/etc 
 blend you can get new. An interesting quality of fabric in particular is that it gets softer with wear, as the structure of the fabric 
 is loosened and fibers are relaxed. ¹ </p>

 <p> Both Autumn and Zack mentioned in our conversations that they enjoy the fact that their objects have become softer. 
    Autumn describes her sneakers as comfortable, because the faux denim fabric has worn down, and the shoe itself has
     stretched and molded to her own feet. For Zack, the soft feeling of the jeans as they lose their starchiness through wear and fading,
      makes him more excited to continue to wear down the fabric. As wear alters the properties of the object, it also alters the tactile 
      sensory experience of interacting with the object. </p>


   </div>
<div id ="footnote">
  <p> 1. An unfair trade-off: while the fabric becomes softer and more pleasant to the touch, the loose fibers also make it
    more fragile and susceptible to rips and tears. </p>
    <p>2. Perfectly polished Wenwan walnuts are often sold for around $200 USD. Unpolished walnuts, to compare, typically go for $20 USD. </p>
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
            src={walnuts}
            >
            </img>
            <div id="caption">
              <p> Polished Wenwan Walnuts. Via Ebay</p>
            </div>
          </div>
      
     <div id="sectionR">
<p>Wear also smoothens out rigid surfaces. There is a traditional practice in Chinese culture called <i> Wenwan </i>,
 done typically with walnuts. You grip walnuts in your hand, and roll and play with them, until over time, the friction 
 combined with the natural oils from your skin give the walnuts a smooth, jade-like texture, and a reddish patina. The process 
 is regarded as meditative, with the grooves of the walnut also massaging and improving circulation in the palms. The final smooth 
 walnuts are, of course, pleasant to the touch as well. In Wenwan, the smooth, polished walnuts are regarded as more valuable than 
 the original, unworn walnuts. ²</p>

<p>Through touch, we discover how wear changes the physical qualities of an object, and the connections and associations we make with
     the object. 
 </p>

</div>
     </div>
  </div>

    <NavLink to="/lifecycle">
<img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
  </NavLink>
  <NavLink to ="/emotional">
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