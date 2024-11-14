import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import groupe from 'src/assets/images/img/groupe.png'
import candidat from 'src/assets/images/img/candidat.png'
import portef from 'src/assets/images/img/portef.png'

import { CRow, CCol, CWidgetStatsA } from '@coreui/react'
import { getStyle } from '@coreui/utils'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={4}>
        <CWidgetStatsA
          className="my-widget"
          style={{
            backgroundColor: 'white',
            borderTop: '4px solid var(--rose1)',
            paddingBottom: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          value={<span style={{ fontWeight: 'bold' }}>1210</span>}
          title={
            <>
              <span style={{ fontWeight: 'bold' }}>Candidats</span>
              <div style={{ color: 'var(--rose1)', fontSize: '12px' }}>13 En cours</div>
            </>
          }
          action={<img src={candidat} width="30" height="30" />}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={4}>
        <CWidgetStatsA
          className="my-widget"
          style={{
            backgroundColor: 'white',
            borderTop: '4px solid var(--warning1)',
            paddingBottom: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          value={<span style={{ fontWeight: 'bold' }}>08</span>}
          title={
            <>
              <span style={{ fontWeight: 'bold' }}>Groupes</span>
              <div style={{ color: 'var(--warning1)', fontSize: '12px' }}>08 Actifs</div>
            </>
          }
          action={<img src={groupe} width="30" height="30" />}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={4}>
        <CWidgetStatsA
          className="my-widget"
          style={{
            backgroundColor: 'white',
            borderTop: '4px solid var(--primary)',
            paddingBottom: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          value={
            <span style={{ fontWeight: 'bold' }}>
              35 000 <span style={{ fontWeight: 'bold', fontSize: '10px' }}>FCFA</span>
            </span>
          }
          title={
            <>
              <span style={{ fontWeight: 'bold' }}>Portefeuil</span>
              <div
                className="d-flex justify-content-between text-nowrap"
                style={{ color: 'var(--primary)', fontSize: '12px' }}
              >
                <CRow>
                  <CCol xs={7}>
                    <div>Aujourd&apos;hui</div>
                  </CCol>
                  <CCol xs={5}>
                    <div>- 7500 FCFA</div>
                  </CCol>
                </CRow>
              </div>
            </>
          }
          action={<img src={portef} width="30" height="30" />}
        />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
