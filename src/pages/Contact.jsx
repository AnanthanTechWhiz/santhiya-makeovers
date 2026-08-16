import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { brand, socialLinks } from '../data/siteData'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageBanner
        icon="bi-envelope-heart-fill"
        title="Get In Touch"
        subtitle="We'd love to hear about your special occasion. Reach out to book your session."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="contact-info-card text-center">
                <i className="bi bi-geo-alt-fill"></i>
                <h6>Visit Us</h6>
                <p className="text-muted small mb-0">{brand.address}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info-card text-center">
                <i className="bi bi-telephone-fill"></i>
                <h6>Call Us</h6>
                <p className="text-muted small mb-0">
                  <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info-card text-center">
                <i className="bi bi-envelope-fill"></i>
                <h6>Email Us</h6>
                <p className="text-muted small mb-0">
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-7">
              <div className="contact-form-card">
                <h4 className="mb-4">Send Us a Message</h4>
                {submitted && (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you! Your message has been noted. We&apos;ll get back to you shortly.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="service">Service Interested In</label>
                      <select
                        className="form-select"
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option>Bridal Makeup</option>
                        <option>Party & Event Makeup</option>
                        <option>Hair Styling</option>
                        <option>Skin Care & Facials</option>
                        <option>Saree & Draping</option>
                        <option>Mehendi Art</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">Your Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event and requirements..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gold btn-lg px-5">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="map-card mb-4">
                <iframe
                  title="Santhiya Makeovers Location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.534215115278!2d77.7438836750781!3d13.065293587258765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ac33564b1b%3A0xc8f8b32aa585535e!2sSanthiya%20Saree%20Draping%2C%20Makeup%20%26%20Hairstyle%20Services!5e0!3m2!1sen!2sin!4v1786844598361!5m2!1sen!2sin`}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="hours-card mb-4">
                <h6 className="mb-3"><i className="bi bi-clock-fill me-2"></i>Working Hours</h6>
                {brand.hours.map((slot) => (
                  <div className="d-flex justify-content-between hours-row" key={slot.day}>
                    <span>{slot.day}</span>
                    <span className="fw-semibold">{slot.time}</span>
                  </div>
                ))}
              </div>

              <div className="social-card">
                <h6 className="mb-3">Follow Us</h6>
                <div className="d-flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="social-icon social-icon-lg"
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
