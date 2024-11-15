import React from 'react'
import { CRow, CCol } from '@coreui/react'
import PropTypes from 'prop-types'
import logo from 'src/assets/images/img/autoschool.png'

const DataRow = ({ value, label }) => (
  <div
    className="d-flex justify-content-between align-items-center mb-1"
    style={{ backgroundColor: 'var(--backcard1)', padding: '4px', borderRadius: '7px' }}
  >
    <div>{label}</div>
    <div>{value}</div>
  </div>
)

DataRow.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

const CardInfoEntreprise = ({}) => {
  const data = [
    { label: 'Denomination', value: 'On prouve' },
    { label: 'Slogan', value: 'Notre mission vous satisfait' },
    { label: 'Pays', value: "Cote d'Ivoire" },
    { label: 'Ville', value: 'Yamoussoukro' },
    { label: 'Maps', value: 'Voir' },
    { label: 'Telephone', value: '+225 0101010101' },
    { label: 'Whatsapp', value: '+225 0101010101' },
  ]
  return (
    <div>
      <div className="div1">
        <CRow>
          <CCol md={4} xl={4}>
            <div
              className="p-2 d-flex align-items-center justify-content-center"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: '8px',
                borderRight: '2px solid var(--grey3)',
                borderBottom: '2px solid var(--grey3)',
                borderLeft: '2px solid var(--grey3)',
              }}
            >
              <img src={logo} style={{ marginBottom: '-20px', width: '100%' }} />
            </div>
          </CCol>
          <CCol md={8} xl={8}>
            {data.map((item, index) => (
              <DataRow key={index} label={item.label} value={item.value} />
            ))}
          </CCol>
        </CRow>
      </div>
    </div>
  )
}
export default CardInfoEntreprise
