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
import AjoutCandidats from './AjoutCandidat'

const ModalAjouCandidat = ({}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <CButton variant="outline" color="secondary" onClick={() => setVisible(!visible)}>
        Ajouter un candidat
      </CButton>
      <CModal size="lg" className="m-3" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle className="text-primary" style={{ fontWeight: 'bold' }}>
            Ajouter un candidat
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <AjoutCandidats />
        </CModalBody>
      </CModal>
    </div>
  )
}

export default ModalAjouCandidat
