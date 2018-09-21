import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Projects, SingleProject } from './components'

const Routes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route path="/projects/:name" component={Projects} />
    <Route component={Home} />
  </Switch>
)

export default Routes
