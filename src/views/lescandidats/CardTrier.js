import React from 'react'

import {
  CButton,
  CCol,
  CRow,
  CForm,
  CInputGroup,
  CFormSelect,
  CFormInput,
  CFormSwitch,
} from '@coreui/react'

const CardTrier = ({}) => {
  return (
    <div>
      <CForm>
        <CRow className="mb-3">
          <CCol>
            <CInputGroup>
              <CFormSelect>
                <option>Niveau</option>
                <option value="Homme">Inscription reussi</option>
                <option value="Femme">Visite medicale reussi</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <CInputGroup>
              <CFormSelect>
                <option>Type permis</option>
                <option value="Homme">A</option>
                <option value="Femme">AB</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <CInputGroup>
              <CFormSelect>
                <option>Langue</option>
                <option value="Homme">Anglais</option>
                <option value="Femme">Francais</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <CInputGroup>
              <CFormSelect>
                <option>Sexe</option>
                <option value="Homme">Masculin</option>
                <option value="Femme">Feminin</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <CInputGroup>
              <CFormSelect>
                <option>Capacite</option>
                <option value="Homme">Analphabet</option>
                <option value="Femme">Etudiant</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Date Inscription" type="date" />
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <div
              className="d-flex align-items-center"
              style={{
                width: '100%',
                maxWidth: '400px',
                border: '1px solid #ced4da',
                borderRadius: '0.5rem',
                padding: '0.375rem 0.75rem',
                backgroundColor: '#fff',
              }}
            >
              <span style={{ marginRight: 'auto' }}>Recyclage</span>
              <CFormSwitch id="recyclage" />
            </div>
          </CCol>
        </CRow>

        <div className="d-grid mt-5">
          <CButton style={{ backgroundColor: 'var(--blue1)', color: '#fff' }}>Rechercher</CButton>
        </div>
      </CForm>
    </div>
  )
}

export default CardTrier
