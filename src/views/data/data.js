const operators = [
  {
    name: 'Orange Money',
    imgSrc: orange,
    fee: "1% de frais de l'opérateur",
  },
  {
    name: 'Wave',
    imgSrc: wave,
    fee: "1% de frais de l'opérateur",
  },
  {
    name: 'Moov Africa Money',
    imgSrc: moov,
    fee: "1% de frais de l'opérateur",
  },
  {
    name: 'MTN MOMO',
    imgSrc: mtn,
    fee: "1% de frais de l'opérateur",
  },
]

// Exemple de données JSON
const transactionsData = [
  {
    type: 'ABONNEMENT',
    name: 'Mickael Kouame',
    time: 'Effectué il y a 16 min',
    montant: '2500 FR',
    status: 'en attente de paiement',
    couleur: 'red',
    couleur1: 'blue',
    couleur2: 'blue',
  },
  {
    type: 'ABONNEMENT',
    name: 'Mickael Kouame',
    time: 'Effectué il y a 16 min',
    montant: '2500 FR',
    status: 'Payé',
    couleur: 'green',
    couleur1: 'blue',
    couleur2: 'blue',
  },
  {
    type: 'AJOUT DE FONDS',
    name: '',
    time: 'Ajouté le 10 Jan 2022 10:10',
    montant: '5000 FR',
    status: '',
    couleur: '',
    couleur1: 'green',
    couleur2: 'green',
  },
]

export default transactionsData
