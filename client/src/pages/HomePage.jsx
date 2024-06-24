import React from 'react'
import Navbar from '../components/Navbar'
import Landing from './Landing'
import Categories from '../components/Categories'
import About from './About'

function HomePage() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Categories/>
      <About/>
    </>
  )
}

export default HomePage
