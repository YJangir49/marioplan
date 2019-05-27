import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path ='/' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
