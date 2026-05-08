
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

import './App.css'
import Homepage from './index.jsx'
import CaseStudies from './casestudies.jsx'
import Zack from './zack.jsx'
import Autumn from './autumn.jsx'
import Artifacts from './artifacts.jsx'
import LifeCycle from './lifecycle.jsx'
import Sensory from './sensory.jsx'
import Emotional from './emotional.jsx'
import Resistance from './resistance.jsx'
import Closing from './closing.jsx'
import References from './references.jsx'
import {BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter  basename="/usingyourobjects">>
 <div>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/casestudies" element={<CaseStudies/>} />
      <Route path="/zack" element={<Zack/>} />
      <Route path="/autumn" element={<Autumn/>} />
      <Route path="/artifacts" element={<Artifacts/>} />
      <Route path="/lifecycle" element={<LifeCycle/>} />
        <Route path="/sensory" element={<Sensory/>} />
        <Route path="/emotional" element={<Emotional/>} />
       <Route path="/resistance" element={<Resistance/>} />
        <Route path="/closing" element={<Closing/>} />
        <Route path="/references" element={<References/>} />
    </Routes>

     
 </div>
 </BrowserRouter>
  )
}

export default App
