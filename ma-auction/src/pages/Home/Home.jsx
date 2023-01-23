import React from 'react'
import Contact from '../../components/Contact/Contact'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
    <Slider/>
    {/* <FeaturedProducts type="featured"/>
    <Categories/>
    <FeaturedProducts type="trending"/> */}
    <Contact/>
  </div>
  )
}

export default Home