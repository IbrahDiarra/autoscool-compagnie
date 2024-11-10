import avatar1 from 'src/assets/images/img/autoroute.png'
import email from 'src/assets/images/img/gmail.png'
import pwd from 'src/assets/images/img/padlock.png'
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifCi } from '@coreui/icons'

const Gerant = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${avatar1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-auto m-5" style={{ maxWidth: '600px' }}>
              <CCardBody className="p-5">
                <CForm>
                  <div className="text-center">
                    <h1 className="text-primary">AUTOSCOOL</h1>
                    <p className="text-body-secondary mt-3">Bonjour et bienvenue sur Autoscool</p>
                    <p className="text-body-secondary">
                      Une autre manière d&apos;enseigner les codes de la route
                    </p>
                  </div>

                  <h5 className="text-center mt-4 mb-4">Information du gérant</h5>

                  {/* Dénomination et Slogan */}
                  <CRow>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CFormInput placeholder="Nom" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CFormInput placeholder="Prénom" />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  {/* Pays, Ville, Localisation */}

                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Nature de la carte" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Numéro de la carte" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <img src={email} alt="Padlock" width="20" height="20" />
                    </CInputGroupText>
                    <CFormInput placeholder="Entrez votre Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <img src={pwd} alt="Padlock" width="20" height="20" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Créez un mot de passe"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
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
                    <CButton color="primary" className="mb-3">
                      S&apos;inscrire
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Gerant
