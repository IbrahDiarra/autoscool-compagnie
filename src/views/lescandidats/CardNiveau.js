import React from 'react'
import PropTypes from 'prop-types'

const CardNiveau = ({ imgsrc, niveau, date, couleur }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={imgsrc}
          alt="Profil"
          style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '13px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '11px', color: couleur }}>{niveau}</div>
          <div style={{ fontSize: '9px' }}>Inscrit {date}</div>
        </div>
      </div>
    </div>
  )
}

CardNiveau.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  niveau: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
}

export default CardNiveau
