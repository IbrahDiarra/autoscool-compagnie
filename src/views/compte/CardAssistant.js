import React from 'react'

import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import limage from 'src/assets/images/img/Image27.png'
import menu from 'src/assets/images/img/menu1.png'
import profil from 'src/assets/images/img/profile3.png'
import assistante from 'src/assets/images/img/assistante.png'
import ModalAjoutAssistant from './ModalAjoutAssistant'

const CardAssistant = ({}) => {
  return (
    <div>
      <CCard className="mb-4" style={{ height: '85vh' }}>
        <CCardHeader>
          <div
            className="d-flex justify-content-between text-nowrap"
            style={{ color: 'var(--grey)' }}
          >
            <div className="fw-semibold">Assistant</div>
            <img src={menu} width="20" height="20" />
          </div>
        </CCardHeader>
        <CCardBody className="d-flex justify-content-between flex-column">
          <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                border: '2px solid var(--grey)',
              }}
            >
              <img src={assistante} width="50" height="50" />
            </div>
            <div>Aucun assistant enregistrer</div>
          </div>

          <div className="d-grid ms-5 me-5">
            <ModalAjoutAssistant />
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default CardAssistant
