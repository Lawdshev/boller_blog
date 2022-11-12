import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import NavMenu from './components/Navbar';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes> 
      <Footer/>
    </Router>
  )
}
export default App
