// index.js or App.js
import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter
import App from './App' // Assuming App contains your routing logic

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
  
);
