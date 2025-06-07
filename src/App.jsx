import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Intern from './components/Intern'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Intern/>
      <Skills />
      <Contact />
    </div>
  )
}

export default App

