import React from 'react'
import CardAvis from './CardAvis'
import CardPartage from './CardPartage'
import CardUserAvis from './CardUserAvis'

const Partage = () => {
  return (
    <>
      <CardPartage />
      <div
        className="mt-3 mb-2"
        style={{ borderBottom: '2px solid #ccc', marginLeft: '-14px', marginRight: '-14px' }}
      ></div>
      <div className="mb-2">(12) Candidats</div>
      <CardUserAvis />
      <CardUserAvis />
    </>
  )
}

export default Partage
