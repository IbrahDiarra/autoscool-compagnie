import React from 'react'
import profil from 'src/assets/images/img/profile1.png'
import PropTypes from 'prop-types'
import star from 'src/assets/images/img/star.png'
import star1 from 'src/assets/images/img/star1.png'
import likeImg from 'src/assets/images/img/like.png'
import dislikeImg from 'src/assets/images/img/dislike.png'

import { CButton } from '@coreui/react'

const CardAvis = ({}) => {
  return (
    <div
      className="mb-2"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: 'var(--backcard2)',
        cursor: 'pointer',
        width: '100%',
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={profil}
            alt="Profil"
            style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '10px' }}
          />
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '11px' }}>Idriss Cisse</div>
            <div style={{ fontSize: '10px' }}>111 JAN 2024</div>
          </div>
        </div>
        <div>
          <img className="me-1" src={star} style={{ width: '12px', height: '12px' }} />
          <img className="me-1" src={star} style={{ width: '12px', height: '12px' }} />
          <img className="me-1" src={star} style={{ width: '12px', height: '12px' }} />
          <img className="me-1" src={star} style={{ width: '12px', height: '12px' }} />
          <img className="me-1" src={star1} style={{ width: '12px', height: '12px' }} />
        </div>
      </div>
      <div className="m-3">
        Le développement agile est devenu une approche incontournable pour répondre aux exigences
        modernes de flexibilité et de rapidité dans le développement de logiciels.
      </div>
      <div className="d-flex justify-content-end text-end">
        <div className="d-flex">
          <CButton
            color="success"
            variant="outline"
            style={{ borderRadius: '12px', fontSize: '10px', fontWeight: 'bold' }}
          >
            125 <img src={likeImg} alt="Ajouter un logo" width="15" height="15" />
          </CButton>
          <CButton
            color="danger"
            variant="outline"
            style={{
              marginLeft: '8px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            22 <img src={dislikeImg} alt="Ajouter un logo" width="15" height="15" />
          </CButton>
        </div>
      </div>
    </div>
  )
}

export default CardAvis
