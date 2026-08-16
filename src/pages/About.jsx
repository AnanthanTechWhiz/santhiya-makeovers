import PageBanner from '../components/PageBanner'
import StatCounter from '../components/StatCounter'
import { highlights, stats, team } from '../data/siteData'
import logoIcon from '../assets/logo-icon.png'
import logoPortrait from '../assets/logo-portrait.jpg'

function About() {
  const artist = team[0]

  return (
    <>
      <PageBanner
        icon="bi-heart-fill"
        title="About Santhiya Makeovers"
        subtitle="The artistry and passion behind every beautiful transformation."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="eyebrow eyebrow-light">Our Story</span>
              <h2 className="mb-3">A Passion for Beauty, A Promise of Excellence</h2>
              <p className="text-muted">
                Santhiya Makeovers is a Bengaluru-based bridal studio specialising in saree
                draping, makeup and hairstyling, rated 5.0 on Google. Every look is crafted to
                make clients feel like the most beautiful version of themselves for every
                celebration.
              </p>
              <p className="text-muted">
                Santhiya blends international techniques with an eye for individual beauty, using
                only premium, skin-friendly products so you look radiant and feel comfortable all
                day long.
              </p>
              <div className="row g-4 mt-2">
                <div className="col-6">
                  <div className="feature-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Certified Makeup Artists</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="feature-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Premium Skin-Safe Products</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="feature-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Personalised Consultations</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="feature-point">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>On-Location Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-visual">
                <div className="about-visual-icon">
                  <img src={logoIcon} alt={artist.name} />
                </div>
                <p className="about-visual-quote">
                  &ldquo;Every face has a unique story — my job is to help you tell it
                  beautifully.&rdquo;
                </p>
                <span className="about-visual-signature">— {artist.name}, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-4 text-center">
              <img src={logoPortrait} alt={artist.name} className="artist-portrait mx-auto" />
              <h4 className="mt-3 mb-1">{artist.name}</h4>
              <p className="text-muted small">{artist.role}</p>
            </div>
            <div className="col-lg-8">
              <span className="eyebrow eyebrow-light">Meet The Artist</span>
              <h2 className="mb-3">The Face Behind Santhiya Makeovers</h2>
              <p className="text-muted">{artist.bio}</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {highlights.map((item) => (
                  <span className="highlight-chip" key={item.label}>
                    <i className={`bi ${item.icon}`}></i>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-card text-center">
                <i className="bi bi-bullseye"></i>
                <h5>Our Mission</h5>
                <p className="text-muted small">
                  To empower every client with confidence through expert artistry, premium care,
                  and a personalised beauty experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card text-center">
                <i className="bi bi-eye-fill"></i>
                <h5>Our Vision</h5>
                <p className="text-muted small">
                  To be Bengaluru&apos;s most loved premium makeover studio, known for elegance,
                  trust, and unforgettable transformations.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card text-center">
                <i className="bi bi-heart-fill"></i>
                <h5>Our Values</h5>
                <p className="text-muted small">
                  Integrity, artistry, and care — we treat every client like family and every
                  event like our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
