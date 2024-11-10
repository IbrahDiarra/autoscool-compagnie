import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import myimage1 from 'src/assets/images/img2.png'
import firstImage from 'src/assets/images/img/Bas.png'
import secondImage from 'src/assets/images/img/Image13.png'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="light"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader
        style={{
          backgroundImage: `url(${myimage1})`, // Image utilisée comme fond
          backgroundSize: 'cover', // Assure que l'image couvre tout l'espace
          backgroundPosition: 'center',
          height: '100px', // Ajuste la hauteur du header
          width: '100%', // Assure que l'image couvre toute la largeur
          position: 'relative',
          color: 'white', // Couleur du texte en blanc
          fontWeight: 'bold',
          display: 'flex', // Utilise flexbox pour centrer le contenu
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '17px',
        }}
      >
        {/* Le texte centré */}
        On prouves
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        />
      </CSidebarHeader>

      <AppSidebarNav items={navigation} />
      <CSidebarFooter
        className="d-none d-lg-flex"
        style={{
          position: 'relative',
          height: '110px',
          width: '100%',
          backgroundImage: `url(${firstImage})`, // Utilisation de firstImage en tant que fond
          backgroundSize: 'cover', // Assure que l'image couvre tout l'espace
        }}
      >
        {/* Texte superposé */}
        <div
          style={{
            position: 'relative',
            height: '100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            top: '20px',
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'rgb(3, 53, 154)',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            Autoscool
          </p>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '8px',
              color: 'rgb(138, 136, 136)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            La seul route qui garantie le permis de conduire
          </p>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '11px',
              color: 'rgb(45, 44, 44)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Version 2.1
          </p>
        </div>

        {/* Deuxième image superposée */}
        <img
          src={secondImage} // Remplace par ton image
          alt="Superposée"
          style={{
            position: 'absolute',
            bottom: '55px', // Ajuste selon tes besoins
            right: '0px', // Ajuste selon tes besoins (exemple ici : positionné à droite)
            height: '70px',
            width: '90px',
          }}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
