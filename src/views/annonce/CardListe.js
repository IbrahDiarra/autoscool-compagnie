import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { CCard, CCardBody, CCardHeader, CButton, CCol, CRow } from '@coreui/react'
import CardAnnonceDetail from './CardAnnonceDetail'
import CardAffichage from './CardAffichage'
import CardAffichage2 from './CardAffichage2'

const CardListe = ({ titre, details }) => {
  const [selectedItem, setSelectedItem] = useState(details[0] || { affichage: [] })

  const handleItemClick = (item) => {
    setSelectedItem(item) // Mettre à jour l'élément sélectionné au clic
  }
  const isSelected = (item) => {
    return selectedItem && selectedItem.date === item.date
  }

  return (
    <div>
      <CRow>
        <CCol xs={12} md={7} xl={7}>
          <CCard className="mb-4" style={{ height: '85vh' }}>
            <CCardHeader>
              <div className="d-flex justify-content-between text-nowrap">
                <div
                  style={{ color: 'var(--grey)', fontSize: '11px', textTransform: 'uppercase' }}
                  className="fw-semibold"
                >
                  {titre}
                </div>
              </div>
            </CCardHeader>
            <CCardBody>
              {details && details.length > 0 ? (
                details.map((item, index) => (
                  <CardAnnonceDetail
                    key={`date_${index}`}
                    titre={item.title}
                    date={item.date}
                    nombre={item.nombre}
                    onClick={() => handleItemClick(item)}
                    isSelected={isSelected(item)}
                  />
                ))
              ) : (
                <div>Aucune donnée disponible</div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={5} xl={5}>
          {selectedItem ? (
            <CardAffichage
              date={selectedItem.date}
              name={selectedItem.name}
              localisation={selectedItem.localisation}
              contact={selectedItem.contact}
              nombre={selectedItem.nombre}
              affiche={selectedItem.affichage}
            />
          ) : (
            <CardAffichage2 />
          )}
        </CCol>
      </CRow>
    </div>
  )
}

CardListe.propTypes = {
  titre: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardListe
