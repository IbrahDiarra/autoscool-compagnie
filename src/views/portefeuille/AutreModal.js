import React from 'react'
import PropTypes from 'prop-types'

const RankingItem = ({}) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      style={{
        background: gradient ? 'linear-gradient(90deg, #6a11cb, #2575fc)' : '#392e5c',
        padding: '10px',
        borderRadius: '8px',
        color: 'white',
        width: taille,
      }}
    >
      <div className="d-flex align-items-center flex-grow-1">
        <img
          src={selectedOperator.imgSrc}
          alt={selectedOperator.name}
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold' }}>{selectedOperator.name}</div>
          <div style={{ fontSize: '12px', color: '#6b6969dd' }}>{selectedOperator.fee}</div>
          <div style={{ fontSize: '14px', color: '#333' }}>{telephone} CFA</div>
        </div>
      </div>

      {/* Score et Icône */}
      <div className="d-flex align-items-center flex-direction-column">
        <div style={{ fontWeight: 'bold' }}>{montant}</div>
        <div style={{ fontSize: '14px', color: '#333' }}>Montant à debité</div>
      </div>
    </div>
  )
}

RankingItem.propTypes = {
  rank: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  coinIcon: PropTypes.string.isRequired,
  gradient: PropTypes.bool,
  taille: PropTypes.string.isRequired,
}

export default RankingItem
