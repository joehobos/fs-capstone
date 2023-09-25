import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header'
import './index.css'

function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Products />} />
      </Routes>
      <Sidebar />
     </Router>
        
    </>
  )
}

export default App
