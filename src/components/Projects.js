import React from 'react'
import Sidebar from './Sidebar'
import '../componentStyles/Projects.css'
import SingleProject from './SingleProject'
import projectData from '../projectData'

const Projects = (props) => {
  const projName = props.match.params.name
  const selectedProj = projectData.find(project => project.name === projName)
  return (
    <div>
      <Sidebar />
      {projName ?
        <SingleProject project={selectedProj}/>
        : null
      }
    </div>
  )
}

export default Projects