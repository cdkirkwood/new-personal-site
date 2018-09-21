import React from 'react'
import Links from './Links'
import Picture from './Picture'
import '../componentStyles/Home.css'

const Home = props => (
  <div className="home-conatiner">
    <h2>This is me...</h2>
    <div className="picture-speech">
      <Picture />
    </div>
    <h2>I'm a Software Engineer</h2>
    <Links />
  </div>
)

export default Home