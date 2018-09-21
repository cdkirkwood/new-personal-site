import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarLink = props => {
  const { name, title } = props.project
  return (
    <NavLink 
      className="white" 
      activeClassName="selected" 
      to={`/projects/${name}`}>
      {title}
    </NavLink>
  )
}

export default SideBarLink