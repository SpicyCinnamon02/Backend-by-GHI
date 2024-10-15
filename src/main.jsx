import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './sections/Navbar'
import HomeHero from './pages/home/HomeHero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomeHero />
  </StrictMode>,
)
