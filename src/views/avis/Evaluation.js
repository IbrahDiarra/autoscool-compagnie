import React from 'react'
import star from 'src/assets/images/img/star.png'
import star1 from 'src/assets/images/img/star1.png'
import { CProgress, CProgressBar, CRow, CCol } from '@coreui/react'
import PropTypes from 'prop-types'

const StarRatingRow = ({ rating, value, count }) => (
  <CRow className="d-flex align-items-center">
    <CCol md={3} xl={3}>
      <span className="me-3">{rating}</span>
      <img className="me-3" src={star} alt="star" style={{ width: '14px', height: '14px' }} />
      <span>({count})</span>
    </CCol>
    <CCol md={9} xl={9}>
      <CProgress height={10}>
        <CProgressBar color="warning" value={value} />
      </CProgress>
    </CCol>
  </CRow>
)

StarRatingRow.propTypes = {
  rating: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
}

const Evaluation = ({}) => {
  const stars = [true, true, true, true, false]
  const ratingsData = [
    { rating: 1, value: 42, count: 42 },
    { rating: 2, value: 25, count: 25 },
    { rating: 3, value: 67, count: 67 },
    { rating: 4, value: 84, count: 84 },
    { rating: 5, value: 14, count: 14 },
  ]
  return (
    <div>
      <div className="div1">
        <CRow>
          <CCol md={3} xl={3}>
            <div
              className="text-center p-2 d-flex flex-column justify-content-between"
              style={{
                width: '8rem',
                height: '7.5rem',
                boxShadow: '-5px -4px 10px #fff',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontSize: '23px' }}>
                <span style={{ color: 'orange' }}>4,2</span>/5
              </div>
              <div>
                {stars.map((isFilled, index) => (
                  <img
                    key={index}
                    className="me-1"
                    src={isFilled ? star : star1}
                    style={{ width: '14px', height: '14px' }}
                    alt={isFilled ? 'Étoile pleine' : 'Étoile vide'}
                  />
                ))}
              </div>
              <div style={{ color: 'blue' }}>48 Notes</div>
            </div>
          </CCol>
          <CCol md={9} xl={9}>
            {ratingsData.map((data, index) => (
              <StarRatingRow
                key={index}
                rating={data.rating}
                value={data.value}
                count={data.count}
              />
            ))}
          </CCol>
        </CRow>
      </div>
    </div>
  )
}
export default Evaluation
