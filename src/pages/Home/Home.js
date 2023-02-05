import React from 'react'
import './Home.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'

const Home = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <Landing />
    </>
  )
}

export default Home