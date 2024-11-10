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
  CFormCheck,
} from '@coreui/react'

const Register = () => {
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
            <CCard className="mx-auto" style={{ maxWidth: '500px' }}>
              <CCardBody className="p-5">
                <CForm>
                  <div className="text-center">
                    <h1 className="text-center text-primary">Auto Scool</h1>
                    <div className="text-body-secondary mt-5">
                      Bonjour et bienvenue sur Autoscool
                    </div>
                    <div className="text-body-secondary mt-0">
                      Une autre manière d&apos;enseigner les codes de la route
                    </div>
                  </div>

                  <CInputGroup className="mb-3 mt-5">
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
                      placeholder="Tapez votre mot de passe"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-flex justify-content-between mb-3">
                    <CFormCheck label="Se souvenir de moi" />
                    <a href="#" className="text-primary" style={{ textDecoration: 'none' }}>
                      Mot de passe oublié
                    </a>
                  </div>

                  <div className="d-grid mt-5">
                    <CButton color="primary" className="mb-3">
                      S&apos;identifier
                    </CButton>
                  </div>

                  <div className="text-center">
                    <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>
                      S&apos;inscrire
                    </a>
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

export default Register
