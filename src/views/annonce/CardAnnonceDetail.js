import React from 'react'
import PropTypes from 'prop-types'

const CardAnnonceDetail = ({ titre, onClick, isSelected, date, nombre }) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      style={{
        padding: '7px',
        borderRadius: '8px',
        backgroundColor: isSelected ? '#cce7ff' : '#e5e5e6',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div className="flex-grow-1">
        <div style={{ fontWeight: 'bold' }}>{titre}</div>
        <div style={{ fontSize: '12px' }}>{date}</div>
      </div>

      <div className="d-flex align-items-center">
        <span style={{ marginRight: '5px' }}>Destinataire</span>
        <spam style={{ fontWeight: 'bold' }}>{nombre}</spam>
      </div>
    </div>
  )
}

CardAnnonceDetail.propTypes = {
  titre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default CardAnnonceDetail
