import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { CNavLink, CSidebarNav } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, indent = false) => {
    return (
      <>
        <span className="nav-icon" style={{ fontSize: '1.2rem' }}>
          {icon || (indent && <span className="nav-icon-bullet"></span>)}
        </span>
        <span className="nav-name" style={{ fontSize: '14px' }}>
          {name}
        </span>
      </>
    )
  }

  const navItem = (item, index, indent = false) => {
    const { component, name, icon, ...rest } = item
    const Component = component

    // Styles personnalisés pour NavLink actif et inactif
    const activeStyle = {
      color: '#4a90e2',
      fontWeight: 'bold',
      backgroundColor: '#e0f7fa',
      borderLeft: '4px solid #4a90e2',
    }

    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink
            {...(rest.to && { as: NavLink })}
            {...rest}
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            {navLink(name, icon, indent)}
          </CNavLink>
        ) : (
          navLink(name, icon, indent)
        )}
      </Component>
    )
  }

  return (
    <CSidebarNav as={SimpleBar}>
      {items && items.map((item, index) => navItem(item, index))}
    </CSidebarNav>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
