import React from 'react'
import correcte from 'src/assets/images/imge/Image12.png'
import incorrecte from 'src/assets/images/imge/Image11.png'
import rand from 'src/assets/images/imge/Image15.png'
import temps from 'src/assets/images/imge/Image16.png'
import PropTypes from 'prop-types'

const InfoRow = ({ image, label, value }) => (
  <div className="d-flex align-items-center justify-content-between mb-2">
    <div className="d-flex align-items-center">
      <img src={image} alt="" style={{ width: '15px', height: '15px', marginRight: '5px' }} />
      <div style={{ fontSize: '10px' }}>{label}</div>
    </div>
    <div style={{ fontWeight: 'bold', fontSize: '8px', color: 'purple' }}>{value}</div>
  </div>
)

InfoRow.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const CardExoPerformence = () => {
  return (
    <div
      className="mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: '#cce7ff',
      }}
    >
      <div className="d-flex justify-content-between mb-2">
        <div style={{ fontWeight: 'bold', fontSize: '10px', color: 'purple' }}>Exercice 1</div>
        <div style={{ fontSize: '8px', fontWeight: 'bold' }}>10.Jan.2024</div>
      </div>

      <InfoRow image={correcte} label="Réponse correcte :" value="7" />
      <InfoRow image={incorrecte} label="Réponse incorrecte :" value="3" />
      <InfoRow image={rand} label="Rands :" value="6" />
      <InfoRow image={temps} label="Temps :" value="11h" />
    </div>
  )
}

export default CardExoPerformence
