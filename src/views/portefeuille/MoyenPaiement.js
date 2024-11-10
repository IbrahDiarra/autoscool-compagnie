import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { ChevronDownIcon } from 'primereact/icons/chevrondown'
import { ChevronRightIcon } from 'primereact/icons/chevronright'
import mtn from 'src/assets/images/img/momo.png'
import orange from 'src/assets/images/img/om.jpg'
import wave from 'src/assets/images/img/wave.png'
import moov from 'src/assets/images/img/moovm.png'

export default function OperatorSelector() {
  const [selectedOperator, setSelectedOperator] = useState(null)

  // List of operators with paths to images in your assets folder
  const operators = [
    { name: 'Orange Money', image: { orange }, fee: "1% Frais de l'opérateur" },
    { name: 'Wave', image: { wave }, fee: "1% Frais de l'opérateur" },
    { name: 'Moov Money', image: { moov }, fee: "1% Frais de l'opérateur" },
    { name: 'MTN MOMO', image: { mtn }, fee: "1% Frais de l'opérateur" },
  ]

  // Custom template for the selected operator shown in the dropdown input
  const selectedOperatorTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src={option.image}
            className="mr-2"
            style={{ width: '24px', height: '24px' }}
          />
          <div>{option.name}</div>
        </div>
      )
    }

    // eslint-disable-next-line react/prop-types
    return <span>{props.placeholder}</span>
  }

  // Custom template for each operator in the dropdown list
  const operatorOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src={option.image}
          className="mr-2"
          style={{ width: '24px', height: '24px' }}
        />
        <div>
          <div>{option.name}</div>
          <small style={{ color: '#888' }}>{option.fee}</small>
        </div>
      </div>
    )
  }

  // Optional footer to show the selected operator name
  const panelFooterTemplate = () => {
    return (
      <div className="py-2 px-3">
        {selectedOperator ? (
          <span>
            <b>{selectedOperator.name}</b> selected.
          </span>
        ) : (
          'No operator selected.'
        )}
      </div>
    )
  }

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedOperator}
        onChange={(e) => setSelectedOperator(e.value)}
        options={operators}
        optionLabel="name"
        placeholder="Sélectionner L’operateur"
        valueTemplate={selectedOperatorTemplate}
        itemTemplate={operatorOptionTemplate}
        className="w-full md:w-14rem"
        panelFooterTemplate={panelFooterTemplate}
        dropdownIcon={(opts) => {
          return opts.iconProps['data-pr-overlay-visible'] ? (
            <ChevronRightIcon {...opts.iconProps} />
          ) : (
            <ChevronDownIcon {...opts.iconProps} />
          )
        }}
      />
    </div>
  )
}
