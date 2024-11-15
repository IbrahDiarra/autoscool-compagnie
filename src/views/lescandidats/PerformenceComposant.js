import React, { useState } from 'react'
import './ButtomSheet.css'
import feu from 'src/assets/images/imge/Image13.png'
import volant from 'src/assets/images/imge/Image14.png'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCardFooter,
  CTab,
  CTabList,
  CTabs,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import ClassementBottom from './BottomSheetPerfor'
import CardExoPerformence from './CardExoPerformence'

const CourConduiteComposant = ({}) => {
  const [activeKey, setActiveKey] = useState('CodeRoute')
  const activeStyle = {
    color: '#fff',
    fontWeight: 'bold',
    width: '50%',
    backgroundColor: 'var(--blue1)',
    border: '1px solid #ccc',
    fontSize: '9px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  }

  const inactiveStyle = {
    color: 'var(--grey)',
    width: '50%',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    fontSize: '9px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
        <CCardHeader>
          <div className="text-center fw-semibold m-1" style={{ color: 'var(--grey)' }}>
            Performence
          </div>
        </CCardHeader>
        <CCardBody>
          <CTabs activeItemKey={activeKey} onTabChange={handleTabChange}>
            <CTabList
              variant="tabs"
              className="d-flex align-items-center justify-content-start"
              style={{
                fontWeight: 'bold',
                marginLeft: '-14px',
                marginRight: '-14px',
                marginTop: '-14px',
              }}
            >
              <CTab
                itemKey="CodeRoute"
                style={activeKey === 'CodeRoute' ? activeStyle : inactiveStyle}
                onClick={() => handleTabChange('CodeRoute')}
              >
                <div className="d-flex align-items-center">
                  <img src={feu} style={{ width: '17px', height: '17px' }} />
                  Code de la Route
                </div>
              </CTab>
              <CTab
                itemKey="CourConduite"
                style={activeKey === 'CourConduite' ? activeStyle : inactiveStyle}
                onClick={() => handleTabChange('CourConduite')}
              >
                <div className="d-flex align-items-center">
                  <img src={volant} style={{ width: '17px', height: '17px' }} />
                  Cour de Conduite
                </div>
              </CTab>
            </CTabList>
          </CTabs>
          {activeKey === 'CodeRoute' && (
            <div className="mt-1" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              <CAccordion flush>
                <CAccordionItem itemKey={1} className="custom-accordion-item">
                  <CAccordionHeader>
                    <div
                      className="accordion-header-content"
                      style={{ color: 'orange', fontWeight: 'bold', fontSize: '10px' }}
                    >
                      <div>Section 1 - cours 1</div>
                      <div className="flex-end"> 160 Points</div>
                    </div>
                  </CAccordionHeader>
                  <CAccordionBody>
                    <CardExoPerformence />
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2} className="custom-accordion-item">
                  <CAccordionHeader>
                    <div
                      className="accordion-header-content"
                      style={{ color: 'orange', fontWeight: 'bold', fontSize: '10px' }}
                    >
                      <div>Section 1 - cours 2</div>
                      <div className="flex-end"> 160 Points</div>
                    </div>
                  </CAccordionHeader>
                  <CAccordionBody>
                    <CardExoPerformence />
                    <CardExoPerformence />
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3} className="custom-accordion-item">
                  <CAccordionHeader>
                    <div
                      className="accordion-header-content"
                      style={{ color: 'orange', fontWeight: 'bold', fontSize: '10px' }}
                    >
                      <div>Section 1 - cours 3</div>
                      <div className="flex-end"> 160 Points</div>
                    </div>
                  </CAccordionHeader>
                  <CAccordionBody>Section 1 le cours 3</CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </div>
          )}
          {activeKey === 'CourConduite' && <div></div>}
        </CCardBody>
        <CCardFooter>
          <ClassementBottom style={{ width: '100%' }} />
        </CCardFooter>
      </CCard>
    </div>
  )
}

export default CourConduiteComposant
