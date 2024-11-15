import React from 'react'

import { CCard, CCardBody, CCardHeader, CButton, CRow, CCol } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import menu from 'src/assets/images/img/menu1.png'
import wha from 'src/assets/images/img/wha.png'
import fb from 'src/assets/images/img/fb.png'
import insta from 'src/assets/images/img/insta.png'
import texto from 'src/assets/images/img/texto.png'
import phone from 'src/assets/images/img/tel.png'
import mail from 'src/assets/images/img/email.png'
import assistant from 'src/assets/images/img/assistant.png'

const CardCentreAssistance = ({}) => {
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
        <CCardHeader>
          <div
            className="d-flex justify-content-between text-nowrap"
            style={{ color: 'var(--grey)' }}
          >
            <div className="fw-semibold">Centre d&apos;assistance </div>
            <img src={menu} width="20" height="20" />
          </div>
        </CCardHeader>
        <CCardBody className="p-4 d-flex justify-content-between flex-column">
          <div>
            <img src={assistant} style={{ width: '100%' }} />
            <div className="text-center mt-4">
              Bienvenu au service d&apos;assistant Autoscool selectionnez le moyen le plus facile
              pour vous de nous contacter car nous vous attendons pour répondre a vos preoccupation
            </div>
          </div>
          <div>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <div
                  className="mb-1"
                  style={{
                    backgroundColor: 'var(--backcard1)',
                    padding: '6px',
                    borderRadius: '7px',
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img className="me-1" src={texto} style={{ width: '18px', height: '18px' }} />
                    <div>Message</div>
                  </div>
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={6}>
                <div
                  className="mb-1"
                  style={{
                    backgroundColor: 'var(--backcard1)',
                    padding: '6px',
                    borderRadius: '7px',
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img className="me-1" src={wha} style={{ width: '18px', height: '18px' }} />
                    <div>Whatsapp direct</div>
                  </div>
                </div>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <div
                  className="mb-1"
                  style={{
                    backgroundColor: 'var(--backcard1)',
                    padding: '6px',
                    borderRadius: '7px',
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img className="me-1" src={phone} style={{ width: '18px', height: '18px' }} />
                    <div>Appel téléphonique</div>
                  </div>
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={6}>
                <div
                  className="mb-1"
                  style={{
                    backgroundColor: 'var(--backcard1)',
                    padding: '6px',
                    borderRadius: '7px',
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img className="me-1" src={mail} style={{ width: '18px', height: '18px' }} />
                    <div>E-mail</div>
                  </div>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="text-center">
            <div>
              <img src={fb} width="20" height="20" />
              <img src={insta} width="20" height="20" />
            </div>
            <div>Retrouvez nous sur les réseaux</div>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default CardCentreAssistance
