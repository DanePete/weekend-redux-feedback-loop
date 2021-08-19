import React from 'react';
import axios from 'axios';
import './App.css';
import HowFeeling from '../HowFeeling/HowFeeling';
import UnderStanding from '../Understanding/Understanding';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

      <Route path="/" exact>
        <HowFeeling />
      </Route>

      <Route path="/understanding" exact>
        <UnderStanding />
      </Route>

      <Route path="/checkout" exact>
        { /* CREATE COMPONENT checkout */}
      </Route>

      <Route path="/admin" exact>
        { /* CREATE COMPONENT ADMIN */}
      </Route>

      </Router> 

      
    </div>
  );
}

export default App;
