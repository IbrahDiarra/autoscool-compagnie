import React, { useState } from 'react'
import Select from 'react-select'
import { CInputGroup, CInputGroupText } from '@coreui/react'
import '/node_modules/flag-icons/css/flag-icons.min.css'

// Liste des pays avec leurs codes et noms
const countries = [
  { code: 'ci', label: "Côte d'Ivoire" },
  { code: 'ml', label: 'Mali' },
  { code: 'bf', label: 'Burkina Faso' },
  { code: 'sn', label: 'Senegal' },
  // Ajoutez d'autres pays ici
]

// Composant personnalisé pour afficher le drapeau à côté du nom du pays
const customOption = (props) => {
  const { data, innerRef, innerProps } = props
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ display: 'flex', alignItems: 'center', padding: '8px' }}
    >
      <span className={`fi fi-${data.code}`} style={{ marginRight: '8px' }} /> {data.label}
    </div>
  )
}

// Composant principal
const CountrySelect = () => {
  // Initialisation de l'état avec la Côte d'Ivoire par défaut
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption)
  }

  return (
    <CInputGroup className="mb-3">
      <div style={{ flex: 1 }}>
        <Select
          options={countries}
          components={{ Option: customOption }}
          placeholder={null} // Ne rien afficher pour le placeholder
          formatOptionLabel={(country) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className={`fi fi-${country.code}`} style={{ marginRight: '8px' }} />
              {country.label}
            </div>
          )}
          isSearchable
          onChange={handleChange} // Mettre à jour l'état du pays sélectionné
          value={selectedCountry} // Afficher la sélection actuelle
        />
      </div>
    </CInputGroup>
  )
}

export default CountrySelect
