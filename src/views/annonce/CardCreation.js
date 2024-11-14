import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCol,
  CRow,
  CFormLabel,
  CInputGroup,
  CFormSelect,
  CFormInput,
} from '@coreui/react'
import CardAffichage2 from './CardAffichage2'

const CardCreation = ({}) => {
  return (
    <div>
      <CRow>
        <CCol xs={12} md={7} xl={7}>
          <CCard className="mb-4">
            <CCardHeader
              className="text-center"
              style={{
                borderRadius: '0px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
                backgroundColor: 'var(--white1)',
                boxShadow:
                  'inset 3px 3px 4px 3px rgba(255,255,255,0.1), inset -3px -3px 4px 3px rgba(0,0,0,0.1)',
              }}
            >
              <div className="p-3">
                Envoyer une notification aux candidats sur le lieux, la date et l&apos;heure de la
                visite medicale
              </div>
            </CCardHeader>
            <CCardBody>
              <CRow className="mb-3">
                <CCol>
                  <CInputGroup>
                    <CFormSelect>
                      <option>Destinataire</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </CFormSelect>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol>
                  <CFormInput type="text" id="inputPrenom" placeholder="Entrez le lieux" />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={6}>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Date" type="date" />
                  </CInputGroup>
                </CCol>
                <CCol xs={12} md={6}>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Heure" type="time" />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol>
                  <CFormInput type="number" placeholder="Numero à contacter" min={0} />
                </CCol>
              </CRow>
              <div className="d-grid mt-5 pt-5">
                <CButton color="warning" className="mb-3">
                  Envoyer
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={5} xl={5}>
          <CardAffichage2 />
        </CCol>
      </CRow>
    </div>
  )
}

export default CardCreation
