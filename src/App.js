import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './App.css';
import './Title.css';

import HomeHeader from './Component/HomeHeader';
import UserHeader from './Component/UserHeader';
import ConfirmEmail from './Component/ConfirmEmail';


function App() {
  
  return (
  
      <div className="content"> 
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeHeader} />
            <Route  path="/userDashboard"  component={UserHeader} />
            <Route exact path="/sign-up/confirm" component={ConfirmEmail} />
          </Switch>
        </BrowserRouter>
      </div>
   
        
  );
}

export default App;
