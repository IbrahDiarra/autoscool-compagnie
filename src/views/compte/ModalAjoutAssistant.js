import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CForm,
} from '@coreui/react'
import email from 'src/assets/images/img/gmail.png'
import pwd from 'src/assets/images/img/padlock.png'

const ModalAjoutAssistant = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CButton
        style={{
          border: '1px solid #fff',
          color: '#fff',
          backgroundColor: 'var(--warning2)',
        }}
        className="mt-5 mb-5"
        onClick={() => setVisible(!visible)}
      >
        Ajouter un assistant
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Ajouter un assistant</CModalTitle>
        </CModalHeader>
        <CModalBody className="ps-5 pe-5">
          <CForm>
            <div className="text-center">
              <h4 className="text-primary">AUTOSCOOL</h4>
              <div className="text-body-secondary mt-3">
                Ajouter un assistant en remplissant ce formulaire
              </div>
            </div>

            <h6 className="mt-4 mb-3" style={{ fontWeight: 'bold' }}>
              Information du gérant
            </h6>

            {/* Dénomination et Slogan */}
            <CRow>
              <CCol xs={12} md={6}>
                <CInputGroup className="mb-2">
                  <CFormInput placeholder="Nom" />
                </CInputGroup>
              </CCol>
              <CCol xs={12} md={6}>
                <CInputGroup className="mb-2">
                  <CFormInput placeholder="Prénom" />
                </CInputGroup>
              </CCol>
            </CRow>

            {/* Pays, Ville, Localisation */}

            <CInputGroup className="mb-2">
              <CFormInput placeholder="Nature de la carte" />
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CFormInput placeholder="Numéro de la carte" />
            </CInputGroup>

            <CInputGroup className="mb-2">
              <CInputGroupText>
                <img src={email} alt="Padlock" width="20" height="20" />
              </CInputGroupText>
              <CFormInput placeholder="Entrez votre Email" autoComplete="email" />
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText>
                <img src={pwd} alt="Padlock" width="20" height="20" />
              </CInputGroupText>
              <CFormInput
                type="password"
                placeholder="Créez un mot de passe"
                autoComplete="new-password"
              />
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText>
                <img src={pwd} alt="Padlock" width="20" height="20" />
              </CInputGroupText>
              <CFormInput
                type="password"
                placeholder="Entrez a nouveau le mot de passe"
                autoComplete="new-password"
              />
            </CInputGroup>

            {/* Bouton Enregistrer */}
            <div className="d-grid mt-5">
              <CButton
                style={{ backgroundColor: 'var(--warning2)', color: '#fff' }}
                className="mb-2"
              >
                Enregistrer
              </CButton>
            </div>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default ModalAjoutAssistant
