import React from 'react'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import menu from 'src/assets/images/img/menu1.png'
import profil from 'src/assets/images/img/profile3.png'

const CardCondition = ({}) => {
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
        <CCardHeader>
          <div
            className="d-flex justify-content-between text-nowrap"
            style={{ color: 'var(--grey)' }}
          >
            <div className="fw-semibold">Condition générale d&apos;utilisation</div>
            <img src={menu} width="20" height="20" />
          </div>
        </CCardHeader>
        <CCardBody>Bonsoir</CCardBody>
      </CCard>
    </div>
  )
}

export default CardCondition