import React, { useState } from 'react'
import profil from 'src/assets/images/img/profile4.png'
import coinIcon from 'src/assets/images/img/coin.png'
import profileImage1 from 'src/assets/images/img/profile1.png'
import profileImage2 from 'src/assets/images/img/profile2.png'
import profileImage3 from 'src/assets/images/img/profile3.png'
import profileImage4 from 'src/assets/images/img/profile4.png'
import profileImage5 from 'src/assets/images/img/profile5.png'
import profileImage6 from 'src/assets/images/img/profile6.png'

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
  CButton,
} from '@coreui/react'
import CardGroupe from '../lesgroupes/CardGroupe'
import ClassementCard from './ClassementCard'

const Classement = () => {
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

  const [activeKey, setActiveKey] = useState('ClassementGroupe')
  const [selectedItem, setSelectedItem] = useState(groupeData[0])
  const activeStyle = {
    color: '#064dda',
    fontWeight: 'bold',
    width: '50%',
    backgroundColor: '#e0f7fa',
    fontSize: '11px',
  }

  const inactiveStyle = {
    color: '#1f1f20',
    width: '50%',
    fontSize: '11px',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  const handleItemClick = (item) => {
    setSelectedItem(item) // Mettre à jour l'élément sélectionné au clic
  }
  const isSelected = (item) => {
    return selectedItem && selectedItem.groupeId === item.groupeId
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
                  itemKey="ClassementGroupe"
                  style={activeKey === 'ClassementGroupe' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('ClassementGroupe')}
                >
                  Classement par groupe
                </CTab>
                <CTab
                  itemKey="General"
                  style={activeKey === 'General' ? activeStyle : inactiveStyle}
                  onClick={() => handleTabChange('General')}
                >
                  General
                </CTab>
              </CTabList>
            </CCardHeader>
            <CCardBody style={{ backgroundColor: 'var(--backcard2)' }}>
              <CTabContent>
                <CTabPanel className="p-3" itemKey="ClassementGroupe">
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
                </CTabPanel>
                <CTabPanel className="p-3" itemKey="General">
                  General
                </CTabPanel>
              </CTabContent>
            </CCardBody>
          </CCard>
        </CTabs>
      </CCol>
      <CCol xs={12} md={8} xl={8}>
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: 'var(--blue2)', color: '#fff' }}>
            <div>GROUP A</div>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="d-flex align-items-center">
                <img
                  src={profil}
                  alt="Profil"
                  style={{
                    width: '80px',
                    height: '80px',
                    marginRight: '10px',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>YAO JENNY</div>
                  <div className="text-warning" style={{ fontSize: '18px' }}>
                    850 Points {''} <span style={{ fontSize: '10px', color: '#fff' }}>N°4</span>
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 'bold' }}>En 82 heures</div>
                </div>
              </div>
            </div>
          </CCardHeader>
          <CCardBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--blue3)',
            }}
          >
            <ClassementCard
              rank="1"
              image={profileImage1}
              name="Michael Kouame"
              time="En 3 jours"
              score="1271"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <ClassementCard
              rank="2"
              image={profileImage2}
              name="Cissé Idriss"
              time="En 3 jours"
              score="1171"
              coinIcon={coinIcon}
              taille="95%"
            />
            <ClassementCard
              rank="3"
              image={profileImage3}
              name="Cissé Idriss"
              time="En 3 jours"
              score="1050"
              coinIcon={coinIcon}
              taille="90%"
            />
            <ClassementCard
              rank="4"
              image={profileImage4}
              name="Yao Jenny"
              time="En 3 jours"
              score="850"
              coinIcon={coinIcon}
              taille="100%"
            />
            <ClassementCard
              rank="5"
              image={profileImage5}
              name="Cissé Idriss"
              time="En 3 jours"
              score="630"
              coinIcon={coinIcon}
              taille="100%"
            />
            <ClassementCard
              rank="6"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              taille="100%"
            />
            <ClassementCard
              rank="7"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              taille="100%"
            />
            <ClassementCard
              rank="8"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              taille="100%"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Classement
