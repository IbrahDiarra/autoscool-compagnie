import React from 'react'
import PropTypes from 'prop-types'

const CardAnnonce = ({ titre, onClick, isSelected }) => {
  return (
    <div
      className="p-2 mb-3"
      style={{
        borderRadius: '8px',
        backgroundColor: isSelected ? 'var(--select1)' : 'var(--backcard1)',
        border: isSelected ? '1px solid var(--blue1)' : 'none',
        color: isSelected ? 'var(--blue1)' : 'var(--grey)',
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
