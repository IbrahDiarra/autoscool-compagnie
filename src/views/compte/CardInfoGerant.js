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

const CardInfoGerant = ({}) => {
  const data = [
    { label: 'Nom', value: 'Kouame' },
    { label: 'Prenom', value: 'Michael' },
    { label: 'Nature de la carte', value: "Carte nationale d'indentité" },
    { label: 'Numéro de la carte', value: 'CI 0002673DC54' },
    { label: 'E-mail de connexion', value: 'monemail@gmail.com' },
  ]
  return (
    <div>
      <div className="div1">
        <CRow>
          <CCol>
            {data.map((item, index) => (
              <DataRow key={index} label={item.label} value={item.value} />
            ))}
          </CCol>
        </CRow>
      </div>
    </div>
  )
}
export default CardInfoGerant
