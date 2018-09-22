import React from 'react'
import ToolTip from './ToolTip'

const ProjectDetails = props => {
  const { description, tech, role, deployed, deploy } = props.projectDetails
  return (
    <div className="project-details">
        <p>{description}</p>
        <p>{role}</p>
        <p>{tech}</p>
        <a href={deployed} data-tip data-for={'dataToolTip1'}>
          <img src={deploy} id="deploy" alt="deployed-link"/>
          <ToolTip/>
        </a>
      </div>
  )
}

export default ProjectDetails