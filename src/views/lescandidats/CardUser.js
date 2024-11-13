import React from 'react'
import profil from 'src/assets/images/imge/Image2.png'
import Image17 from 'src/assets/images/imge/Image17.png'
import PropTypes from 'prop-types'

const CardUser = ({ nom, onClick, isSelected }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: isSelected ? '#cce7ff' : '#fff',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div className="d-flex align-items-center">
        <img
          src={profil}
          alt="Profil"
          style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '10px' }}>{nom}</div>
          <div style={{ fontSize: '8px' }}>Visite medicale reussi</div>
        </div>
      </div>

      <div className="d-flex align-items-center  flex-column" style={{ fontSize: '9px' }}>
        <img src={Image17} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
        <spam style={{ fontWeight: 'bold' }}>10:10</spam>
      </div>
    </div>
  )
}

CardUser.propTypes = {
  nom: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default CardUser
