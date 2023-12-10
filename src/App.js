// src/App.js
// eslint-disable-next-line
import React from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './screens/HomePage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
