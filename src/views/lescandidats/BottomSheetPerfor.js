import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import PropTypes from 'prop-types'
import './ButtomSheet.css'
import coinIcon from 'src/assets/images/img/coin.png'
import profileImage1 from 'src/assets/images/img/profile1.png'
import profileImage2 from 'src/assets/images/img/profile2.png'
import profileImage3 from 'src/assets/images/img/profile3.png'
import profileImage4 from 'src/assets/images/img/profile4.png'
import profileImage5 from 'src/assets/images/img/profile5.png'
import profileImage6 from 'src/assets/images/img/profile6.png'
import fermer from 'src/assets/images/imge/Image11.png'
import CardClassement from './CardClassement'
import './ButtomSheet.css'
import CardUserClassement from './CardUserClassement'

const BottomSheetPerformence = ({ isVisible, onClose }) => {
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
        backgroundColor: 'var(--blue3)',
      }}
    >
      <CButton className="mb-2 mt-5" onClick={onClose} style={{ padding: '5px' }}>
        <img src={fermer} alt="Close" style={{ width: '20px', height: '20px' }} />
      </CButton>

      <CardUserClassement />
      <CardClassement
        rank="1"
        image={profileImage4}
        name="Cissé Idriss"
        time="En 3 jours"
        score="1271"
        coinIcon={coinIcon}
        gradient
        taille="100%"
      />
      <CardClassement
        rank="2"
        image={profileImage2}
        name="Cissé Idriss"
        time="En 3 jours"
        score="1171"
        coinIcon={coinIcon}
        taille="95%"
      />
      <CardClassement
        rank="3"
        image={profileImage3}
        name="Cissé Idriss"
        time="En 3 jours"
        score="1050"
        coinIcon={coinIcon}
        taille="90%"
      />
      <CardClassement
        rank="4"
        image={profileImage1}
        name="Michael Kouame"
        time="En 3 jours"
        score="850"
        coinIcon={coinIcon}
        taille="100%"
      />
      <CardClassement
        rank="5"
        image={profileImage5}
        name="Cissé Idriss"
        time="En 3 jours"
        score="630"
        coinIcon={coinIcon}
        taille="100%"
      />
      <CardClassement
        rank="6"
        image={profileImage6}
        name="Cissé Idriss"
        time="En 3 jours"
        score="450"
        coinIcon={coinIcon}
        taille="100%"
      />
      <CardClassement
        rank="6"
        image={profileImage6}
        name="Cissé Idriss"
        time="En 3 jours"
        score="450"
        coinIcon={coinIcon}
        taille="100%"
      />
    </div>
  )
}
BottomSheetPerformence.propTypes = {
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
}

const ClassementBottom = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)

  return (
    <div className="d-grid" style={{ position: 'relative' }}>
      <CButton
        style={{ backgroundColor: 'var(--blue1)', color: 'white' }}
        onClick={() => setIsBottomSheetVisible(true)}
      >
        Classement
      </CButton>
      <BottomSheetPerformence
        isVisible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
      />
    </div>
  )
}

export default ClassementBottom
