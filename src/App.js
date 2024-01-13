// src/App.js
// eslint-disable-next-line
import React from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './screens/HomePage'
import Footer from './components/Footer'
import ContactPage from './screens/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
