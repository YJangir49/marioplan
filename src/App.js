import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path ='/' component={Dashboard}/>
          <Route path ='/project/:id' component={ProjectDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
