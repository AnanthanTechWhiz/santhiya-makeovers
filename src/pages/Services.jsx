import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import IconTile from '../components/IconTile'
import { services } from '../data/siteData'

function Services() {
  return (
    <>
      <PageBanner
        icon="bi-stars"
        title="Our Services"
        subtitle="Premium beauty services tailored to your special occasion."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-6" key={service.id}>
                <div className={`service-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                  <IconTile icon={service.icon} label={service.title} size="lg" />
                  <div className="service-detail-body">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <h4>{service.title}</h4>
                      <span className="price-tag">{service.price}</span>
                    </div>
                    <p className="text-muted">{service.description}</p>
                    <ul className="feature-list">
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <i className="bi bi-check2-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-outline-dark btn-sm px-4 mt-2">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container text-center">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Get in touch and our experts will help you plan the perfect look.</p>
          <Link to="/contact" className="btn btn-gold btn-lg px-5">
            Talk To Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
