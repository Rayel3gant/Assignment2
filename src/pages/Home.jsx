import React from 'react'
import Navbar from '../components/Navbar'
import HomeForm from '../components/HomeForm'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className='h-full w-full'>
        <Navbar/>

        <div className='py-4 flex flex-col gap-y-8 lg:flex-row justify-between items-center '>
            <HeroSection/>
            <HomeForm/>
        </div>
    </div>
  )
}

export default Home