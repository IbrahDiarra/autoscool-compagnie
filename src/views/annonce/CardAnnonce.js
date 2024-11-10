import React from 'react'
import PropTypes from 'prop-types'

const CardAnnonce = ({ titre, onClick, isSelected }) => {
  return (
    <div
      className="p-3 mb-3"
      style={{
        borderRadius: '10px',
        backgroundColor: isSelected ? '#cce7ff' : '#e5e5e6',
        cursor: 'pointer',
        padding: '10px',
      }}
      onClick={onClick}
    >
      <span>{titre}</span>
    </div>
  )
}

CardAnnonce.propTypes = {
  titre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default CardAnnonce
