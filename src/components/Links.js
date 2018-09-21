import React from 'react'
import github from '../assests/github.png'
import linkedIn from '../assests/linkedIn.png'
import gmail from '../assests/gmail.png'
//import '../componentStyles/Home.css'

const Links = props => (
  <div className="linksContainer">
    <a href="https://github.com/cdkirkwood">
      <img src={github} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/connor-kirkwood/">
      <img src={linkedIn} alt="linkedIn" />
    </a>
    <a>
      <img src={gmail} alt="gmail" />
    </a>
  </div>
)

export default Links