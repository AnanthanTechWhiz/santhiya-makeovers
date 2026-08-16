const variants = ['tile-rose', 'tile-gold', 'tile-plum', 'tile-blush']

function IconTile({ icon, label, variant, className = '', size = 'md' }) {
  const paletteClass = variant || variants[Math.abs(hashCode(label || icon)) % variants.length]

  return (
    <div className={`icon-tile ${paletteClass} icon-tile-${size} ${className}`}>
      <i className={`bi ${icon}`}></i>
    </div>
  )
}

function hashCode(str = '') {
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return hash
}

export default IconTile
