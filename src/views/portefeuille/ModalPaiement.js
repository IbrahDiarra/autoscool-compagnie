import React from 'react'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'
import success from 'src/assets/images/img/success.png'
import PropTypes from 'prop-types'

const ModalPaiement = ({ visible, onClose }) => {
  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader>
        <CModalTitle>Paiement</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="text-center">
          <img src={success} alt="Lock Icon" width="100" height="100" />
          <div className="mt-2 mb-5" style={{ color: 'green', fontWeight: 'bold' }}>
            Paiement effectué
          </div>
          <div>Votre compte a été rechargé pour votre transaction</div>
          <div className="d-grid mt-5">
            <CButton color="primary" size="lg" onClick={onClose}>
              Ok
            </CButton>
          </div>
        </div>
      </CModalBody>
    </CModal>
  )
}

ModalPaiement.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalPaiement
