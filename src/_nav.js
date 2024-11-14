import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilPencil,
  cilSpeedometer,
  cilHome,
  cilUserFollow,
  cilWallet,
  cilBullhorn,
  cilPeople,
  cilGroup,
  cilChartLine,
  cilCommentSquare,
  cilUser,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Acceuil',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" size="xl" />,
  },
  {
    component: CNavItem,
    name: 'Ajouter un candidat',
    to: '/theme/typography',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" size="xl" />,
  },
  {
    component: CNavItem,
    name: 'Portefeuille',
    to: '/portefeuille',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Annonces',
    to: '/annonce',
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Candidats',
    to: '/lesCandidats',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Groupes',
    to: '/lesgroupes',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Classement',
    to: '/classement',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Avis candidat',
    to: '/avis',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Compte',
    to: '/login',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Candidat',
    to: '/candidat',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
]

export default _nav
