import React from 'react'
import printer from 'src/assets/images/img/printer.png'
import PropTypes from 'prop-types'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'

const DetailsAbonnement = ({ name, time, montant, status, couleur }) => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader className="pt-3 pb-3">
          <div className="d-flex justify-content-between text-nowrap">
            <div className="fw-semibold">Détails de transaction</div>
            <div className="ms-3">
              <img src={printer} alt="Ajouter un logo" width="20" height="20" />
            </div>
          </div>
        </CCardHeader>
        <CCardBody>
          <CCard
            style={{
              marginTop: '-15px',
              borderRadius: '0px',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              boxShadow:
                'inset 3px 3px 4px 3px rgba(255,255,255,0.3), inset -3px -3px 4px 3px rgba(0,0,0,0.1)',
            }}
          >
            <CCardHeader
              className="text-center"
              style={{
                backgroundColor: '#0077C0',
                color: '#fff',
                borderRadius: '0px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
            >
              <div>ABONNEMENT</div>
              <div>{name}</div>
            </CCardHeader>
            <CCardBody>
              <div className="mb-4">
                <div>Status</div>
                <div style={{ color: couleur }}>{status}</div>
              </div>
              <div className="mb-4">
                <div>Montant</div>
                <div>{montant} FR</div>
              </div>
              <div className="mb-4">
                <div>Solde après transaction</div>
                <div>35000 FR</div>
              </div>
              <div className="mb-4">
                <div>Date et heure</div>
                <div>{time}</div>
              </div>
              <div className="mb-4">
                <div>References</div>
                <div>THDKK2561DJJM</div>
              </div>
            </CCardBody>
          </CCard>
          <div
            className="d-grid mt-5"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CButton color="primary">Payer</CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

DetailsAbonnement.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  montant: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default DetailsAbonnement
