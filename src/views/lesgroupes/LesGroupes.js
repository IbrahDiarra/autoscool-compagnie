import React, { useState } from 'react' // Ajoutez useState ici

import { CCol, CRow, CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'
import CardGroupe from './CardGroupe'
import CardMembre from './CardMembre'
import ModalCreationGroupe from './ModalCreationGroupe'

const LesGroupes = () => {
  const groupeData = [
    {
      groupeId: 'g1',
      groupe: 'GROUP A',
      nombre: '2',
      date: '11 JAN 2024',
      membres: [
        {
          nom: 'Michael Kouame',
          niveau: 'Visite medicale reussi',
          typepermis: 'AB',
          groupe: 'Janvier A1',
          dateinscription: '10/01/2024',
          status: 'En ligne',
        },
        {
          nom: 'Idriss Cisse',
          niveau: 'Inscription reussi',
          typepermis: 'ABC',
          groupe: 'Fevrier A1',
          dateinscription: '05/04/2024',
          status: '',
        },
      ],
    },
    {
      groupeId: 'g2',
      groupe: 'GROUP B',
      nombre: '3',
      date: '11 JAN 2024',
      membres: [
        {
          nom: 'Michael Kouame',
          niveau: 'Visite medicale reussi',
          typepermis: 'AB',
          groupe: 'Janvier A1',
          dateinscription: '10/01/2024',
          status: 'En ligne',
        },
        {
          nom: 'Idriss Cisse',
          niveau: 'Inscription reussi',
          typepermis: 'ABC',
          groupe: 'Fevrier A1',
          dateinscription: '05/04/2024',
          status: '',
        },
      ],
    },
  ]
  const [selectedItem, setSelectedItem] = useState(groupeData[0])
  const handleItemClick = (item) => {
    setSelectedItem(item) // Mettre à jour l'élément sélectionné au clic
  }
  const isSelected = (item) => {
    return selectedItem && selectedItem.groupeId === item.groupeId
  }
  return (
    <CRow>
      <CCol xs={12} md={4} xl={4}>
        <CCard className="mb-4" style={{ height: '85vh' }}>
          <CCardHeader className="pt-3 pb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="fw-semibold">LES GROUPES</div>
              <div className="ms-3">
                <ModalCreationGroupe />
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            {groupeData.map((groupe, index) => (
              <CardGroupe
                key={index}
                groupe={groupe.groupe}
                nombre={groupe.nombre}
                date={groupe.date}
                onClick={() => handleItemClick(groupe)}
                isSelected={isSelected(groupe)}
              />
            ))}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={8} xl={8}>
        <CCard className="mb-4" style={{ height: '85vh' }}>
          <CCardHeader className="pt-3 pb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="fw-semibold">Membres</div>
              <div className="d-flex justify-content-between">
                <CButton className="me-3" variant="outline" color="secondary">
                  Ajouter
                </CButton>
                <CButton variant="outline" color="secondary">
                  Modifier
                </CButton>
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            {selectedItem.membres.map((membre, index) => (
              <CardMembre key={index} membre={membre} />
            ))}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default LesGroupes
