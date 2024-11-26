import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Portefeuille = React.lazy(() => import('./views/portefeuille/Portefeuille'))
const Annonce = React.lazy(() => import('./views/annonce/Annonce'))
const Avis = React.lazy(() => import('./views/avis/Avis'))
const LesCandidats = React.lazy(() => import('./views/lescandidats/LesCandidat'))
const Classement = React.lazy(() => import('./views/classement/Classement'))
const LesGroupes = React.lazy(() => import('./views/lesgroupes/LesGroupes'))
const Compte = React.lazy(() => import('./views/compte/Compte'))
const AjoutCandidat = React.lazy(() => import('./views/ajoutcandidat/AjoutCandidat'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Accueil', element: Dashboard },
  { path: '/portefeuille', name: 'Portefeuille', element: Portefeuille },
  { path: '/annonce', name: 'Annonce', element: Annonce },
  { path: '/avis', name: 'Avis Candidat', element: Avis },
  { path: '/lesCandidats', name: 'Les Candidats', element: LesCandidats },
  { path: '/classement', name: 'Classement', element: Classement },
  { path: '/lesgroupes', name: 'Les Groupes', element: LesGroupes },
  { path: '/compte', name: 'Compte', element: Compte },
  { path: '/ajoutcandidat', name: 'Ajouter un candidat', element: AjoutCandidat },
]

export default routes
