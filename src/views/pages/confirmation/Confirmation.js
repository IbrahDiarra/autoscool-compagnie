import React from 'react'
import avatar1 from 'src/assets/images/img/autoroute.png'
import padlock from 'src/assets/images/img/padlock.png'
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

const Confirmation = () => {
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
            <CCard className="mx-auto" style={{ maxWidth: '400px' }}>
              <CCardBody className="p-5">
                <CForm>
                  <div className="text-center">
                    <img src={padlock} alt="Lock Icon" width="50" height="50" />
                    <h3 className="mt-4 mb-4">Confirmation du compte</h3>
                    <p className="text-muted mt-4">
                      Saisissez le code de vérification qui vous a été envoyé par mail sur
                    </p>
                    <p className="text-primary">mrmichaelkouame@gmail.com</p>
                  </div>

                  {/* Input for the verification code */}
                  <CInputGroup className="mb-4 justify-content-center">
                    <CFormInput
                      type="text"
                      placeholder="— —      — —      — —      — —      — —"
                      className="text-center"
                      style={{ maxWidth: '200px' }}
                    />
                  </CInputGroup>

                  <div className="d-flex justify-content-between mb-3">
                    <a href="#" className="text-primary" style={{ textDecoration: 'none' }}>
                      Renvoyer le code
                    </a>
                    <a href="#" className="text-primary" style={{ textDecoration: 'none' }}>
                      Modifier le E-mail
                    </a>
                  </div>

                  <div className="d-grid mt-4">
                    <CButton color="primary" size="lg">
                      Confirmer
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

export default Confirmation
