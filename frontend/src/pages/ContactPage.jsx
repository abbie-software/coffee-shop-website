import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">

      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you.</p>
      </div>

      <div className="contact-grid">

        <section className="contact-form-section">
          <h2>Send us a message</h2>
          {submitted ? (
            <div className="success-message">
              <p>Thanks for reaching out! We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </section>

        <section className="contact-info">
          <div className="info-block">
            <h3>Address</h3>
            <p>123 Brew Street<br />Nairobi, Kenya</p>
          </div>
          <div className="info-block">
            <h3>Phone</h3>
            <p>+254 700 000 000</p>
          </div>
          <div className="info-block">
            <h3>Email</h3>
            <p>hello@abbiescoffeehouse.com</p>
          </div>
          <div className="info-block">
            <h3>Opening Hours</h3>
            <p>
              Mon – Fri: 7am – 8pm<br />
              Saturday: 8am – 9pm<br />
              Sunday: 9am – 6pm
            </p>
          </div>

          <div className="map-embed">
            {/* Replace the src below with your actual Google Maps embed link */}
            <iframe
              title="Abbie's Coffee House location"
              src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
              width="100%"
              height="260"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </main>
  )
}

export default ContactPage