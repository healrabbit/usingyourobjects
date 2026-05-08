import leftarrow from '/assets/arrowleft.png'
import leftarrowhover from '/assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from "./bg.js";
import  '/assets/bg1.jpg'
import { NavLink } from "react-router";
import zack1 from '/assets/_1040586.jpg'
import zack2 from '/assets/_1040617.jpg'

function Homepage() {
      setBg({image: 'url("/assets/bg1.jpg")'})
 const [arrowL, setArrowL] = useState(leftarrow);
  return (
<div id="interviewparent"> 

     <div id="interviewimg"> 
        <img
        src={zack1}/>
        <img
        src={zack2}/>
    </div>
   <div id="interviewdiv">
    
<p style={{fontSize: '20px'}}> Zack’s object is a pair of black denim jeans that he wears on a regular basis. </p>


<p>E: When and where did you get this object? Was it brand new or did
     it belong to anyone else before? </p>

<p>Z: I got these pants in..probably late 2023 or 2024. This pair was
     gently used, the previous owner probably didn't wear it much. The [bottom] 
     hems were cut off when I got them and I had to do surgery on them with canvas 
     strips from one of my bags. </p>


<p>E: How did you acquire the object? Did you buy it, was it a gift, etc. </p>

<p>Z: I bought them from a Grailed listing. </p> 

<p>E: What do you use the object for? Has its use changed over time? </p>

<p>Z: I use them for wearing on my legs and it’s use has not changed over time.</p>

<p>E: I guess making the question more specific to your object, have the 
occasions that you wear them changed? </p>

<p>Z: Yeah, recently I’m always wearing them, they’ve been my everyday pants now 
    since October.</p>

<p>E: What is your favorite physical quality about the object? </p>

<p>Z: I think how they're starting to feel now that I’ve been wearing them more, and how they're starting to fade in certain spots. </p>

<p>E: What is your favorite memory associated with the object? </p>

<p>Z: I think the period of time I was lending them to [my old roommate]
     Isaac, and he was wearing them and doing good things and being himself in them.
      When I wear them now, I feel his spirit. </p>

<p>E: When did you first notice wear on this object? </p>
<p>Z: I think around the time I made Isaac start wearing them because he started 
    putting the wears into them first, then I repossessed them and then I put wears
     in them. </p>

<p>E: What was that first wear that Isaac made?</p>

<p>Z: It was the creases in the lap, and also this tear (pointing to a tear in the 
    left back pocket) which I fixed, because I remember it happened and he said 
    sorry and I said it’s ok, I'll fix it. </p>


<p>E: What is the most recent wear to happen to this object? </p>

<p>Z: Today the little canvas flap [sewn onto the hem] just flapped down,
     it pissed me off. </p>

<p>E: Do you remember how the object looked when you first acquired it? </p>

<p>Z: They looked all starched, brand new, pitch black, clean with a chopped 
    bottom hem. All ripe for getting f***d up. </p>

<p>E: When you picture the object in your mind, do you see it in its present state,
     how it was when you bought it, or something in between? </p>

<p>Z: In my mind, I see like the future of it? Like how I want them to become 
after I put work into it, I see the ideal, their end state. </p>

<p>E: Can you describe that to me? </p>

<p>Z: Really cool, I’m gonna alter them to become skinnier jeans, and make my hem repair better,
     and try to make the leg opening half an inch wider. I’m gonna really hold on to
      them and alter them for as long as possible so they look good and are always 
      what I need them to be. Maybe I’ll even try to lower the rise. </p>

<p>E: Are you upset that the object has worn down? Do you feel any kind of feelings
    towards it in its current state vs new? </p>

<p>Z: I’m not upset at all that they’re worn. I need them to get more worn,
     so they can have more life and character in them. I feel better about them
      in their current state. </p>

<p>E: You kind of started talking about this a little bit earlier, but have 
    you made any repairs to the object? </p>

<p>Z: I’ve made two repairs underneath the crotch where the fabric started wearing
     thin. I’ve made a repair on the right front pocket where the corner of my phone
      had created a hole, and I’ve made a repair on the back above the left pocket 
      where a hole was snagged. I also fixed that cut off hem that I was talking 
      about when I first got the pants. </p>


<p>E: Do you plan on making any future repairs to the object?</p>

<p>Z: Yeah, I can see the left rear pocket wearing thin again so I’m gonna
     reinforce it, and I can see the area around one of the other repairs 
     expanding so I’m going to reinforce that as well. I’m gonna fix that
     flap on the bottom hem as well. </p>

<p>E: What do you use to make repairs? </p>

<p>Z: I use black embroidery floss and a big needle. I cut a patch of 
    black canvas or denim from other pants, making sure the perimeter of 
    the patch extends about an inch out from the damaged area. Then I do 
    either a Boro stitch or Sashicko stitch or both all around the area.</p> 

<p>E: Have you done/do you currently do anything to prevent further wear on the object? </p>

<p>Z: No, I just wear it. And I would have to stop wearing it to make that happen. </p>

<p>E: Do you usually treat objects with the same amount of care, 
or are their objects you treat with more or less care? And why is that the case? </p>

<p>Z: I think I treat electronics with more care. </p>

<p>E: Are you sure about that? (pointing to his cracked phone screen)</p>

<p>Z: I guess I treat my laptop with more care. And maybe certain shoes, l
    ike if they’re made of suede or thinner leather I don't wear them out 
    in the rain and I try to prevent wear in the soles. I don't want to break 
    anything beyond repair so when I realize I don't have the necessary tools
     [to make repairs], like oil to hydrate the thinner leather to prevent it 
     from cracking. </p>

<p>E: But with the pants, you know how to repair them, so you don’t change 
    anything about your routine? </p>

<p>Z: Yeah, once they’re repaired and whatever could go wrong with them
     has been patched up I’m good to go. But if there was a hole in them,
      I’d be like, okay, I can’t wear these today.</p>

<p>E: Any closing thoughts? </p>

<p>z: I think it’s good to repair clothes, if you can, and jeans are really easy
     to do that with. I think you should repair things until they’re rendered
      functionless. It’ll be really fun to do so, it's a fun process. And it's
       very personal and cool. </p>
<p> -</p>
    </div> 

   
<NavLink to="/casestudies">
  <img id="arrowleft" 
  src={arrowL}
  onMouseEnter={() => setArrowL(leftarrowhover)}
  onMouseLeave={() => setArrowL(leftarrow)}
  />
 </NavLink>

</div>
  )
    }

export default Homepage