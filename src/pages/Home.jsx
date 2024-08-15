import React from 'react'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Spotlight from '../components/Spotlight'

const Home = () => {
  return (
    <main>
        <Hero />
        <Spotlight />
        <Posts />
    </main>
  )
}

export default Home