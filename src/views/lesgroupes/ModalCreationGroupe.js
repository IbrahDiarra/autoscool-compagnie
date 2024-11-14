import React, { useState } from 'react'

import {
  CButton,
  CCol,
  CRow,
  CForm,
  CInputGroup,
  CFormSelect,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const ModalCreationGroupe = ({}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <CButton variant="outline" color="secondary" onClick={() => setVisible(!visible)}>
        Créer un groupe
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle className="text-primary" style={{ fontWeight: 'bold' }}>
            Créer un groupe
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-3">
              <CCol>
                <CFormInput type="text" id="nomgroupe" placeholder="Nom du groupe" />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CInputGroup>
                  <CFormSelect>
                    <option>Ajouter des membres</option>
                    <option value="1">Michael Kouame</option>
                    <option value="2">Idriss Cisse</option>
                  </CFormSelect>
                </CInputGroup>
              </CCol>
            </CRow>

            <div className="d-grid mt-5">
              <CButton color="warning">Enregistrer</CButton>
            </div>
          </CForm>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default ModalCreationGroupe
