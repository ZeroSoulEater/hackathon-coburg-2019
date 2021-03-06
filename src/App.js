import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import Winner from './sites/winner'
import Login from './sites/login'
import Index from './sites/index'
import Workspaces from './sites/workspaces'
import UserSearch from './sites/user_search'
import Navigation from './sites/navigation'
import UseCases from './sites/use_cases'
import S404 from './sites/s404'
import Api from './api/api'

new Api();

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/dashboard' component={Index}/>
          <Route exact path='/userSearch' component={UserSearch}/>
          <Route exact path='/workspaces' component={Workspaces}/>
          <Route exact path='/navigation' component={Navigation}/>
          <Route exact path='/winner' component={Winner}/>
          <Route exact path='/useCases' component={UseCases}/>
          <Route component={S404}/>
        </Switch>
      </Router>
  );
}

export default App;
 
