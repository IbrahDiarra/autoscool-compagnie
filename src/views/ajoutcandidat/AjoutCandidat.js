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
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifCi, cilChevronRight } from '@coreui/icons'
import success from 'src/assets/images/img/success.png'
import copy from 'src/assets/images/img/copy.png'
import share from 'src/assets/images/img/share.png'

// Exemple d'import d'image pour les icônes
import avatar1 from 'src/assets/images/img/autoroute.png' // Image de fond

const AjoutCandidat = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={11} lg={9} xl={8}>
            <CCard className="mx-auto mb-3">
              <CCardBody className="p-4">
                <CForm>
                  <CTabs activeItemKey="home">
                    <CCard style={{ height: '83vh' }}>
                      <CCardHeader>
                        <CTabList
                          variant="pills"
                          className="d-flex align-items-center justify-content-between text-nowrap"
                        >
                          <CTab itemKey="home">Identité et coordonnées</CTab>
                          <CIcon icon={cilChevronRight} />
                          <CTab itemKey="profile">Souscription</CTab>
                          <CIcon icon={cilChevronRight} />
                          <CTab itemKey="contact">Paiement</CTab>
                        </CTabList>
                      </CCardHeader>
                      <CCardBody>
                        <CTabContent>
                          <CTabPanel className="p-3" itemKey="home">
                            {/* Nom */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputNom" className="col-sm-4 col-form-label">
                                Nom
                              </CFormLabel>
                              <CCol sm={8}>
                                <CFormInput type="text" id="inputNom" placeholder="Entrez le nom" />
                              </CCol>
                            </CRow>

                            {/* Prénom */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputPrenom" className="col-sm-4 col-form-label">
                                Prenom
                              </CFormLabel>
                              <CCol sm={8}>
                                <CFormInput
                                  type="text"
                                  id="inputPrenom"
                                  placeholder="Entrez le prénom"
                                />
                              </CCol>
                            </CRow>

                            {/* Sexe */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputSexe" className="col-sm-4 col-form-label">
                                Sexe
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormSelect>
                                    <option>Sélectionnez le sexe</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                  </CFormSelect>
                                </CInputGroup>
                              </CCol>
                            </CRow>

                            {/* Ville */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputVille" className="col-sm-4 col-form-label">
                                Ville
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormSelect>
                                    <option>Sélectionnez la ville</option>
                                    <option value="Abidjan">Abidjan</option>
                                    <option value="Yamoussoukro">Yamoussoukro</option>
                                    <option value="Bouaké">Bouaké</option>
                                  </CFormSelect>
                                </CInputGroup>
                              </CCol>
                            </CRow>

                            {/* Téléphone */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputPhone" className="col-sm-4 col-form-label">
                                Téléphone
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CInputGroupText>
                                    <CIcon icon={cifCi} />
                                    <span className="ms-2">225</span>
                                  </CInputGroupText>
                                  <CFormInput
                                    placeholder="Entrez les 10 chiffres"
                                    type="number"
                                    min={0}
                                  />
                                </CInputGroup>
                              </CCol>
                            </CRow>

                            {/* Email */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputEmail" className="col-sm-4 col-form-label">
                                Email
                              </CFormLabel>
                              <CCol sm={8}>
                                <CFormInput
                                  type="email"
                                  id="inputEmail"
                                  placeholder="Entrez l'email (Facultatif)"
                                />
                              </CCol>
                            </CRow>

                            {/* Nature de la pièce */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputPiece" className="col-sm-4 col-form-label">
                                Nature de la pièce
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormSelect>
                                    <option>Sélectionnez la nature de la pièce</option>
                                    <option value="CNI">Carte Nationale d&apos;Identité</option>
                                    <option value="Passeport">Passeport</option>
                                    <option value="Permis">Permis de Conduire</option>
                                  </CFormSelect>
                                </CInputGroup>
                              </CCol>
                            </CRow>

                            {/* Numéro de la pièce */}
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputPhone" className="col-sm-4 col-form-label">
                                N° de la pièce
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormInput
                                    placeholder="Entrez le numéro de la pièce"
                                    type="text"
                                  />
                                </CInputGroup>
                              </CCol>
                            </CRow>
                          </CTabPanel>
                          <CTabPanel className="p-3" itemKey="profile">
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                                Type de permis
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormSelect>
                                    <option>Sélectionnez le type de permis</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                  </CFormSelect>
                                </CInputGroup>
                              </CCol>
                            </CRow>
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                                Capacité
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormSelect>
                                    <option>Sélectionnez la capacité</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                  </CFormSelect>
                                </CInputGroup>
                              </CCol>
                            </CRow>
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                                Groupe
                              </CFormLabel>
                              <CCol sm={8}>
                                <CInputGroup>
                                  <CFormSelect>
                                    <option>Sélectionnez le groupe</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                  </CFormSelect>
                                </CInputGroup>
                              </CCol>
                            </CRow>
                          </CTabPanel>
                          <CTabPanel className="p-3" itemKey="contact">
                            <div className="text-center">
                              <img src={success} alt="Lock Icon" width="100" height="100" />
                              <div>
                                Félicitation, Monsieur{' '}
                                <span style={{ color: 'green', fontWeight: 'bold' }}>
                                  Michael Kouame
                                </span>{' '}
                                a été succès
                              </div>
                              <div>Vous avez été débité de 2500 FCFA</div>
                              <div
                                className="d-flex align-items-center justify-content-between text-nowrap p-2 mt-5"
                                style={{
                                  border: '1px solid rgba(110, 108, 108, 0.2)',
                                  borderRadius: '10px',
                                }}
                              >
                                <span className="text-warning">
                                  Code de connexion a usage unique
                                </span>
                                <div>
                                  <img
                                    src={copy}
                                    alt="Copy Icon"
                                    width="20"
                                    height="20"
                                    className="me-2"
                                  />
                                  <img src={share} alt="Share Icon" width="20" height="20" />
                                </div>
                              </div>
                            </div>
                          </CTabPanel>
                        </CTabContent>
                      </CCardBody>
                    </CCard>
                  </CTabs>

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

export default AjoutCandidat
