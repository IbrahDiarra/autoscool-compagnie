import React from 'react'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import menu from 'src/assets/images/img/menu1.png'
import ecrire from 'src/assets/images/img/ecrire.png'
import profil from 'src/assets/images/img/profile3.png'
import CardInfoEntreprise from './CardInfoEntreprise'

const CardEntreprise = ({}) => {
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
        <CCardHeader>
          <div
            className="d-flex justify-content-between text-nowrap"
            style={{ color: 'var(--grey)' }}
          >
            <div className="fw-semibold">Entreprise</div>
            <img src={menu} width="20" height="20" />
          </div>
        </CCardHeader>
        <CCardBody>
          <CardInfoEntreprise />
          <div className="mb-4"></div>
          <div style={{ color: 'var(--grey)', marginBottom: '-5rem' }} className="fw-semibold p-2">
            Description
          </div>
          <div
            className="mt-5 flex-column  d-flex align-items-center justify-content-center"
            style={{
              width: '100%',
              height: '40%',
              backgroundColor: '#fff',
              borderRadius: '8px',
              borderRight: '2px solid var(--grey3)',
              borderBottom: '2px solid var(--grey3)',
              borderLeft: '2px solid var(--grey3)',
            }}
          >
            <div className="text-center">
              <img src={ecrire} width="20" height="20" />
              <div>Décrivez votre entreprise à vos candidats et à vos futures clients</div>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default CardEntreprise
