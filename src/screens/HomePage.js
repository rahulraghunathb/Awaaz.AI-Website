import React from 'react';
import './HomePage.css' // Import the stylesheet
import '../components/GlassCard.css'
import Spline from '@splinetool/react-spline'
import PhoneForm from '../components/PhoneForm';
import Lights from './Lights';


function HomePage() {

  const handlePhoneSubmit = async (phoneNumber) => {
    try {
      const response = await fetch('http://localhost:5000/api/make-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const message = await response.text();
      console.log(message);

      // Display an alert on successful call initiation
      alert('Call initiated successfully!');
    } catch (error) {
      console.error(error);

      // Display an alert on error
      alert(`Error: ${error.message}`);
    }
  };
   
  return (
    
    
    <main className="home-page">
      <Lights />
      <div className="content-container">
        {/* <p id="mainheading"> AWAAZ.AI </p> */}
        
        <h1> AWAAZ.AI </h1>
        <p className="tagline">The Limitless Phone Sales Agent</p>
        <p className="tagline2">
          AI Powered Customer Interactions: the Future of Call Centers is Here.
        </p>
        
        <PhoneForm onSubmit={handlePhoneSubmit} />
        
        <div className="section2">
          <div className="para1">
            <p>
              Just imagine having as many exquisite phone sales and support
              agents as you wish. What would that mean for your business? Awaaz
              sounds so human-like , your clients won't be able to tell the
              difference. This means humans can now be liberated to deal with
              more complex tasks behind the scenes.
            </p>
           
          </div>

          <div className="spline">
            <Spline
              style={{ width: '100%', height: '100%' }}
              scene="https://prod.spline.design/XY-ICh0HuUHU4Wef/scene.splinecode"
            />
          </div>
        </div>

        {/* <div className="spline-ai-container">
          <div className="spline-ai">
            <Spline scene="https://prod.spline.design/XY-ICh0HuUHU4Wef/scene.splinecode" />
          </div>
        </div> */}

        {/* <div className="glass-container">
          <div className="glass-card">
            <p>
              A glass-like card to demonstrate the{' '}
              <strong>Glassmorphism UI design</strong> trend.
            </p>
            <p className="card-footer">Created by Rahul</p>
          </div>
        </div> */}

      
    </div>
          
    </main>
  )
}

export default HomePage;
