import leftarrow from './assets/arrowleft.png'
import leftarrowhover from './assets/arrowhoverleft.png'
import { useState } from 'react';
import setBg from "./bg.js";
import  './assets/bg1.jpg'
import { NavLink } from "react-router";
import autumn1 from './assets/_1040565.jpg'
import autumn2 from './assets/_1040579-Edit.jpg'

function Homepage() {
      setBg({image: 'url("src/assets/bg1.jpg")'})
 const [arrowL, setArrowL] = useState(leftarrow);
  return (
<div id="interviewparent"> 

     <div id="interviewimg"> 
        <img
        src={autumn1}/>
        <img
        src={autumn2}/>
    </div>
   <div id="interviewdiv">
    
<p style={{fontSize: '20px'}}> Autumn’s object is a pair of Adidas sneakers that she
     has had since she was 8 years old. </p>

<p>E: When and where did you get this object? Was it brand new or did it belong to 
anyone else before? </p>

<p>A: I had this object for about thirteen years, I think my mom got it for me at 
    Foot Locker or something like that, [the object is] sneakers. I’ve just had them
     in my closet, kind of rotting, a little bit, because I’ve worn them quite a bit 
     throughout the years that I’ve had them. Since I don't want to give them away,
      they’re just kind of, sitting underneath my bed. </p>


<p>E: What do you use the object for? Has its use changed over time? </p>

<p>A: I think I currently use it for.. unlocking a memory or just to keep a memory.
     I don’t really wear them at all anymore because I just don't want to destroy 
     them further. They’re just a keepsake, really. </p>

<p>E: What is your favorite physical quality about the object? </p>

<p>A: They're very comfortable, I don't know if it's because they're a little worn,
     so they’ve stretched? But also I think the way that they used to make shoes
      back then was with both style and comfort in mind. I appreciate the style of 
      them as well, I wear a lot of black and the shoes are black, white, and grey.</p> 

<p>E: What is your favorite memory associated with the object? </p>

<p>A: What's interesting is I don't really have a specific memory about them. 
    The last time I remember wearing them was in 2023 to the movie theater, 
    and I was embarrassed because they were falling apart and I was like, in f
    ront of my friends. But I don’t really remember wearing them as a kid, I just 
    know that I wore them. </p>

<p>E: When did you first notice wear on this object? </p>

<p>A: Maybe in 2020 or 2021, because that was around the time that I was 
    moving back to Brooklyn, so I had to do an audit of my stuff. I noticed that 
    they were falling apart, but I knew I was going to keep them anyway.</p> 

<p>E: What would you say the most recent wear to happen to this object? </p>

<p>A: I guess I should go ahead and pull the shoes out. They're really dusty, 
    but the main wear is the [sidewall] of the sole is disconnecting from the sole.
     But other than that they’re not too bad. </p>

<p>E: The way you were describing them, I was honestly expecting something a 
    little more crazy. </p>
<p>A: Haha no, honestly I feel like if they were really falling off of the bone
     I would say, okay, you've gotta let them go. But they’re not too bad, I 
     just wouldn’t wear them out because imagine (pointing to the detached sidewall)
      this just flopping around on the side, it just looks kind of crazy. </p>

<p>E: Do you remember how the object looked when you first acquired it? </p>

<p>A: Definitely a lot less dust and cat hair on them, whiter sole, probably less 
    soft also. These shoes are so soft now. Just newer and cleaner. </p>

<p> E: When you picture the object in your mind, do you see it in its present state 
    or closer to how it was when you bought it? </p>

<p> A: Closer to how it is now.. before you asked I hadn’t even thought about how
     they used to look. </p>

<p>E: Are you upset that the object has worn down? Do you feel any kind of feelings 
    towards it in its current state vs new? </p>

<p>A: I’m upset because these [shoes] are so cool! They give DC a little bit,
     I think (pointing to the large Adidas logo across the heels) this detail is
      so cool. I liked the way that they placed the logo. They feel very 2010’s 
      and that era is kind of coming back into trend now. </p>

<p> E: Have you made any repairs to the object? </p>

<p>A: (Pointing to the detached sidewall) Maybe you can see the buildup of glue 
    here.. I’ve tried nail glue, hot glue, regular glue. I need shoe glue, I haven’t 
    tried shoe glue. </p>

<p>E: Do you plan on making any future repairs to the object? </p>

<p>A: I would like to, but I don’t know, part of me wants to do that but part of me 
    thinks I should just leave them as they are because it’s the natural cycle of the object.
     But then I think about sustainability in regards to the situation. Like, okay,
       I have a pair of shoes that I have had since I was 8 years old, not a lot of 
       people can say that. Why not just repair them and keep wearing them, so I 
       don't have to buy more shoes? I was also thinking about buying a new version
        of these but [the model] is so hard to find. But there is also a comfort in 
        leaving them as is. </p>

<p>E: Have you done/do you currently do anything to prevent further wear on the
     object? </p>

<p>A: Leaving them under my bed, haha. </p>

<p>E: Do you usually treat objects with the same amount of care, or are their objects you treat with 
more or less care? And why is that the case? </p>

<p>A: With everything that I own, I try to respect [the objects] 
    and be very intentional with what I buy. If I’m going to buy something, 
    I want to make sure it's something that I have for a while. I think that's
     just how I was raised, my mom has so many things we use today that she has had
      since she was my age, like around 21, and she's 43 now. When you look at these
       things, you would think that we bought them yesterday. It’s been engrained in 
       me to try to keep [objects] good. With things that I use more often I try to 
       make sure I’m not just flinging them all around. For example, this bag, 
       (pulling out a black leather clutch) is one of my favorite little purses 
       that I use all the time, and I try to respect it and care for it because
        I want to have it for as long as I can. </p>

<p>E: I’m curious, with the mention of your family keeping objects pristine 
    for a long time, are there any specific methods to that practice? Is it 
    just generally being gentle with objects? </p>

<p> A: I think it’s somewhat being gentle, but also using items only for what 
    they’re supposed to be used for. For example, if you have silverware, like 
    a spoon, someone might also use something like that to scrape a pot. We won’t 
    do that, we’ll use the object only what it’s meant to be used for, wash it, 
    and take care of it. Also, there are some items we have multiples of. We rotate
     them out so not just one thing is taking all of the wear and tear. But generally,
      it’s just a matter of being careful with the objects. </p>


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