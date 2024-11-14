import React from 'react'
import profil from 'src/assets/images/img/profile1.png'
import update from 'src/assets/images/imge/Image17.png'
import effacer from 'src/assets/images/imge/effacer.png'
import PropTypes from 'prop-types'

import { CCol, CRow, CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'
import { Colors } from 'chart.js'

const CardMembre = ({ membre }) => {
  return (
    <div
      className="mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: 'hsl(0, 5%, 88%)',
        cursor: 'pointer',
        width: '100%',
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <img src={update} alt="Coin" style={{ width: '15px', height: '15px' }} />
        <img src={effacer} alt="Coin" style={{ width: '15px', height: '15px' }} />
      </div>

      <div>
        <CRow>
          <CCol xs={12} md={4} xl={4}>
            <div className="d-flex align-items-center">
              <img
                src={profil}
                alt="Profil"
                style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '11px' }}>{membre.nom}</div>
                <div style={{ fontSize: '10px' }}>{membre.dateinscription}</div>
                <div style={{ fontSize: '10px', color: 'green', fontWeight: 'bold' }}>
                  {membre.status}
                </div>
              </div>
            </div>
          </CCol>
          <CCol xs={12} md={3} xl={3}>
            <div className="text-center">
              <div>Niveau</div>
              <div style={{ fontWeight: 'bold', fontSize: '9px' }}>{membre.niveau}</div>
            </div>
          </CCol>
          <CCol xs={12} md={3} xl={3}>
            <div className="text-center">
              <div>Type Permis</div>
              <div style={{ fontWeight: 'bold', fontSize: '10px', color: 'purple' }}>
                {membre.typepermis}
              </div>
            </div>
          </CCol>
          <CCol xs={12} md={2} xl={2}>
            <div className="text-center">
              <div>Groupe</div>
              <div style={{ fontSize: '10px' }}>{membre.groupe}</div>
            </div>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

CardMembre.propTypes = {
  membre: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardMembre
