import { testimonials } from '../data/siteData'

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}></i>
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      <i className="bi bi-quote quote-icon"></i>
      <StarRating rating={item.rating} />
      <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
      <div className="testimonial-author">
        <div className="author-avatar">{item.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</div>
        <div>
          <div className="author-name">{item.name}</div>
          <div className="author-role">{item.role}</div>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const loop = [...testimonials, ...testimonials]

  return (
    <div className="testimonial-scroll" role="region" aria-label="Customer feedback">
      <div className="testimonial-track">
        {loop.map((item, idx) => (
          <TestimonialCard item={item} key={`${item.name}-${idx}`} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
