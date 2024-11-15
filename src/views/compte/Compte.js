import React, { useState } from 'react'
import entreprise from 'src/assets/images/img/entreprise.png'
import assistante from 'src/assets/images/img/assistante.png'
import gerant from 'src/assets/images/img/gerant.png'

import { CCol, CRow, CCard, CCardBody, CTab, CCardHeader, CTabList, CTabs } from '@coreui/react'
import CardEntreprise from './CardEntreprise'
import CardGerant from './CardGerant'
import CardAssistant from './CardAssistant'
import CardCentreAssistance from './CardCentreAssistance'
import CardCondition from './CardCondition'

const Compte = () => {
  const [activeKey, setActiveKey] = useState('Entreprise')
  const activeStyle = {
    color: 'var(--blue1)',
    fontWeight: 'bold',
    backgroundColor: 'var(--select1)',
    fontSize: '11px',
    textAlign: 'initial',
    borderRadius: '0px',
    borderLeft: '3px solid var(--blue1)',
    borderTop: 'none',
  }

  const inactiveStyle = {
    color: 'var(--grey)',
    fontSize: '11px',
    textAlign: 'initial',
    borderRadius: '0px',
    borderTop: 'none',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  return (
    <CRow>
      <CCol xs={12} md={4} xl={4}>
        <CCard style={{ height: '85vh' }}>
          <CCardHeader>
            <div style={{ color: 'var(--grey)' }} className="fw-semibold">
              Compte
            </div>
          </CCardHeader>
          <CCardBody className="d-flex justify-content-between flex-column">
            <CTabs activeItemKey={activeKey} onTabChange={handleTabChange}>
              <CTabList
                variant="tabs"
                className="d-flex  flex-column mt-2"
                style={{
                  fontWeight: 'bold',
                  marginLeft: '-14px',
                  marginRight: '-14px',
                  borderBottom: 'none',
                  borderTop: 'none',
                }}
              >
                <CTab
                  itemKey="Entreprise"
                  style={activeKey === 'Entreprise' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Entreprise')}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src={entreprise}
                        style={{ width: '25px', height: '25px', marginRight: '10px' }}
                      />
                      Entreprise
                    </div>
                  </div>
                </CTab>
                <CTab
                  itemKey="Gerant"
                  style={activeKey === 'Gerant' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Gerant')}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src={gerant}
                        style={{ width: '25px', height: '25px', marginRight: '10px' }}
                      />
                      Gerant
                    </div>
                  </div>
                </CTab>
                <CTab
                  itemKey="Assistant"
                  style={activeKey === 'Assistant' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Assistant')}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src={assistante}
                        style={{ width: '25px', height: '25px', marginRight: '10px' }}
                      />
                      Assistant
                    </div>
                  </div>
                </CTab>
              </CTabList>
            </CTabs>
            <CTabs activeItemKey={activeKey} onTabChange={handleTabChange}>
              <CTabList
                variant="tabs"
                className="d-flex  flex-column"
                style={{
                  fontWeight: 'bold',
                  marginLeft: '-14px',
                  marginRight: '-14px',
                  borderBottom: 'none',
                  borderTop: 'none',
                }}
              >
                <CTab
                  itemKey="Centre"
                  style={activeKey === 'Centre' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Centre')}
                >
                  <div className="d-flex justify-content-between">
                    <div>Centre d&apos;assistance</div>
                  </div>
                </CTab>
                <CTab
                  itemKey="Condition"
                  style={activeKey === 'Condition' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Condition')}
                >
                  <div className="d-flex justify-content-between">
                    <div>Condition générale d&apos;utilisation</div>
                  </div>
                </CTab>
              </CTabList>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={8} xl={8}>
        {activeKey === 'Entreprise' ? (
          <CardEntreprise />
        ) : activeKey === 'Gerant' ? (
          <CardGerant />
        ) : activeKey === 'Assistant' ? (
          <CardAssistant />
        ) : activeKey === 'Centre' ? (
          <CardCentreAssistance />
        ) : (
          <CardCondition />
        )}
      </CCol>
    </CRow>
  )
}

export default Compte
