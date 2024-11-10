import React from 'react'
import RankingItem from './RankItem'
import PostCard from './ActuCard'

// Importe les images nécessaires
import coinIcon from 'src/assets/images/img/coin.png'
import profileImage1 from 'src/assets/images/img/profile1.png'
import profileImage2 from 'src/assets/images/img/profile2.png'
import profileImage3 from 'src/assets/images/img/profile3.png'
import profileImage4 from 'src/assets/images/img/profile4.png'
import profileImage5 from 'src/assets/images/img/profile5.png'
import profileImage6 from 'src/assets/images/img/profile6.png'
import ActuImage1 from 'src/assets/images/img/actu1.png'
import ActuImage2 from 'src/assets/images/img/actu2.png'

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'

import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  return (
    <CRow>
      <CCol xs={12} md={8} xl={8}>
        <WidgetsDropdown className="mb-4" />
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#007bff' }}>
            <div className="d-flex justify-content-between text-nowrap">
              <div
                className="fw-semibold"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}
              >
                Classement
              </div>
            </div>
          </CCardHeader>
          <CCardBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#57b5f8',
            }}
          >
            <RankingItem
              rank="1"
              image={profileImage1}
              name="Cissé Idriss"
              time="En 3 jours"
              score="1271"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <RankingItem
              rank="2"
              image={profileImage2}
              name="Cissé Idriss"
              time="En 3 jours"
              score="1171"
              coinIcon={coinIcon}
              gradient
              taille="95%"
            />
            <RankingItem
              rank="3"
              image={profileImage3}
              name="Cissé Idriss"
              time="En 3 jours"
              score="1050"
              coinIcon={coinIcon}
              gradient
              taille="90%"
            />
            <RankingItem
              rank="4"
              image={profileImage4}
              name="Cissé Idriss"
              time="En 3 jours"
              score="850"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <RankingItem
              rank="5"
              image={profileImage5}
              name="Cissé Idriss"
              time="En 3 jours"
              score="630"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <RankingItem
              rank="6"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <RankingItem
              rank="6"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <RankingItem
              rank="6"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
            <RankingItem
              rank="6"
              image={profileImage6}
              name="Cissé Idriss"
              time="En 3 jours"
              score="450"
              coinIcon={coinIcon}
              gradient
              taille="100%"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={4} xl={4}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className="d-flex justify-content-between text-nowrap">
              <div className="fw-semibold">Fil d&apos;actualité</div>
              <div className="ms-3">
                <CIcon size="xl" icon={cilSearch} />
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            <PostCard
              title="ON PROUVE"
              location="Abidjan"
              date="05 Jan 2023 10:01"
              annonce="Super Promos"
              content="il se nomme Cissé Idriss il est recherché par la police nationale..."
              phoneNumber="07 59028545"
              likes={162}
              dislikes={33}
              profileImage={profileImage6}
              mainImage={ActuImage1}
            />
            <PostCard
              title="Auto ecole"
              location="Yamoussoukro"
              date="05 Jan 2023 10:01"
              annonce="Nouvelle lors"
              content="il se nomme Cissé Idriss il est recherché par la police nationale..."
              phoneNumber="07 59028545"
              likes={162}
              dislikes={33}
              profileImage={profileImage6}
              mainImage={ActuImage2}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
