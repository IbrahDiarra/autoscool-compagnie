import React from 'react'
import { CRow, CCol } from '@coreui/react'
import PropTypes from 'prop-types'
import whatsapp from 'src/assets/images/img/sociale.png'
import instagram from 'src/assets/images/img/instagram.png'
import facebook from 'src/assets/images/img/facebook.png'
import sms from 'src/assets/images/img/sms.png'
import autre from 'src/assets/images/img/menu.png'

const PartageCardRow = ({ img, value, name }) => (
  <div
    className="d-flex justify-content-between align-items-center mb-1"
    style={{ backgroundColor: 'var(--backcard1)', padding: '6px', borderRadius: '7px' }}
  >
    <div className="d-flex align-items-center">
      <img className="me-1" src={img} style={{ width: '18px', height: '18px' }} />
      <div>{name}</div>
    </div>
    <div>{value}</div>
  </div>
)

PartageCardRow.propTypes = {
  img: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const CardPartage = ({}) => {
  const partageData = [
    { img: whatsapp, value: 8, name: 'Whatsapp' },
    { img: facebook, value: 5, name: 'Facebook' },
    { img: instagram, value: 3, name: 'Instagram' },
    { img: sms, value: 7, name: 'Sms' },
    { img: autre, value: 0, name: 'Autre' },
  ]
  return (
    <div>
      <div className="div1">
        <CRow>
          <CCol md={3} xl={3}>
            <div
              className="text-center p-2 d-flex flex-column align-item-center justify-content-center"
              style={{
                width: '100%',
                height: '100%',
                boxShadow: '-5px -4px 10px #fff',
                backgroundColor: 'var(--backcard1)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontSize: '25px', fontWeight: 'bold' }}>
                <span style={{ color: 'orange' }}>23</span>
              </div>
              <div style={{ color: 'var(--primary)' }}>Partages</div>
            </div>
          </CCol>
          <CCol md={9} xl={9}>
            {partageData.map((data, index) => (
              <PartageCardRow key={index} img={data.img} value={data.value} name={data.name} />
            ))}
          </CCol>
        </CRow>
      </div>
    </div>
  )
}
export default CardPartage
