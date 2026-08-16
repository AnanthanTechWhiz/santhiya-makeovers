import { Link } from 'react-router-dom'
import { brand, galleryItems, highlights, services, stats } from '../data/siteData'
import IconTile from '../components/IconTile'
import Testimonials from '../components/Testimonials'
import StatCounter from '../components/StatCounter'
import logoHorizontal from '../assets/logo-horizontal-transparent.png'

function Home() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="eyebrow">
                <i className="bi bi-stars me-2"></i>Premium Makeup Studio
              </span>
              <h1 className="hero-title">
                Look Radiant. <span className="text-gold">Feel Confident.</span> Every Occasion.
              </h1>
              <p className="hero-subtitle">
                {brand.tagline}. From bridal glam to party-ready looks, {brand.name} brings
                artistry, elegance, and premium care to every face we touch.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-gold btn-lg px-4">
                  Book an Appointment
                </Link>
                <Link to="/gallery" className="btn btn-outline-light btn-lg px-4">
                  View Gallery
                </Link>
              </div>
              <div className="hero-badges d-flex flex-wrap gap-4 mt-5">
                <div className="hero-badge">
                  <i className="bi bi-gender-female"></i>
                  <span>Women-Owned Business</span>
                </div>
                <div className="hero-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Premium Products Only</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-visual-main">
                  <img src={logoHorizontal} alt={brand.name} className="hero-visual-logo" />
                </div>
                <a
                  href={brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-visual-badge"
                >
                  <i className="bi bi-star-fill"></i>
                  <div>
                    <strong>{brand.rating.toFixed(1)}/5</strong>
                    <span>Google Rating</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights trust bar */}
      <section className="highlights-bar">
        <div className="container">
          <div className="row gy-3 text-center">
            {highlights.map((item) => (
              <div className="col-6 col-md-3" key={item.label}>
                <div className="highlight-pill">
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="row gy-4 text-center">
            {stats.map((stat) => (
              <div className="col-6 col-lg-3" key={stat.label}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow eyebrow-light">What We Offer</span>
            <h2>Our Signature Services</h2>
            <p className="section-subtitle">
              Thoughtfully curated beauty services to make every celebration truly memorable.
            </p>
          </div>
          <div className="row g-4">
            {services.slice(0, 6).map((service) => (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <div className="service-card h-100">
                  <IconTile icon={service.icon} label={service.title} size="sm" />
                  <h5 className="mt-3">{service.title}</h5>
                  <p className="text-muted small mb-2">{service.short}</p>
                  <span className="price-tag">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline-dark px-4">
              View All Services <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow eyebrow-light">Our Work</span>
            <h2>A Glimpse of Our Portfolio</h2>
            <p className="section-subtitle">Real transformations from real celebrations.</p>
          </div>
          <div className="row g-3">
            {galleryItems.slice(0, 8).map((item) => (
              <div className="col-6 col-md-3" key={item.id}>
                <div className="gallery-preview-card">
                  <IconTile icon={item.icon} label={item.title} size="lg" />
                  <div className="gallery-preview-caption">
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/gallery" className="btn btn-gold px-4">
              Explore Full Gallery <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer feedback scroll */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow eyebrow-light">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p className="section-subtitle">Loved by brides and beauty enthusiasts across Bengaluru.</p>
          </div>
        </div>
        <Testimonials />
        <div className="text-center mt-4">
          <a
            href={brand.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark px-4"
          >
            Read More Reviews on Google <i className="bi bi-box-arrow-up-right ms-1"></i>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container text-center">
          <h2>Ready to Look Your Absolute Best?</h2>
          <p>Book your consultation today and let us craft your perfect look.</p>
          <Link to="/contact" className="btn btn-gold btn-lg px-5">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
