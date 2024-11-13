import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import PropTypes from 'prop-types'
import './ButtomSheet.css'
import niveau1 from 'src/assets/images/imge/Image5.png'
import niveau2 from 'src/assets/images/imge/Image6.png'
import niveau3 from 'src/assets/images/imge/Image7.png'
import niveau4 from 'src/assets/images/imge/Image8.png'
import niveau5 from 'src/assets/images/imge/Image9.png'
import ok1 from 'src/assets/images/imge/Image10.png'
import ok2 from 'src/assets/images/imge/Image12.png'
import CardNiveauSelect from './CardNiveauSelect'
import fermer from 'src/assets/images/imge/Image11.png'
const BottomSheet = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  return (
    <div
      className="bottom-sheet-animation"
      style={{
        position: 'absolute',
        bottom: '32px',
        left: '0',
        right: '0',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'hsl(0, 17%, 94%)',
      }}
    >
      <CButton color="light" className="mb-2" onClick={onClose} style={{ padding: '5px' }}>
        <img src={fermer} alt="Close" style={{ width: '20px', height: '20px' }} />
      </CButton>
      <CardNiveauSelect
        imgniveau={niveau1}
        imgcorrect={ok1}
        niveau="Inscription reussi"
        soustitre="22 JAN 2023 10:15"
        couleur="#949494"
        backcouleur="#fff"
      />
      <CardNiveauSelect
        imgniveau={niveau2}
        imgcorrect={ok1}
        niveau="Visite medical reussi"
        soustitre="11 FEV 2024 08:29"
        couleur="#949494"
        backcouleur="#fff"
      />
      <CardNiveauSelect
        imgniveau={niveau3}
        imgcorrect={ok2}
        niveau="Examen Blanc"
        soustitre="Code de la route"
        couleur="red"
        backcouleur="#fea1f0"
      />
      <CardNiveauSelect
        imgniveau={niveau4}
        imgcorrect={ok2}
        niveau="Examen Blanc"
        soustitre="Conduite"
        couleur="white"
        backcouleur="hsl(212, 100%, 54%)"
      />
      <CardNiveauSelect
        imgniveau={niveau5}
        imgcorrect={ok2}
        niveau="Obtention"
        soustitre="Du permis de conduit"
        couleur="white"
        backcouleur="hsl(156, 94%, 44%)"
      />
    </div>
  )
}
BottomSheet.propTypes = {
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
}

const NiveauChanger = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)

  return (
    <div className="d-grid" style={{ position: 'relative' }}>
      <CButton color="warning" onClick={() => setIsBottomSheetVisible(true)}>
        Changer de niveau
      </CButton>
      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
      />
    </div>
  )
}

export default NiveauChanger
