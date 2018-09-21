import React from 'react'
import deploy from '../assests/deploy.png'
import picSelector from '../picSelector'
import ProjectHeader from './ProjectHeader'
import ProjectDetails from './ProjectDetails';



const SingleProject = props => {
  const { title, name, description, role, tech, deployed } = props.project
  const projectDetails = { description, role, tech, deployed, deploy }
  const mainPic = picSelector(name)
  return (
    <div className="single-project-container">
      <ProjectHeader title={title} mainPic={mainPic} />
      <ProjectDetails projectDetails={projectDetails} />
    </div>
  )
}

export default SingleProject