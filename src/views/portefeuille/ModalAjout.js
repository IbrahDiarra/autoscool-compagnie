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
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cifCi } from '@coreui/icons'
import plus from 'src/assets/images/img/plus.png'
import solde from 'src/assets/images/img/solde2.png'
import mtn from 'src/assets/images/img/momo.png'
import orange from 'src/assets/images/img/om.jpg'
import wave from 'src/assets/images/img/wave.png'
import moov from 'src/assets/images/img/moovm.png'

const ModalAjoutFond = () => {
  const [selectedOperator, setSelectedOperator] = useState(null)
  const [step, setStep] = useState(1) // 1 = Formulaire, 2 = Confirmation
  const operators = [
    { name: 'Orange Money', imgSrc: orange, fee: "1% de frais de l'opérateur" },
    { name: 'Wave', imgSrc: wave, fee: "1% de frais de l'opérateur" },
    { name: 'Moov Africa Money', imgSrc: moov, fee: "1% de frais de l'opérateur" },
    { name: 'MTN MOMO', imgSrc: mtn, fee: "1% de frais de l'opérateur" },
  ]

  const [visible, setVisible] = useState(false)
  const [operator, setOperator] = useState('')
  const [montant, setMontant] = useState('')
  const [telephone, setTelephone] = useState('')

  const handleValidate = () => {
    setStep(2) // Passer à la vue de confirmation
  }

  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        <img src={plus} alt="Ajouter un logo" width="15" height="15" className="me-2" />
        Ajouter des fonds
      </CButton>
      <CModal size="lg" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{step === 1 ? 'Ajout des fonds' : 'Confirmation'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {step === 1 ? (
            // Vue Formulaire
            <div>
              <CRow className="mb-5 mt-5">
                <CCol xs={12} md={6}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText style={{ backgroundColor: '#0056FF', color: 'white' }}>
                      <img src={solde} alt="Solde" width="20" height="20" />
                    </CInputGroupText>
                    <div style={{ backgroundColor: '#e3f0fd', flex: 1, padding: '6px' }}>
                      <div style={{ fontWeight: 'bold', color: '#333', fontSize: '12px' }}>
                        SOLDES ACTUEL
                      </div>
                      <div style={{ color: '#007BFF', fontSize: '10px' }}>55 000 CFA</div>
                    </div>
                  </CInputGroup>
                </CCol>
                <CCol xs={12} md={6}>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="number"
                      placeholder="Entrez le montant"
                      min={0}
                      value={montant}
                      onChange={(e) => setMontant(e.target.value)}
                    />
                    <CInputGroupText>FCFA</CInputGroupText>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mt-5">
                <CCol xs={12} md={6}>
                  <CDropdown className="mb-3" style={{ width: '100%' }}>
                    <CDropdownToggle color="light">
                      {selectedOperator ? (
                        <>
                          <img
                            src={selectedOperator.imgSrc}
                            alt={selectedOperator.name}
                            style={{ width: '40px', height: '40px', marginRight: '10px' }}
                          />
                          {selectedOperator.name}
                        </>
                      ) : (
                        'Sélectionner L’operateur'
                      )}
                    </CDropdownToggle>
                    <CDropdownMenu>
                      {operators.map((operator) => (
                        <CDropdownItem
                          key={operator.name}
                          onClick={() => setSelectedOperator(operator)}
                        >
                          {operator.name}
                        </CDropdownItem>
                      ))}
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={12} md={6}>
                  <CInputGroup>
                    <CInputGroupText>
                      <CIcon icon={cifCi} />
                      <span className="ms-2">225</span>
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Entrez les 10 chiffres"
                      type="number"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CButton color="warning" className="mt-4" onClick={handleValidate}>
                VALIDER
              </CButton>
            </div>
          ) : (
            // Vue Confirmation
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <img
                  src={selectedOperator.imgSrc}
                  alt={selectedOperator.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 'bold' }}>{selectedOperator.name}</div>
                  <div style={{ fontSize: '12px', color: '#6b6969dd' }}>{selectedOperator.fee}</div>
                  <div style={{ fontSize: '14px', color: '#333' }}>{montant} CFA</div>
                </div>
              </div>
              <p>
                Pour confirmer la transaction tape <strong>#144*82#</strong> pour générer un code
                temporaire
              </p>
              <CFormInput placeholder="Saisir le code temporaire ici" />
              <CButton color="warning" className="mt-4">
                Régler maintenant
              </CButton>
            </div>
          )}
        </CModalBody>
      </CModal>
    </>
  )
}

export default ModalAjoutFond
