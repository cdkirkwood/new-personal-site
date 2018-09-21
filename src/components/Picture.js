import React from 'react'
import photo from '../assests/photo.jpg'

const Picture = () => (
  <div className="pictureConatiner">
    <img id="picture" src={photo} alt="profilePicture" />
  </div>
)

export default Picture