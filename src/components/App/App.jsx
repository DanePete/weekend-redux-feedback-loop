import React from 'react';
import axios from 'axios';
import './App.css';
import HowFeeling from '../HowFeeling/HowFeeling';
import UnderStanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Supported from '../Supported/Supported';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App container-fluid'>
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

      <Route path="/review" exact>
        <Review />
      </Route>

      <Route path="/supported" exact>
        <Supported />
      </Route>

      <Route path="/comments" exact>
        <Comments />
      </Route>

      <Route path="/admin" exact>
        <Admin />
      </Route>

      </Router> 

      
    </div>
  );
}

export default App;
