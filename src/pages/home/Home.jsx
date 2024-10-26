import React from 'react'
import Navbar from '/src/sections/Navbar.jsx'
import HomeHero from './HomeHero'
import ChampionSection from './ChampionSection'
import Separator from './Separator'
import PriceTable from './PriceTable'
import Features from './Features'
import Prices from './Prices'
import Footer from '../../sections/Footer'

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
            <Footer />
        </>

    )
}

export default Home