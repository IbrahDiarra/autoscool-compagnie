import React from 'react'
import PropTypes from 'prop-types'
import fermer from 'src/assets/images/imge/Image11.png'

const CardNiveauSelect = ({ imgniveau, imgcorrect, niveau, soustitre, couleur, backcouleur }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: backcouleur,
        borderRadius: '6px',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={imgniveau}
          alt="Profil"
          style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '5px' }}
        />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '9px' }}>{niveau}</div>
          <div style={{ fontSize: '8px', color: couleur }}>{soustitre}</div>
        </div>
      </div>
      <div className="d-flex">
        <img src={imgcorrect} style={{ width: '15px', height: '15px' }} />
        <img src={fermer} style={{ width: '15px', height: '15px' }} />
      </div>
    </div>
  )
}

CardNiveauSelect.propTypes = {
  imgniveau: PropTypes.string.isRequired,
  imgcorrect: PropTypes.string.isRequired,
  niveau: PropTypes.string.isRequired,
  soustitre: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
  backcouleur: PropTypes.string.isRequired,
}

export default CardNiveauSelect
