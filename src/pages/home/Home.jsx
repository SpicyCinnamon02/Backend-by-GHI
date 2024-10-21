import React from 'react'
import Navbar from '/src/sections/Navbar.jsx'
import HomeHero from './HomeHero'
import ChampionSection from './ChampionSection'
import DigitalCard from './DigitalCard'
import Canvass from './Canvass'
import Separator from './Separator'
import Rep from './Rep'

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHero />
            <Separator />
            <DigitalCard />
            <Canvass />
            <Rep />
            <ChampionSection />
        </>

    )
}

export default Home