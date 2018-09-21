import React from 'react'
import { NavLink } from 'react-router-dom'
import projectData from '../projectData'
import SideBarLink from './SidebarLink';

const Sidebar = () => (
  <div className="sidebar-container">
    {projectData.map(project => (
      <SideBarLink project={project} key={project.name} />
    ))}
  </div>
)

export default Sidebar
