import React from 'react'
import profil from 'src/assets/images/img/profile1.png'
import PropTypes from 'prop-types'

const CardGroupe = ({ groupe, nombre, date, onClick, isSelected }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: isSelected ? 'var(--select1)' : 'var(--backcard1)',
        cursor: 'pointer',
        borderBottom: '1.5px solid var(--grey)',
      }}
      onClick={onClick}
    >
      <div className="d-flex align-items-center">
        <img
          src={profil}
          alt="Profil"
          style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '11px' }}>{groupe}</div>
          <div style={{ fontSize: '10px' }}>{date}</div>
        </div>
      </div>

      <div className="d-flex align-items-center  flex-column">
        <spam
          style={{
            fontWeight: 'bold',
            fontSize: '13px',
            marginRight: '5px',
            color: 'var(--violet1)',
          }}
        >
          {nombre}
        </spam>
      </div>
    </div>
  )
}

CardGroupe.propTypes = {
  groupe: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default CardGroupe
