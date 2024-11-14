import React from 'react'
import { CCard, CCardBody, CCardHeader, CButton, CCol, CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import phone from 'src/assets/images/img/phone.png'
import likeImg from 'src/assets/images/img/like.png'
import dislikeImg from 'src/assets/images/img/dislike.png'

const PostCard = ({
  title,
  annonce,
  location,
  date,
  content,
  phoneNumber,
  likes,
  dislikes,
  profileImage,
  mainImage,
}) => {
  return (
    <CCard style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <CCardHeader className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Image de profil */}
          <img
            src={profileImage}
            alt="Profil"
            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }}
          />
          <div>
            <h6 style={{ margin: '0', fontWeight: 'bold', fontSize: '11px' }}>{title}</h6>
            <small>
              {location} • {date}
            </small>
          </div>
        </div>
        <div>
          <CIcon size="xl" icon={cilOptions} />
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow>
          {/* Image principale plus grande */}
          <CCol md="12">
            <p style={{ fontWeight: 'bold' }}>{annonce}</p>
            <p>{content}</p>
            <img
              src={mainImage}
              alt="Main Content"
              style={{ width: '100%', height: '150px', borderRadius: '8px', marginBottom: '10px' }}
            />
          </CCol>
          <CCol md="12" className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between">
              <CButton
                href={`tel:${phoneNumber}`}
                color="primary"
                variant="outline"
                style={{
                  marginLeft: '10px',
                  borderRadius: '15px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                }}
              >
                <img src={phone} alt="Ajouter un logo" width="15" height="15" /> {phoneNumber}
              </CButton>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <CButton
                  color="success"
                  variant="outline"
                  style={{ borderRadius: '15px', fontSize: '10px', fontWeight: 'bold' }}
                >
                  {likes} <img src={likeImg} alt="Ajouter un logo" width="15" height="15" />
                </CButton>
                <CButton
                  color="danger"
                  variant="outline"
                  style={{
                    marginLeft: '8px',
                    borderRadius: '15px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  {dislikes} <img src={dislikeImg} alt="Ajouter un logo" width="15" height="15" />
                </CButton>
              </div>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  annonce: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  dislikes: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
}

export default PostCard
