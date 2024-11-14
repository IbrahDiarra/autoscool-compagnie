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
import ModalPaiement from './ModalPaiement'

const ModalAjoutFond = () => {
  const [selectedOperator, setSelectedOperator] = useState(null)
  const [paymentVisible, setPaymentVisible] = useState(false)
  const [step, setStep] = useState(1) // 1 = Formulaire, 2 = Confirmation
  const operators = [
    { name: 'Orange Money', imgSrc: orange, fee: "1% de frais de l'opérateur", code: '#144*82#' },
    {
      name: 'Wave',
      imgSrc: wave,
      fee: "1% de frais de l'opérateur",
      code: "l'application wave",
    },
    {
      name: 'Moov Africa Money',
      imgSrc: moov,
      fee: "1% de frais de l'opérateur",
      code: '#144*82#',
    },
    { name: 'MTN MOMO', imgSrc: mtn, fee: "1% de frais de l'opérateur", code: '*133#' },
  ]

  const [visible, setVisible] = useState(false)
  const [operator, setOperator] = useState('')
  const [montant, setMontant] = useState('')
  const [telephone, setTelephone] = useState('')
  const [error, setError] = useState('')

  const handleValidate = () => {
    if (!selectedOperator || !montant || !telephone) {
      setError("L'opérateur, le montant et le numéro sont obligatoires.")
    } else {
      setError('')
      setStep(2) // Passer à la vue de confirmation
    }
  }
  const handlePaymentClick = () => {
    setVisible(false)
    setPaymentVisible(true)
  }

  return (
    <>
      <CButton
        style={{
          border: '1px solid #fff',
          color: '#fff',
          backgroundColor: 'var(--btnajout)',
        }}
        className="mt-5 mb-5"
        onClick={() => setVisible(!visible)}
      >
        <img src={plus} alt="Ajouter un logo" width="15" height="15" className="me-2" />
        Ajouter des fonds
      </CButton>
      <CModal size="lg" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{step === 1 ? 'Ajout des fonds' : 'Confirmation'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {step === 1 ? (
            <>
              {error && (
                <div className="text-center" style={{ color: 'red', marginBottom: '15px' }}>
                  {error}
                </div>
              )}
              <div>
                <CRow className="mb-5 mt-5">
                  <CCol xs={12} md={6}>
                    <CInputGroup
                      className="mb-3"
                      style={{
                        borderRadius: '8px',
                        boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                      }}
                    >
                      <CInputGroupText
                        style={{
                          backgroundColor: '#0056FF',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px',
                        }}
                      >
                        <img src={solde} alt="Ville" width="20" height="20" />
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
                        placeholder="entrez le montant"
                        min={0}
                        value={montant}
                        onChange={(e) => setMontant(e.target.value)}
                        required
                      />
                      <CInputGroupText style={{ padding: '10px' }}>FCFA</CInputGroupText>
                    </CInputGroup>
                  </CCol>
                </CRow>

                <CRow className="mt-5">
                  <CCol xs={12} md={6}>
                    <CDropdown className="mb-3 text-start" style={{ width: '100%' }}>
                      <CDropdownToggle
                        color="light"
                        className="d-flex justify-content-between align-items-center"
                        style={{ padding: selectedOperator ? '5px' : '10px' }}
                      >
                        <div className="d-flex align-items-center">
                          {selectedOperator ? (
                            <>
                              <img
                                src={selectedOperator.imgSrc}
                                alt={selectedOperator.name}
                                style={{
                                  width: '30px',
                                  height: '30px',
                                  borderRadius: '40%',
                                  marginRight: '10px',
                                }}
                              />
                              <div>
                                <div
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: '11px',
                                    textAlign: 'left',
                                  }}
                                >
                                  {selectedOperator.name}
                                </div>
                                <div
                                  style={{
                                    fontSize: '10px',
                                    color: '#6b6969dd',
                                    textAlign: 'left',
                                  }}
                                >
                                  {selectedOperator.fee}
                                </div>
                              </div>
                            </>
                          ) : (
                            'Sélectionner L’operateur'
                          )}
                        </div>
                      </CDropdownToggle>

                      <CDropdownMenu className="m-0">
                        {operators.map((operator) => (
                          <CDropdownItem
                            className="mb-2"
                            key={operator.name}
                            onClick={() => setSelectedOperator(operator)}
                          >
                            <div
                              className="d-flex p-2"
                              style={{ backgroundColor: '#e2f6fe', borderRadius: '10px' }}
                            >
                              <img
                                src={operator.imgSrc}
                                alt={operator.name}
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '40%',
                                  marginRight: '10px',
                                }}
                              />
                              <div>
                                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
                                  {operator.name}
                                </div>
                                <div style={{ fontSize: '12px', color: '#6b6969dd' }}>
                                  {operator.fee}
                                </div>
                              </div>
                            </div>
                          </CDropdownItem>
                        ))}
                      </CDropdownMenu>
                    </CDropdown>
                  </CCol>
                  <CCol xs={12} md={6}>
                    <CInputGroup>
                      <CInputGroupText style={{ padding: '10px' }}>
                        <CIcon icon={cifCi} />
                        <span className="ms-2">225</span>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Entrez les 10 chiffres"
                        type="number"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        min={0}
                        style={{ padding: '10px' }}
                        required
                      />
                    </CInputGroup>
                  </CCol>
                </CRow>
              </div>
              <div className="d-grid mt-5 ms-5 me-5">
                <CButton color="warning" className="mt-5 ms-5 me-5" onClick={handleValidate}>
                  VALIDER
                </CButton>
              </div>
            </>
          ) : (
            // Vue Confirmation
            <div className="text-center mt-5">
              <CRow>
                <CCol md={12} lg={2} xl={2}></CCol>
                <CCol md={12} lg={8} xl={8}>
                  <div
                    className="d-flex align-items-center mb-3"
                    style={{
                      background: '#edf8fe',
                      padding: '10px',
                      borderRadius: '8px',
                    }}
                  >
                    <div className="d-flex align-items-center flex-grow-1">
                      <img
                        src={selectedOperator.imgSrc}
                        alt={selectedOperator.name}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '40%',
                          marginRight: '10px',
                        }}
                      />
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '13px' }}>
                          {selectedOperator.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#6b6969dd' }}>
                          {selectedOperator.fee}
                        </div>
                        <div style={{ fontSize: '12px', color: '#333' }}>{telephone}</div>
                      </div>
                    </div>

                    {/* Score et Icône */}
                    <div className="d-flex align-items-center flex-column">
                      <div style={{ fontWeight: 'bold' }}>{montant} FCFA</div>
                      <div style={{ fontSize: '13px', color: '#333' }}>Montant à debité</div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      Pour confirmer la transaction tape{' '}
                      <strong className="text-primary" style={{ cursor: 'pointer' }}>
                        {selectedOperator.code}
                      </strong>
                    </div>
                    <div>pour générer un code temporaire</div>
                  </div>
                </CCol>
                <CCol md={12} lg={2} xl={2}></CCol>
              </CRow>
              <CRow>
                <CCol md={12} lg={3} xl={3}></CCol>
                <CCol md={12} lg={6} xl={6}>
                  <CInputGroup className="mb-3 mt-5">
                    <CFormInput
                      className="text-center"
                      placeholder="Saisir le code temporaire ici"
                      type="number"
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={12} lg={3} xl={3}></CCol>
              </CRow>
              <CRow>
                <CCol md={12} lg={3} xl={3}></CCol>
                <CCol md={12} lg={6} xl={6}>
                  <div className="d-grid mt-5 ms-5 me-5">
                    <CButton color="warning" onClick={handlePaymentClick}>
                      Régler maintenant
                    </CButton>
                  </div>
                </CCol>
                <CCol md={12} lg={3} xl={3}></CCol>
              </CRow>
            </div>
          )}
        </CModalBody>
      </CModal>
      {paymentVisible && (
        <ModalPaiement visible={paymentVisible} onClose={() => setPaymentVisible(false)} />
      )}
    </>
  )
}

export default ModalAjoutFond
