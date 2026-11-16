import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './navbar'
import Footer from './footer'

import Home from './pages/Home'
import Biografia from './pages/Biografia'
import Musica from './pages/Musica'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/biografia' element={<Biografia />} />
        <Route path='/musica' element={<Musica />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App