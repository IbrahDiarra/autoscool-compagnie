import React from 'react'
import printer from 'src/assets/images/img/printer.png'
import orangeMomo from 'src/assets/images/img/om.jpg'
import PropTypes from 'prop-types'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'

const DetailsAjoutFond = ({ compagnie, date, montant, status, image }) => {
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
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
              className="text-center pt-3 pb-3"
              style={{
                backgroundColor: 'var(--vert1)',
                color: '#fff',
                borderRadius: '0px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
            >
              <div>AJOUT DE FONDS</div>
            </CCardHeader>
            <CCardBody>
              <div className="text-center text-warning">{compagnie}</div>
              <div className="mb-2">
                <strong>Status</strong>
                <div>Effectué</div>
              </div>
              <div className="mb-2 d-flex justify-content-between">
                <div>
                  <strong>Compagnie</strong>
                  <div>{compagnie}</div>
                </div>
                <div>
                  <img
                    src={image}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                    }}
                  />
                </div>
              </div>
              <div className="mb-2">
                <strong>Montant</strong>
                <div>{montant} FR</div>
              </div>
              <div className="mb-2">
                <strong>Solde après transaction</strong>
                <div>50.000 FR</div>
              </div>
              <div className="mb-2">
                <strong>Date et heure</strong>
                <div>{date}</div>
              </div>
              <div>
                <strong>References</strong>
                <div>THDKK2561DJJM</div>
              </div>
            </CCardBody>
          </CCard>
          <div
            className="d-grid me-1 mt-2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              justifyContent: 'end',
            }}
          >
            <CButton variant="outline" color="primary">
              Télecharger
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

DetailsAjoutFond.propTypes = {
  compagnie: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  montant: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default DetailsAjoutFond
