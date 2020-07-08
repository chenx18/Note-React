import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import RouterAuth from './untils/routerAuth';
import { routes } from './router/index';
import "./mock/menuList.js"

class App extends Component{

  render(){
    return (
      <Router>
        <Switch className="App">
          <RouterAuth config={routes} />
        </Switch>
      </Router>
    )
  }
}

export default App;