import React from 'react'
import Evaluation from './Evaluation'
import CardAvis from './CardAvis'

const EvaluationAvis = () => {
  return (
    <>
      <Evaluation />
      <div
        className="mt-3 mb-2"
        style={{ borderBottom: '2px solid #ccc', marginLeft: '-14px', marginRight: '-14px' }}
      ></div>
      <div className="mb-2">(24) Avis</div>
      <CardAvis />
      <CardAvis />
    </>
  )
}

export default EvaluationAvis
