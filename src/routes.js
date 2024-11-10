import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Portefeuille = React.lazy(() => import('./views/portefeuille/Portefeuille'))
const Annonce = React.lazy(() => import('./views/annonce/Annonce'))
const Avis = React.lazy(() => import('./views/avis/Avis'))
const LesCandidats = React.lazy(() => import('./views/lescandidats/LesCandidat'))
const Classement = React.lazy(() => import('./views/classement/Classement'))
const LesGroupes = React.lazy(() => import('./views/lesgroupes/LesGroupes'))
const Compte = React.lazy(() => import('./views/compte/Compte'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Acceuil', element: Dashboard },
  { path: '/portefeuille', name: 'Portefeuille', element: Portefeuille },
  { path: '/annonce', name: 'Annonce', element: Annonce },
  { path: '/avis', name: 'Avis', element: Avis },
  { path: '/lesCandidats', name: 'LesCandidats', element: LesCandidats },
  { path: '/classement', name: 'Classement', element: Classement },
  { path: '/lesgroupes', name: 'LesGroupes', element: LesGroupes },
  { path: '/compte', name: 'Compte', element: Compte },
]

export default routes
