import React from 'react'
import Navbar from '/src/sections/Navbar.jsx'
import HomeHero from './HomeHero'
import ChampionSection from './ChampionSection'
import Separator from './Separator'
import PriceTable from './PriceTable'
import Features from './Features'
import Prices from './Prices'

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHero />
            <Separator />
            <Features />
            <ChampionSection />
            <PriceTable />
            <Prices />
        </>

    )
}

export default Home