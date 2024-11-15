import React, { useState } from 'react' // Ajoutez useState ici

import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'
import CardListe from './CardListe'
import CardAnnonce from './CardAnnonce'
import CardAffichage from './CardAffichage'
import CardCreation from './CardCreation'

const Annonce = () => {
  const annonceData = [
    {
      titre: 'Liste visite medicale',
      details: [
        {
          title: 'Visite medicale',
          name: 'Kouame Mickael',
          date: '17 JANVIER A 10:10',
          nombre: '13',
          localisation: '220 logement carrefour bar vert',
          contact: '07 59 02 85 45',
          affichage: [
            {
              niveau: 'Visite medical reussi',
              time: '18 JAN 2024',
            },
            {
              niveau: 'Termine',
              time: '20 FEV 2024',
            },
          ],
        },
        {
          title: 'Visite medicale',
          name: 'Idriss Cisse',
          date: '20 MARS A 08:14',
          nombre: '09',
          localisation: 'Place Jean Paul2',
          contact: '07 59 02 85 45',
          affichage: [
            {
              niveau: 'Visite medical reussi',
              time: '18 JAN 2024',
            },
            {
              niveau: 'Termine',
              time: '20 FEV 2024',
            },
          ],
        },
      ],
    },
    {
      titre: 'Examen Blan Code de la route',
      details: [
        {
          title: 'Examen Blan Code de la route',
          name: 'Naruto Uzumaki',
          date: '17 JANVIER A 10:10',
          nombre: '13',
          localisation: 'Konoha',
          contact: '07 59 02 85 45',
          affichage: [
            {
              niveau: 'Visite medical reussi',
              time: '18 JAN 2024',
            },
            {
              niveau: 'Termine',
              time: '20 FEV 2024',
            },
          ],
        },
        {
          title: 'Examen Blan Code de la route',
          name: 'Cetou',
          date: '20 MARS A 08:14',
          nombre: '09',
          localisation: 'Britanian',
          contact: '07 59 02 85 45',
          affichage: [
            {
              niveau: 'Visite medical reussi',
              time: '18 JAN 2024',
            },
            {
              niveau: 'Termine',
              time: '20 FEV 2024',
            },
          ],
        },
      ],
    },
    {
      titre: 'Examen Blan Conduite',
      details: [
        {
          title: 'Examen Blan Conduite',
          name: 'Kouame Mickael',
          date: '17 JANVIER A 10:10',
          nombre: '13',
          localisation: '220 logement carrefour bar vert',
          contact: '07 59 02 85 45',
          affichage: [
            {
              niveau: 'Visite medical reussi',
              time: '18 JAN 2024',
            },
            {
              niveau: 'Termine',
              time: '20 FEV 2024',
            },
          ],
        },
        {
          title: 'Examen Blan Conduite',
          name: 'Idriss Cisse',
          date: '20 MARS A 08:14',
          nombre: '09',
          localisation: 'Place Jean Paul2',
          contact: '07 59 02 85 45',
          affichage: [
            {
              niveau: 'Visite medical reussi',
              time: '18 JAN 2024',
            },
            {
              niveau: 'Termine',
              time: '20 FEV 2024',
            },
          ],
        },
      ],
    },
    { titre: 'Récupération du permis' },
    { titre: 'Recyclage' },
    { titre: "Fil d'actualité" },
  ]
  const [activeKey, setActiveKey] = useState('Annonces')
  const [selectedItem, setSelectedItem] = useState(annonceData[0])
  const activeStyle = {
    color: 'var(--blue1)',
    fontWeight: 'bold',
    width: '50%',
    backgroundColor: 'var(--select1)',
  }

  const inactiveStyle = {
    color: 'var(--grey)',
    width: '50%',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  const handleItemClick = (item) => {
    setSelectedItem(item) // Mettre à jour l'élément sélectionné au clic
  }
  const isSelected = (item) => {
    return selectedItem && selectedItem.titre === item.titre
  }

  return (
    <CRow>
      <CCol xs={12} md={3} xl={3}>
        <CTabs activeItemKey={activeKey} onTabChange={handleTabChange} className="mb-4">
          <CCard style={{ backgroundColor: '#fff', borderTop: 'none', height: '85vh' }}>
            <CCardHeader style={{ backgroundColor: '#fff', borderTop: 'none' }}>
              <CTabList
                variant="tabs"
                className="d-flex align-items-center justify-content-start"
                style={{
                  fontWeight: 'bold',
                  borderBottom: '2px solid #ccc',
                  marginBottom: '-7px',
                  marginLeft: '-14px',
                  marginRight: '-14px',
                  marginTop: '-7px',
                }}
              >
                <CTab
                  itemKey="Annonces"
                  style={activeKey === 'Annonces' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Annonces')}
                >
                  Annonces
                </CTab>
                <CTab
                  itemKey="Creer"
                  style={activeKey === 'Creer' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Creer')}
                >
                  Creer
                </CTab>
              </CTabList>
            </CCardHeader>
            <CTabContent>
              <CTabPanel className="p-3" itemKey="Annonces">
                {annonceData.map((items, index) => (
                  <CardAnnonce
                    key={index}
                    titre={items.titre}
                    onClick={() => handleItemClick(items)}
                    isSelected={isSelected(items)}
                  />
                ))}
              </CTabPanel>
              <CTabPanel className="p-3" itemKey="Creer">
                {annonceData.map((items, index) => (
                  <CardAnnonce
                    key={index}
                    titre={items.titre}
                    onClick={() => handleItemClick(items)}
                    isSelected={isSelected(items)}
                  />
                ))}
              </CTabPanel>
            </CTabContent>
          </CCard>
        </CTabs>
      </CCol>
      <CCol xs={12} md={9} xl={9}>
        {activeKey === 'Annonces' ? (
          <CardListe titre={selectedItem.titre} details={selectedItem.details || []} />
        ) : (
          <CardCreation />
        )}
      </CCol>
    </CRow>
  )
}

export default Annonce
