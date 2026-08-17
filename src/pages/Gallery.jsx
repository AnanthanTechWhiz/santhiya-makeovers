import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { galleryCategories, galleryItems } from '../data/siteData'

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <PageBanner
        icon="bi-images"
        title="Our Gallery"
        subtitle="A showcase of transformations we're proud of."
      />

      <section className="section-padding">
        <div className="container">
          <div className="gallery-filters d-flex flex-wrap justify-content-center gap-2 mb-5">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filteredItems.map((item) => (
              <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                <div className="gallery-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-card-img"
                    loading="lazy"
                  />
                  <span className="gallery-card-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <div className="gallery-card-overlay">
                    <span className="badge-category">{item.category}</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-muted mt-5">No items found in this category yet.</p>
          )}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container text-center">
          <h2>Love What You See?</h2>
          <p>Let&apos;s create your own beautiful transformation story.</p>
          <Link to="/contact" className="btn btn-gold btn-lg px-5">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  )
}

export default Gallery
