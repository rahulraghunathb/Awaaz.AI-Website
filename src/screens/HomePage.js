import React from 'react'
import './HomePage.css' // Import the stylesheet
import '../components/GlassCard.css'
import Spline from '@splinetool/react-spline'

function HomePage() {
  return (
    <main className="home-page">
      <div className="content-container">
        <p id="mainheading"> AWAAZ.ai </p>
        <p>The Limitless Phone Sales Agent</p>
        <p id="tagline">
          AI Powered Customer Interactions: the Future of Call Centers is Here.
        </p>

        <div className="spline">
          <Spline scene="https://prod.spline.design/gi-d-8lQ9luXdShq/scene.splinecode" />
        </div>

        <p>
          Just imagine having as many exquisite phone sales and support agents
          as you wish. What would that mean for your business? Awaaz sounds so
          human-like , your clients won't be able to tell the difference. This
          means humans can now be liberated to deal with more complex tasks
          behind the scenes.
        </p>

        {/* <div className="spline-ai-container">
          <div className="spline-ai">
            <Spline scene="https://prod.spline.design/XY-ICh0HuUHU4Wef/scene.splinecode" />
          </div>
        </div> */}

        <div className="glass-container">
          <div class="glass-card">
            <p>
              A glass-like card to demonstrate the{' '}
              <strong>Glassmorphism UI design</strong> trend.
            </p>
            <p class="card-footer">Created by Rahul</p>
          </div>
        </div>

        <div className="card-list">
          <div class="card">
            <p class="heading">Popular this month</p>
            <p>
              All of Pearl's conversations are recorded and accessible,
              providing you with valuable insights into customer interactions.
            </p>
            <p>Uiverse</p>
          </div>
          <div class="card">
            <p class="heading">Popular this month</p>
            <p>Powered By</p>
            <p>Uiverse</p>
          </div>
          <div class="card">
            <p class="heading">Popular this month</p>
            <p>Powered By</p>
            <p>Uiverse</p>
          </div>
          <div class="card">
            <p class="heading">Popular this month</p>
            <p>Powered By</p>
            <p>Uiverse</p>
          </div>
        </div>

        <form>
          <input
            type="text"
            placeholder="Enter your text here..."
            className="text-input"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

export default HomePage
