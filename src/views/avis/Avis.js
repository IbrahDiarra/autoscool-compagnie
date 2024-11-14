import React, { useState } from 'react'
import logo from 'src/assets/images/img/autoschool.png'
import etoile from 'src/assets/images/img/etoile.png'
import partage from 'src/assets/images/img/partage.png'
import star from 'src/assets/images/img/star.png'
import star1 from 'src/assets/images/img/star1.png'

import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilStar } from '@coreui/icons'
import Evaluation from './Evaluation'

const Avis = () => {
  const [activeKey, setActiveKey] = useState('Evaluation')
  const activeStyle = {
    color: '#064dda',
    fontWeight: 'bold',
    backgroundColor: '#e0f7fa',
    fontSize: '11px',
    textAlign: 'initial',
    borderRadius: '0px',
    borderLeft: '3px solid blue',
  }

  const inactiveStyle = {
    color: '#1f1f20',
    fontSize: '11px',
    textAlign: 'initial',
    borderRadius: '0px',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  return (
    <CRow>
      <CCol xs={12} md={4} xl={4}>
        <CCard className="mb-4">
          <CCardBody>
            <div>
              <div>
                <img
                  src={logo}
                  alt="Ajouter un logo"
                  style={{ marginBottom: '-20px', width: '100%' }}
                />
              </div>
              <div className="mt-4">
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>ON PROUVE</div>
                <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Votre Slogan</div>
              </div>
              <div className="text-center mb-3 mt-4">
                <img className="me-1" src={star} style={{ width: '18px', height: '18px' }} />
                <img className="me-1" src={star} style={{ width: '18px', height: '18px' }} />
                <img className="me-1" src={star} style={{ width: '18px', height: '18px' }} />
                <img className="me-1" src={star} style={{ width: '18px', height: '18px' }} />
                <img className="me-1" src={star1} style={{ width: '18px', height: '18px' }} />
              </div>
            </div>
            <div
              className="mb-1"
              style={{ borderBottom: '2px solid #ccc', marginLeft: '-14px', marginRight: '-14px' }}
            ></div>

            <CTabs activeItemKey={activeKey} onTabChange={handleTabChange} className="mb-4">
              <CTabList
                variant="tabs"
                className="d-flex  flex-column mt-4"
                style={{
                  fontWeight: 'bold',
                  marginLeft: '-14px',
                  marginRight: '-14px',
                }}
              >
                <CTab
                  itemKey="Evaluation"
                  style={activeKey === 'Evaluation' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Evaluation')}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src={etoile}
                        style={{ width: '25px', height: '25px', marginRight: '10px' }}
                      />
                      Evaluation et avis candidat
                    </div>
                  </div>
                </CTab>
                <CTab
                  itemKey="General"
                  style={activeKey === 'General' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('General')}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src={partage}
                        style={{ width: '25px', height: '25px', marginRight: '10px' }}
                      />
                      Partage
                    </div>
                    <span>15</span>
                  </div>
                </CTab>
              </CTabList>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={8} xl={8}>
        <CCard className="mb-4">
          <CCardBody>
            <Evaluation />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Avis
