import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import Home from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>,
)
