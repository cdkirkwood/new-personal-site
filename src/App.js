import React, { Component } from 'react'
import './App.css'
import { Navbar } from './components'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layer">
          <Navbar />
          <Routes />
        </div>
      </div>
    )
  }
}

export default App
