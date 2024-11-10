import avatar1 from 'src/assets/images/img/autoroute.png'
import logo from 'src/assets/images/img/logo.png' // Remplace par ton image de logo
import telephone from 'src/assets/images/img/telephone.png' // Remplace par ton icône de téléphone
import whatsapp from 'src/assets/images/img/whatsapp.png' // Remplace par ton icône de WhatsApp
import localisation from 'src/assets/images/img/location.png' // Remplace par ton icône de localisation
import ville from 'src/assets/images/img/ville.png' // Remplace par ton icône de ville
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
import CountrySelect from './inputpays'

const Entreprise = () => {
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
                    <div className="text-body-secondary mt-3">
                      Bonjour et bienvenue sur Autoscool
                    </div>
                    <div className="text-body-secondary">
                      Une autre manière d&apos;enseigner les codes de la route
                    </div>
                  </div>

                  <h5 className="text-center mt-4 mb-4">Information de l&apos;entreprise</h5>

                  {/* Logo de l'entreprise */}
                  <div className="text-center mb-4">
                    <CButton
                      color="light"
                      variant="outline"
                      className="p-3"
                      style={{
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <img src={logo} alt="Ajouter un logo" width="40" height="40" />
                      <p className="ms-2 text-dark">Ajouter un logo</p>
                    </CButton>
                  </div>

                  {/* Dénomination et Slogan */}
                  <CRow>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CFormInput placeholder="Dénomination" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CFormInput placeholder="Slogan" />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  {/* Pays, Ville, Localisation */}
                  <CountrySelect />
                  <CRow>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <img src={ville} alt="Ville" width="20" height="20" />
                        </CInputGroupText>
                        <CFormInput placeholder="Ville" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <img src={localisation} alt="Localisation" width="20" height="20" />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Localisation"
                          style={{ cursor: 'pointer' }}
                          onClick={() => window.open('https://www.google.com/maps', '_blank')}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  {/* Téléphone et WhatsApp */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <img src={telephone} alt="Téléphone" width="20" height="20" />
                    </CInputGroupText>
                    <CFormInput placeholder="Téléphone" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <img src={whatsapp} alt="WhatsApp" width="20" height="20" />
                    </CInputGroupText>
                    <CFormInput placeholder="WhatsApp" />
                  </CInputGroup>

                  {/* Bouton Enregistrer */}
                  <div className="d-grid">
                    <CButton color="primary" className="mb-3">
                      Enregistrer
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

export default Entreprise
