import React from 'react'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Main />
    </div>
  )
}

export default Home