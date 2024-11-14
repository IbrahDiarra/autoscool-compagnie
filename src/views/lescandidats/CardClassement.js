import React from 'react'
import PropTypes from 'prop-types'

const CardClassement = ({ rank, image, name, time, score, coinIcon, gradient, taille }) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      style={{
        background: gradient ? 'var(--violet1)' : 'var(--blue4)',
        padding: '5px',
        borderRadius: '6px',
        color: 'white',
        width: taille,
      }}
    >
      {/* Rang */}
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        {rank}
      </div>

      <div
        className="ms-2 mx-2"
        style={{
          width: '3px',
          height: '20px',
          backgroundColor: '#021870',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      ></div>

      {/* Photo et Infos */}
      <div className="d-flex align-items-center flex-grow-1">
        <img
          src={image}
          alt="Profil"
          style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '5px' }}
        />
        <div>
          <div style={{ fontSize: '10px', fontWeight: 'bold' }}>{name}</div>
          <div style={{ fontSize: '8px', color: '#ddd' }}>{time}</div>
        </div>
      </div>

      {/* Score et Icône */}
      <div className="d-flex align-items-center">
        <span style={{ fontSize: '9px', fontWeight: 'bold', marginRight: '5px' }}>{score}</span>
        <img src={coinIcon} alt="Coin" style={{ width: '12px', height: '12px' }} />
      </div>
    </div>
  )
}

CardClassement.propTypes = {
  rank: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  coinIcon: PropTypes.string.isRequired,
  gradient: PropTypes.bool,
  taille: PropTypes.string.isRequired,
}

export default CardClassement
