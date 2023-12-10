// index.js or App.js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter
import App from './App' // Assuming App contains your routing logic

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
