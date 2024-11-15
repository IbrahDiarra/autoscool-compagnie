import React from 'react'
import PropTypes from 'prop-types'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import CardAffichageDetail from './CardAffichageDetail'

const CardAffichage = ({ date, name, localisation, contact, nombre, affiche }) => {
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
        <CCardHeader>
          <div
            style={{ color: 'var(--grey)', fontSize: '11px' }}
            className="d-flex justify-content-between text-nowrap"
          >
            <div className="fw-semibold">Affichage</div>
            <div className="fw-semibold">{date}</div>
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
              <div style={{ textAlign: 'initial' }}>
                Bonjour <strong>{name}</strong> votre visite medicale est prevu pour le{' '}
                <strong>{date}</strong> du cote de <strong>{localisation}</strong>{' '}
              </div>
              <div className="mt-5">Contact {contact}</div>
            </div>
          </div>
          <CCard
            className="mt-5"
            style={{
              color: 'var(--grey1)',
              boxShadow:
                'inset 3px 3px 4px 3px rgba(255,255,255,0.3), inset -3px -3px 4px 3px rgba(0,0,0,0.1)',
            }}
          >
            <CCardHeader style={{ backgroundColor: 'var(--select1)' }}>
              <div className="d-flex justify-content-between text-nowrap">
                <div className="fw-semibold">Destinataire</div>
                <div className="fw-semibold">{nombre}</div>
              </div>
            </CCardHeader>
            <CCardBody className="bg-light">
              {affiche && affiche.length > 0 ? (
                affiche.map((item, index) => (
                  <CardAffichageDetail
                    key={`time_${index}`}
                    date={item.time}
                    nom={name}
                    niveau={item.niveau}
                  />
                ))
              ) : (
                <div>Aucune donnée disponible</div>
              )}
            </CCardBody>
          </CCard>
        </CCardBody>
      </CCard>
    </div>
  )
}

CardAffichage.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  affiche: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardAffichage
