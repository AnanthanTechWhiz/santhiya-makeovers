import { Link } from 'react-router-dom'
import { brand, navLinks, services, socialLinks } from '../data/siteData'
import logoIcon from '../assets/logo-icon.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="brand-logo footer-brand d-inline-flex align-items-center mb-3">
              <img src={logoIcon} alt={brand.name} className="brand-logo-icon me-2" />
              <span className="brand-name">{brand.name}</span>
            </Link>
            <p className="footer-text">
              Premium bridal and party makeup studio dedicated to making every celebration
              unforgettable with expert artistry and personalised care.
            </p>
            <div className="d-flex gap-2 mt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="social-icon"
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="footer-heading">Our Services</h6>
            <ul className="list-unstyled footer-links">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Contact Us</h6>
            <ul className="list-unstyled footer-links footer-contact">
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>{brand.address}</span>
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center">
          <span>&copy; {year} {brand.name}. All rights reserved.</span>
          <span>Crafted with <i className="bi bi-heart-fill text-gold"></i> for beautiful moments</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
