import React from 'react'
import PropTypes from 'prop-types'

const RankingItem = ({ rank, image, name, time, score, coinIcon, gradient, taille }) => {
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
      {/* Rang */}
      <div
        style={{
          width: '30px',
          height: '30px',
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
          height: '40px',
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
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold' }}>{name}</div>
          <div style={{ fontSize: '12px', color: '#ddd' }}>{time}</div>
        </div>
      </div>

      {/* Score et Icône */}
      <div className="d-flex align-items-center">
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{score}</span>
        <img src={coinIcon} alt="Coin" style={{ width: '16px', height: '16px' }} />
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
