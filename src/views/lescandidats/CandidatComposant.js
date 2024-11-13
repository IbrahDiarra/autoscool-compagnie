import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardFooter,
  CTab,
  CTabList,
  CTabs,
} from '@coreui/react'
import NiveauComposant from './NiveauComposant'
import profile from 'src/assets/images/img/profile1.png'
import PerformenceComposant from './PerformenceComposant'

const CandidatComposant = ({ nom, candidat }) => {
  const userInfo = [
    { label: 'Sexe', value: candidat.sexe },
    { label: 'Ville', value: candidat.ville },
    { label: 'Telephone', value: candidat.telephone },
    { label: 'E-mail', value: candidat.Email },
    { label: 'Nature Pièce', value: candidat.naturep },
    { label: 'N° De la Pièce', value: candidat.numerop },
  ]
  const [activeKey, setActiveKey] = useState('Niveau')
  const activeStyle = {
    color: '#fff',
    fontWeight: 'bold',
    width: '50%',
    backgroundColor: '#0077C0',
    border: '1px solid #ccc',
  }

  const inactiveStyle = {
    color: '#1f1f20',
    width: '50%',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
  }
  return (
    <div>
      <CRow>
        {/* userinfo */}
        <CCol xs={12} md={7} xl={7}>
          <CCard className="mb-4 bg-light">
            <CCardHeader
              className="text-center"
              style={{
                borderRadius: '0px',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
                backgroundColor: '#fbdafe',
              }}
            >
              <div className="p-4 text-center">
                <img
                  className="mb-1"
                  src={profile}
                  alt="Profil"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '1px solid #e80ffc',
                    marginTop: '-1rem',
                  }}
                />
              </div>
            </CCardHeader>
            <CCardBody className="bg-light">
              <div
                className=""
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                  marginTop: '-3rem',
                }}
              >
                <>
                  <CRow className="mb-1">
                    <CCol xs={12} md={4}>
                      Nom
                    </CCol>
                    <CCol xs={12} md={8}>
                      {nom}
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} md={4}>
                      Prénoms
                    </CCol>
                    <CCol xs={12} md={8}>
                      {candidat.prenom}
                    </CCol>
                  </CRow>
                </>
              </div>

              <div
                className="mt-2"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                }}
              >
                {userInfo.map((item, index) => (
                  <CRow className="mb-1" key={index}>
                    <CCol xs={12} md={4}>
                      {item.label}
                    </CCol>
                    <CCol xs={12} md={8}>
                      {item.value}
                    </CCol>
                  </CRow>
                ))}
              </div>

              <div
                className="mt-2"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                }}
              >
                <CRow className="mb-1">
                  <CCol xs={12} md={4}>
                    Type de permis
                  </CCol>
                  <CCol xs={12} md={8}>
                    {candidat.typepermis}
                  </CCol>
                </CRow>
                <CRow className="mb-1">
                  <CCol xs={12} md={4}>
                    Capacité
                  </CCol>
                  <CCol xs={12} md={8}>
                    {candidat.capacite}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} md={4}>
                    Groupe
                  </CCol>
                  <CCol xs={12} md={8}>
                    {candidat.groupe}
                  </CCol>
                </CRow>
              </div>
              <div className="text-center mt-2 fw-semibold">
                Inscrit le {candidat.dateinscription}
              </div>
            </CCardBody>
            <CCardFooter style={{ borderTop: 'none' }}>
              <CTabs activeItemKey={activeKey} onTabChange={handleTabChange}>
                <CTabList
                  variant="tabs"
                  className="d-flex align-items-center justify-content-start"
                  style={{
                    fontWeight: 'bold',
                    marginBottom: '-7px',
                    marginLeft: '-14px',
                    marginRight: '-14px',
                    marginTop: '-7px',
                  }}
                >
                  <CTab
                    itemKey="Niveau"
                    style={activeKey === 'Niveau' ? activeStyle : inactiveStyle}
                    onClick={() => handleTabChange('Niveau')}
                  >
                    Niveau
                  </CTab>
                  <CTab
                    itemKey="Performence"
                    style={activeKey === 'Performence' ? activeStyle : inactiveStyle}
                    onClick={() => handleTabChange('Performence')}
                  >
                    Performence
                  </CTab>
                </CTabList>
              </CTabs>
            </CCardFooter>
          </CCard>
        </CCol>
        {/* Le niveau */}
        <CCol xs={12} md={5} xl={5}>
          {activeKey === 'Niveau' && (
            <div>
              <NiveauComposant />
            </div>
          )}
          {activeKey === 'Performence' && (
            <div>
              <PerformenceComposant />
            </div>
          )}
        </CCol>
      </CRow>
    </div>
  )
}
CandidatComposant.propTypes = {
  nom: PropTypes.string.isRequired,
  candidat: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CandidatComposant
