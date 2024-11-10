import React from 'react'
import profil from 'src/assets/images/img/profile3.png'
import PropTypes from 'prop-types'

const CardAffichageDetail = ({ nom, niveau, date }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={profil}
          alt="Profil"
          style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '10px' }}>{nom}</div>
          <div style={{ fontSize: '8px' }}>Inscrit {date}</div>
        </div>
      </div>

      <div className="d-flex align-items-center  flex-column" style={{ fontSize: '9px' }}>
        <span>Niveau actuel</span>
        <spam style={{ fontWeight: 'bold' }}>{niveau}</spam>
      </div>
    </div>
  )
}

CardAffichageDetail.propTypes = {
  nom: PropTypes.string.isRequired,
  niveau: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default CardAffichageDetail
