import React from 'react'
import profil from 'src/assets/images/img/profile1.png'
import whatsapp from 'src/assets/images/img/sociale.png'
import instagram from 'src/assets/images/img/instagram.png'
import facebook from 'src/assets/images/img/facebook.png'
import sms from 'src/assets/images/img/sms.png'
import autre from 'src/assets/images/img/menu.png'
import PropTypes from 'prop-types'

import { CCol, CRow } from '@coreui/react'

const PartageCardRow = ({ img, value, name }) => (
  <div
    className="d-flex justify-content-between align-items-center mb-1"
    style={{ backgroundColor: 'white', padding: '5px', borderRadius: '7px' }}
  >
    <div className="d-flex align-items-center">
      <img className="me-1" src={img} style={{ width: '14px', height: '14px' }} />
      <div style={{ fontSize: '8px', fontWeight: 'bold' }}>{name}</div>
    </div>
    <div style={{ fontSize: '8px', fontWeight: 'bold' }}>{value}</div>
  </div>
)

PartageCardRow.propTypes = {
  img: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const CardUserAvis = ({}) => {
  return (
    <div
      className="mb-3"
      style={{
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: 'var(--backcard1)',
        cursor: 'pointer',
        width: '100%',
      }}
    >
      <div>
        <CRow className="d-flex align-items-center">
          <CCol xs={12} md={4} xl={4}>
            <div className="d-flex align-items-center">
              <img
                src={profil}
                alt="Profil"
                style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '20px' }}
              />
              <div style={{ fontWeight: 'bold', fontSize: '11px' }}>Cisse Idriss</div>
            </div>
          </CCol>
          <CCol xs={12} md={8} xl={8}>
            <CRow>
              <CCol xs={12} md={4} xl={4}>
                <PartageCardRow img={whatsapp} value="8" name="Whatsapp" />
                <PartageCardRow img={facebook} value="8" name="Facebook" />
              </CCol>
              <CCol xs={12} md={4} xl={4}>
                <PartageCardRow img={instagram} value="4" name="Instagram" />
                <PartageCardRow img={sms} value="5" name="SMS" />
              </CCol>
              <CCol xs={12} md={4} xl={4}>
                <PartageCardRow img={autre} value="4" name="Autre" />
                <div className="d-flex align-items-cente">
                  <span>17 Janvier 2024</span>
                </div>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default CardUserAvis
