import React from 'react'
import { NavLink } from 'react-router-dom'
import '../componentStyles/Navbar.css'

const NavBar = () => (
  <div className="nav-container">
    <h3 id="name">Connor Kirkwood</h3>
    <div className="nav-links">
      <NavLink
        to="/home"
        className="link"
        activeClassName="selected">
        Home</NavLink>
      <NavLink
        to="/about"
        className="link"
        activeClassName="selected">
        About</NavLink>
      <NavLink
        to="/projects/bunch-cool-stuff"
        className="link"
        activeClassName="selected">
        Projects</NavLink>
    </div>

  </div>
)

export default NavBar