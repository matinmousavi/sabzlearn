import React from 'react'
import './Home.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import LastCourses from '../../Components/LastCourses/LastCourses'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PreSellCourses from '../../Components/PreSellCourses/PreSellCourses'
import LastArticles from '../../Components/LastArticles/LastArticles'

const Home = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <Landing />
    <LastCourses />
    <AboutUs />
    <PopularCourses />
    <PreSellCourses />
    <LastArticles />
    </>
  )
}

export default Home