// import React from 'react'
// import './Footer.css'

// // Define the company address as a variable
// const companyAddress =
//   'Azad Hall of Residence, IIT Kharagpur, Khargpur, West Bengal, India - 721302.'

// function Footer() {
//   return (
//     <footer className="footer-box">
//       <p>{companyAddress}</p>
//       <p>&copy; 2023 Awaaz.ai. All rights reserved.</p>
//       {/* Add the company address */}
//     </footer>
//   )
// }

// export default Footer



// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr color='gray'></hr>
      <div className="icons_info">
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="company-info">
          <p>Awaaz.ai</p>
          <p>Azad Hall of Residence, IIT Kharagpur</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Awaaz.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

