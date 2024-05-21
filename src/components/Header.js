// Header.js
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
