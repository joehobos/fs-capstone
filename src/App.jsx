import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails';
import './index.css'
import Confirmation from './components/Confirmation';
import Login from './components/Login';

function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Sidebar />
     </Router>
        
    </>
  )
}

export default App
