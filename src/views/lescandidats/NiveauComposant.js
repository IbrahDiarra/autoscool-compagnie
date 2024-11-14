import React from 'react'

import { CCard, CCardBody, CCardHeader, CButton, CCardFooter } from '@coreui/react'
import CardNiveau from './CardNiveau'
import niveau1 from 'src/assets/images/img/niveau1.png'
import niveau2 from 'src/assets/images/img/niveau2.png'
import niveau3 from 'src/assets/images/img/niveau3.png'
import niveau4 from 'src/assets/images/img/niveau4.png'
import niveau5 from 'src/assets/images/img/niveau5.png'
import NiveauChanger from './ButtomSheet'

const NiveauComposant = ({}) => {
  const userNiveau = [
    { imgsrc: niveau1, niveau: 'Inscription reussi', date: '16 JAN 2023 17:16', couleur: 'orange' },
    {
      imgsrc: niveau2,
      niveau: 'Visite medicale reussi',
      date: '22 JAN 2023 10:16',
      couleur: 'orange',
    },
    { imgsrc: niveau3, niveau: 'Examen Blanc', date: 'Code de la route', couleur: '#949494' },
    { imgsrc: niveau4, niveau: 'Examen Blanc', date: 'Conduite', couleur: '#949494' },
    { imgsrc: niveau5, niveau: 'Obtention', date: 'Du Permis de Conduit', couleur: '#949494' },
  ]
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <div className="text-center fw-semibold" style={{ color: 'var(--grey)' }}>
            Niveau
          </div>
        </CCardHeader>
        <CCardBody style={{ height: '70vh' }}>
          <div>
            <div>
              {userNiveau.map((item, index) => (
                <CardNiveau
                  key={index}
                  imgsrc={item.imgsrc}
                  niveau={item.niveau}
                  date={item.date}
                  couleur={item.couleur}
                />
              ))}
            </div>
          </div>
        </CCardBody>
        <CCardFooter>
          <NiveauChanger style={{ width: '100%' }} />
        </CCardFooter>
      </CCard>
    </div>
  )
}

export default NiveauComposant
