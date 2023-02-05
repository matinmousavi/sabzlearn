import React from 'react'
import './Home.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import LastCourses from '../../Components/LastCourses/LastCourses'

const Home = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <Landing />
    <LastCourses />
    </>
  )
}

export default Home