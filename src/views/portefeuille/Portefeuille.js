import React, { useState } from 'react'

import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'
import CardAbonnement from './CardAbonnement'
import DetailsAjoutFond from './DetailsAjoutFond'
import ModalAjoutFond from './ModalAjoutFond'
import DetailsAbonnement from './DetailsAbonnement'
import CardDetails from './CardDetails'
import mtn from 'src/assets/images/img/momo.png'
import orange from 'src/assets/images/img/om.jpg'
import wave from 'src/assets/images/img/wave.png'
import moov from 'src/assets/images/img/moovm.png'

const Portfeuille = () => {
  const transactionsData = [
    {
      type: 'ABONNEMENT',
      name: 'Mickael Kouame',
      time: 'Effectué il y a 15 min',
      montant: '2500',
      status: 'en attente de paiement',
      couleur: 'red',
      couleur1: 'var(--blue5)',
      couleur2: 'var(--blue5)',
    },
    {
      type: 'AJOUT DE FONDS',
      time: 'Ajouté le 08 Avril 2023 14:10',
      montant: '25.000',
      couleur1: 'var(--vert1)',
      couleur2: 'var(--vert1)',
      imgSrc: wave,
      compagnie: 'Wave',
      date: '08/04/2023 14:10',
    },
    {
      type: 'ABONNEMENT',
      name: 'Mickael Kouame',
      time: 'Effectué il y a 16 min',
      montant: '2500',
      status: 'Payé',
      couleur: 'green',
      couleur1: 'var(--blue5)',
      couleur2: 'var(--blue5)',
    },
    {
      type: 'AJOUT DE FONDS',
      time: 'Ajouté le 10 Jan 2022 10:10',
      montant: '50.000',
      couleur1: 'var(--vert1)',
      couleur2: 'var(--vert1)',
      imgSrc: orange,
      compagnie: 'Orange',
      date: '18/05/2022 18:10',
    },
  ]
  const [activeKey, setActiveKey] = useState('Transactions')
  const [selectedItem, setSelectedItem] = useState(null)
  const activeStyle = {
    color: 'var(--blue5)',
    fontWeight: 'bold',
  }

  const inactiveStyle = {
    color: '#fff',
  }
  const handleTabChange = (key) => {
    setActiveKey(key)
    setSelectedItem(null)
  }

  const handleItemClick = (item) => {
    setSelectedItem(item) // Mettre à jour l'élément sélectionné au clic
  }
  const isSelected = (item) => {
    return selectedItem && selectedItem.name === item.name && selectedItem.time === item.time
  }

  return (
    <CRow>
      <CCol xs={12} md={8} xl={8}>
        <CTabs activeItemKey={activeKey} onTabChange={handleTabChange} className="mb-4">
          <CCard className="bg-light">
            <CCardHeader style={{ backgroundColor: 'var(--blue5)', color: '#fff' }}>
              <div className="d-flex align-items-center justify-content-between text-nowrap">
                <div className="mb-4 mt-4">
                  <div>Fond Total</div>
                  <span style={{ fontWeight: 'bold', fontSize: '40px' }}>
                    35 000 <span style={{ fontWeight: 'bold', fontSize: '15px' }}>FCFA</span>
                  </span>
                </div>
                <div>
                  <ModalAjoutFond />
                </div>
              </div>
              <CTabList
                variant="tabs"
                className="d-flex align-items-center justify-content-between text-nowrap"
                style={{
                  fontWeight: 'bold',
                  borderBottom: 'none',
                  marginBottom: '-7px',
                }}
              >
                <CTab
                  itemKey="Transactions"
                  style={activeKey === 'Transactions' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Transactions')}
                >
                  Transactions
                </CTab>
                <CTab
                  itemKey="Abonnements"
                  style={activeKey === 'Abonnements' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Abonnements')}
                >
                  Abonnements
                </CTab>
                <CTab
                  itemKey="Fond ajoutés"
                  style={activeKey === 'Fond ajoutés' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('Fond ajoutés')}
                >
                  Fond ajoutés
                </CTab>
              </CTabList>
            </CCardHeader>
            <CTabContent style={{ backgroundColor: 'var(--backcard1)' }}>
              <CTabPanel className="p-3" itemKey="Transactions">
                {transactionsData.map((transaction, index) => (
                  <CardAbonnement
                    key={index}
                    type={transaction.type}
                    name={transaction.name}
                    time={transaction.time}
                    montant={transaction.montant}
                    status={transaction.status}
                    couleur={transaction.couleur}
                    couleur1={transaction.couleur1}
                    couleur2={transaction.couleur2}
                    onClick={() => handleItemClick(transaction)}
                    isSelected={isSelected(transaction)}
                  />
                ))}
              </CTabPanel>
              <CTabPanel className="p-3" itemKey="Abonnements">
                {transactionsData
                  .filter((item) => item.type === 'ABONNEMENT')
                  .map((transaction, index) => (
                    <CardAbonnement
                      key={index}
                      type={transaction.type}
                      name={transaction.name}
                      time={transaction.time}
                      montant={transaction.montant}
                      status={transaction.status}
                      couleur={transaction.couleur}
                      couleur1={transaction.couleur1}
                      couleur2={transaction.couleur2}
                      onClick={() => handleItemClick(transaction)}
                      isSelected={isSelected(transaction)}
                    />
                  ))}
              </CTabPanel>
              <CTabPanel className="p-3" itemKey="Fond ajoutés">
                {transactionsData
                  .filter((item) => item.type === 'AJOUT DE FONDS')
                  .map((transaction, index) => (
                    <CardAbonnement
                      key={index}
                      type={transaction.type}
                      name={transaction.name}
                      time={transaction.time}
                      montant={transaction.montant}
                      status={transaction.status}
                      couleur={transaction.couleur}
                      couleur1={transaction.couleur1}
                      couleur2={transaction.couleur2}
                      onClick={() => handleItemClick(transaction)}
                      isSelected={isSelected(transaction)}
                    />
                  ))}
              </CTabPanel>
            </CTabContent>
          </CCard>
        </CTabs>
      </CCol>
      <CCol xs={12} md={4} xl={4}>
        {selectedItem ? (
          selectedItem.type === 'AJOUT DE FONDS' ? (
            <DetailsAjoutFond
              compagnie={selectedItem.compagnie}
              date={selectedItem.date}
              montant={selectedItem.montant}
              image={selectedItem.imgSrc}
            />
          ) : (
            <DetailsAbonnement
              name={selectedItem.name}
              time={selectedItem.time}
              montant={selectedItem.montant}
              status={selectedItem.status}
              couleur={selectedItem.couleur}
            />
          )
        ) : (
          <CardDetails />
        )}
      </CCol>
    </CRow>
  )
}

export default Portfeuille
