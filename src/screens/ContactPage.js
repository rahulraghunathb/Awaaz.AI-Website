// ContactPage.js
import React, { useState } from 'react'
import './ContactPage.css'
import axios from 'axios'

function ContactPage() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    // Update the form data state
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Send data to the server
      await axios.post('http://localhost:5000/api/contact', formData)

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })

      alert('Data submitted successfully!')
    } catch (error) {
      console.error('Error submitting data:', error)
      alert('Error submitting data. Please try again.')
    }
  }

  // JSX structure for the Contact Page component
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactPage
