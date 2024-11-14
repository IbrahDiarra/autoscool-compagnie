import React from 'react'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import profil from 'src/assets/images/img/profile3.png'

const CardAffichage2 = ({}) => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <div className="d-flex justify-content-between text-nowrap">
            <div className="fw-semibold">Affichage</div>
            <div className="fw-semibold">date</div>
          </div>
        </CCardHeader>
        <CCardBody>
          <div className="text-center">
            <img
              src={limage}
              alt="Ajouter un logo"
              width="60"
              height="60"
              style={{ marginBottom: '-20px' }}
            />
            <div
              className="text-center p-3 pt-4"
              style={{
                backgroundColor: 'var(--backcard4)',
                borderRadius: '12px',
                color: 'var(--grey1)',
              }}
            >
              <div style={{ textAlign: 'center', alignItems: 'center' }}>
                <div className="text-center">Visite medicale</div>
                Bonjour <strong>...</strong> votre visite medicale est prevu pour le{' '}
                <strong>...</strong> a ... du cote de <strong>...</strong>{' '}
              </div>
              <div className="mt-5">Contact ...</div>
            </div>
          </div>
          <CCard
            className="mt-5"
            style={{
              boxShadow:
                'inset 3px 3px 4px 3px rgba(255,255,255,0.3), inset -3px -3px 4px 3px rgba(0,0,0,0.1)',
            }}
          >
            <CCardHeader style={{ backgroundColor: 'var(--select1)' }}>
              <div className="d-flex justify-content-between text-nowrap">
                <div className="fw-semibold">Destinataire</div>
                <div className="fw-semibold">00</div>
              </div>
            </CCardHeader>
            <CCardBody className="bg-light">
              <div
                className="d-flex align-items-center justify-content-between mb-3"
                style={{
                  padding: '5px',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={profil}
                    alt="Profil"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '10px' }}>Michael Kouame</div>
                    <div style={{ fontSize: '8px' }}>Inscrit 18 JAN 2024 14:50</div>
                  </div>
                </div>

                <div className="d-flex align-items-center  flex-column" style={{ fontSize: '9px' }}>
                  <span>Niveau actuel</span>
                  <spam style={{ fontWeight: 'bold' }}>Visite medicale reussi</spam>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default CardAffichage2
