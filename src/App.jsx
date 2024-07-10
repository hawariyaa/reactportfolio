import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/intro'
import Aboutme from './components/aboutme'
import Tech from './components/Tech'
import Experience from './components/Experience'
import Projects from './components/projects'
import Contact from './components/contact'
import './css/custom.css'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Navbar />
      <Intro />
      <Aboutme />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App