import React from 'react'
import PropTypes from 'prop-types'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import CardAffichageDetail from './CardAffichageDetail'

const CardAffichage = ({ date, name, localisation, contact, nombre, affiche }) => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <div className="d-flex justify-content-between text-nowrap">
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
              style={{ backgroundColor: '#cde5fd', borderRadius: '12px' }}
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
              boxShadow:
                'inset 3px 3px 4px 3px rgba(255,255,255,0.3), inset -3px -3px 4px 3px rgba(0,0,0,0.1)',
            }}
          >
            <CCardHeader style={{ backgroundColor: '#b9dbfd' }}>
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