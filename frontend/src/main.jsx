import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
