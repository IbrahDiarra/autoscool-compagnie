import React from 'react'
import profileImage1 from 'src/assets/images/img/profile1.png'

const CardUserClassement = ({}) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      style={{
        background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
        padding: '5px',
        borderRadius: '6px',
        color: 'white',
        width: '100%',
      }}
    >
      {/* Photo et Infos */}
      <div className="d-flex align-items-center flex-grow-1">
        <img
          src={profileImage1}
          alt="Profil"
          style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }}
        />
        <div>
          <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Michael Kouame</div>
          <div style={{ fontSize: '8px', color: '#ddd' }}>850 Points</div>
        </div>
      </div>

      {/* Score et Icône */}
      <div className="d-flex align-items-center">
        <span style={{ fontSize: '9px', fontWeight: 'bold', marginRight: '5px' }}>N°4</span>
      </div>
    </div>
  )
}

export default CardUserClassement
