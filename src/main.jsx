import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './sections/Navbar'
import HomeHero from './pages/home/HomeHero'
import ChampionSection from './pages/home/ChampionSection'
import DigitalCard from './pages/home/DigitalCard'
import Canvass from './pages/home/Canvass'
import Separator from './pages/home/Separator'
import Rep from './pages/home/Rep'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomeHero />
    <Separator />
    <DigitalCard />
    <Canvass />
    <Rep />
    <ChampionSection />
  </StrictMode>,
)
