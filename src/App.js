import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/project/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path ='/' component={Dashboard}/>
          <Route path ='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/createproject' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
