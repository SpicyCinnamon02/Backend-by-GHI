import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './sections/Navbar'
import HomeHero from './pages/home/HomeHero'
import ChampionSection from './pages/home/ChampionSection'
import DigitalCard from './pages/home/DigitalCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomeHero />
    <ChampionSection />
    <DigitalCard />
  </StrictMode>,
)
