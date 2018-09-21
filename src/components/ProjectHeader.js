import React from 'react'

const ProjectHeader = props => {
  const { title, mainPic } = props
  return (
    <div className="title-pic">
      <h3>{title}</h3>
      <img src={mainPic} id="main-pic" />
    </div>
  )
}

export default ProjectHeader