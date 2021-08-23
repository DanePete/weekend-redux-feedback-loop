import React from 'react';
import './App.css';
import HowFeeling from '../HowFeeling/HowFeeling';
import UnderStanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';
import Supported from '../Supported/Supported';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <div className='App container-fluid'>
      <header className='App-header'>
        <h1 class="ribbon">
          <strong class="ribbon-content">
            FEEDBACK <br />
            <h4>Don't forget it!</h4>
            </strong>
        </h1>
      </header>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Router>

      <Route path="/" exact>
        <HowFeeling />
         <Footer />
      </Route>

      <Route path="/understanding" exact>
        <UnderStanding />
        <Footer />
      </Route>

      <Route path="/review" exact>
        <Review />
        <Footer />
      </Route>

      <Route path="/supported" exact>
        <Supported />
        <Footer />
      </Route>

      <Route path="/comments" exact>
        <Comments />
        <Footer />
      </Route>

      <Route path="/admin" exact>
        <Admin />
      </Route>

      <Route path="/footer" exact>
      <Footer />
      </Route>

      </Router> 


      
    </div>
  );
}

export default App;
