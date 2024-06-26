import React from 'react'
import Navbar from '../components/Navbar'
import Landing from './Landing'
import Categories from '../components/Categories'
import About from './About'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Categories/>
      <About/>
      <Footer/>
    </>
  )
}

export default HomePage
