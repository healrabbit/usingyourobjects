

import './App.css'
import HomePage from './index.jsx'
import CaseStudiesPage from './casestudies.jsx'
import ZackPage from './zack.jsx'
import AutumnPage from './autumn.jsx'
import ArtifactsPage from './artifacts.jsx'
import LifeCyclePage from './lifecycle.jsx'
import SensoryPage from './sensory.jsx'
import EmotionalPage from './emotional.jsx'
import ResistancePage from './resistance.jsx'
import ClosingPage from './closing.jsx'
import ReferencesPage from './references.jsx'
import {HashRouter, Routes, Route } from "react-router-dom";

function Home(){

  return(
    <HomePage/>
  )
}

function CaseStudies(){

  return(
    <CaseStudiesPage/>
  )
}

function Zack(){

  return(
    <ZackPage/>
  )
}

function Autumn(){

  return(
    <AutumnPage/>
  )
}

function Artifacts(){

  return(
    <ArtifactsPage/>
  )
}

function LifeCycle(){

  return(
    <LifeCyclePage/>
  )
}

function Emotional(){

  return(
    <EmotionalPage/>
  )
}

function Sensory(){

  return(
    <SensoryPage/>
  )
}

function Resistance(){

  return(
    <ResistancePage/>
  )
}

function Closing(){

  return(
    <ClosingPage/>
  )
}

function References(){

  return(
    <ReferencesPage/>
  )
}

function App() {

  return (
    <HashRouter >
 <div>
      <Routes>
      <Route path="/" element={<Home/>} />
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
 </HashRouter>
  )
}

export default App
