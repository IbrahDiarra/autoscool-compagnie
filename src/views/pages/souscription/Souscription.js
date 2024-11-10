import React from 'react'
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifCi, cilChevronRight } from '@coreui/icons'

// Exemple d'import d'image pour les icônes
import avatar1 from 'src/assets/images/img/autoroute.png' // Image de fond

const Souscription = () => {
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
            <div className="text-center mt-4 text-white">
              <h1>AJOUTER UN CANDIDAT</h1>
            </div>
            <CCard className="mx-auto m-5" style={{ maxWidth: '600px' }}>
              <CCardHeader>
                <div className="d-flex justify-content-between text-nowrap">
                  <div style={{ fontWeight: 'bold', fontSize: '16px', color: 'blue' }}>
                    Identité et coordonnées <CIcon icon={cilChevronRight} />
                  </div>
                  <div>Souscription</div>
                  <div>Paiement</div>
                </div>
              </CCardHeader>
              <CCardBody className="p-4">
                <CForm>
                  {/* Nom */}
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Entrez le nom" />
                  </CInputGroup>

                  {/* Prénom */}
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Entrez le prénom" />
                  </CInputGroup>

                  {/* Sexe */}
                  <CInputGroup className="mb-3">
                    <CFormSelect>
                      <option>Sélectionnez le sexe</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </CFormSelect>
                  </CInputGroup>

                  {/* Ville */}
                  <CInputGroup className="mb-3">
                    <CFormSelect>
                      <option>Sélectionnez la ville</option>
                      <option value="Abidjan">Abidjan</option>
                      <option value="Yamoussoukro">Yamoussoukro</option>
                      <option value="Bouaké">Bouaké</option>
                    </CFormSelect>
                  </CInputGroup>

                  {/* Téléphone */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cifCi} />
                      <span className="ms-2">225</span>
                    </CInputGroupText>
                    <CFormInput placeholder="Entrez les 10 chiffres" />
                  </CInputGroup>

                  {/* Email */}
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Entrez l'email (Facultatif)" />
                  </CInputGroup>

                  {/* Nature de la pièce */}
                  <CInputGroup className="mb-3">
                    <CFormSelect>
                      <option>Sélectionnez la nature de la pièce</option>
                      <option value="CNI">Carte Nationale d&apos;Identité</option>
                      <option value="Passeport">Passeport</option>
                      <option value="Permis">Permis de Conduire</option>
                    </CFormSelect>
                  </CInputGroup>

                  {/* Numéro de la pièce */}
                  <CInputGroup className="mb-5">
                    <CFormInput placeholder="Entrez le numéro de la pièce" />
                  </CInputGroup>

                  {/* Bouton Enregistrer */}
                  <div className="d-grid mt-5">
                    <CButton color="warning">Enregistrer</CButton>
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

export default Souscription
