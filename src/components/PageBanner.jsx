function PageBanner({ icon, title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay"></div>
      <div className="container position-relative text-center">
        {icon && (
          <div className="page-banner-icon mb-3">
            <i className={`bi ${icon}`}></i>
          </div>
        )}
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        <div className="page-banner-divider mx-auto"></div>
      </div>
    </section>
  )
}

export default PageBanner
