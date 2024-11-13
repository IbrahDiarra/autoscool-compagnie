import React, { useState } from 'react' // Ajoutez useState ici

import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'
import CandidatComposant from './CandidatComposant'
import CardUser from './CardUser'
import CardTrier from './CardTrier'

const LesCandidats = () => {
  const candidatData = [
    {
      status: 'En cours',
      nom: 'Kouame',
      info: {
        prenom: 'Michael',
        sexe: 'Masculin',
        ville: 'Yamoussoukro',
        telephone: '0759028545',
        Email: 'mrkouamemichael@gmail.com',
        naturep: 'CNI',
        numerop: 'CI 0028724537',
        typepermis: 'AB',
        capacite: 'Analphabet',
        groupe: 'Janvier A1',
        dateinscription: '10/01/2024',
      },
    },
    {
      status: 'En cours',
      nom: 'Britanian',
      info: {
        prenom: 'Cetou',
        sexe: 'Feminin',
        ville: 'Daloa',
        telephone: '0759028545',
        Email: 'cetoubritanian@gmail.com',
        naturep: 'CNI',
        numerop: 'CI 0036896542',
        typepermis: 'ABC',
        capacite: 'Analphabet',
        groupe: 'Fevrier A1',
        dateinscription: '11/04/2024',
      },
    },
    {
      status: 'Termine',
      nom: 'Uzumaki',
      info: {
        prenom: 'Naruto',
        sexe: 'Masculin',
        ville: 'Konoha',
        telephone: '0759028545',
        Email: 'uzumakinaruto@gmail.com',
        naturep: 'Passport',
        numerop: 'CI 0184689423',
        typepermis: 'A',
        capacite: 'Puissant',
        groupe: 'Fevrier A2',
        dateinscription: '04/11/2024',
      },
    },
  ]

  const [activeKey, setActiveKey] = useState('Encours')
  const [selectedItem, setSelectedItem] = useState(candidatData[0])
  const activeStyle = {
    color: '#064dda',
    fontWeight: 'bold',
    width: '33.3%',
    backgroundColor: '#e0f7fa',
  }

  const inactiveStyle = {
    color: '#1f1f20',
    width: '33.3%',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  const handleItemClick = (item) => {
    setSelectedItem(item) // Mettre à jour l'élément sélectionné au clic
  }
  const isSelected = (item) => {
    return selectedItem && selectedItem.info.numerop === item.info.numerop
  }

  return (
    <CRow>
      <CCol xs={12} md={4} xl={4}>
        <CTabs activeItemKey={activeKey} onTabChange={handleTabChange} className="mb-4">
          <CCard style={{ backgroundColor: '#fff', borderTop: 'none' }}>
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
                  itemKey="Encours"
                  style={activeKey === 'Encours' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Encours')}
                >
                  En cours
                </CTab>
                <CTab
                  itemKey="Terminé"
                  style={activeKey === 'Terminé' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Terminé')}
                >
                  Terminé
                </CTab>
                <CTab
                  itemKey="Trier"
                  style={activeKey === 'Trier' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Trier')}
                >
                  Trier
                </CTab>
              </CTabList>
            </CCardHeader>
            <CCardBody className="bg-light">
              <CTabContent>
                <CTabPanel className="p-3" itemKey="Encours">
                  {candidatData
                    .filter((item) => item.status === 'En cours')
                    .map((user, index) => (
                      <CardUser
                        key={index}
                        nom={user.nom}
                        onClick={() => handleItemClick(user)}
                        isSelected={isSelected(user)}
                      />
                    ))}
                </CTabPanel>
                <CTabPanel className="p-3" itemKey="Terminé">
                  {candidatData
                    .filter((item) => item.status === 'Termine')
                    .map((user, index) => (
                      <CardUser
                        key={index}
                        nom={user.nom}
                        onClick={() => handleItemClick(user)}
                        isSelected={isSelected(user)}
                      />
                    ))}
                </CTabPanel>
                <CTabPanel className="p-3" itemKey="Trier">
                  <CardTrier />
                </CTabPanel>
              </CTabContent>
            </CCardBody>
          </CCard>
        </CTabs>
      </CCol>
      <CCol xs={12} md={8} xl={8}>
        <CandidatComposant nom={selectedItem.nom} candidat={selectedItem.info} />
      </CCol>
    </CRow>
  )
}

export default LesCandidats
