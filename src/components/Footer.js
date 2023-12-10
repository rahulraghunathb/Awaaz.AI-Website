import React from 'react'
import './Footer.css'

// Define the company address as a variable
const companyAddress =
  'Azad Hall of Residence, IIT Kharagpur, Khargpur, West Bengal, India - 721302.'

function Footer() {
  return (
    <footer className="footer-box">
      <p>{companyAddress}</p>
      <p>&copy; 2023 Awaaz.ai. All rights reserved.</p>
      {/* Add the company address */}
    </footer>
  )
}

export default Footer
