import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './navbar'
import Footer from './footer'

import Home from './pages/home'
import Biografia from './pages/biografia'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/biografia' element={<Biografia />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App