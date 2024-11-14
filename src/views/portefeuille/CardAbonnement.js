import React from 'react'
import PropTypes from 'prop-types'

const CardAbonnement = ({
  type,
  name,
  time,
  montant,
  status,
  couleur,
  couleur1,
  couleur2,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      style={{
        background: isSelected ? 'var(--select2)' : '#fff',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: 'inset -4px -4px -5px -4px rgba(255,255,255,0.3)',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div className="d-flex align-items-center flex-grow-1">
        <div>
          <div style={{ fontWeight: 'bold' }}>
            <span style={{ color: couleur1 }}>{type} </span> {''} {name}
          </div>
          <div style={{ fontSize: '12px' }}>{time}</div>
        </div>
      </div>
      <div className="d-flex text-end flex-column justify-content-center">
        <span style={{ fontWeight: 'bold', marginRight: '5px', color: couleur2 }}>
          {montant} FR
        </span>
        <div style={{ color: couleur, marginRight: '5px' }}>{status}</div>
      </div>
    </div>
  )
}

CardAbonnement.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  montant: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
  couleur1: PropTypes.string.isRequired,
  couleur2: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default CardAbonnement
