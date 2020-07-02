import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.scss';

import '@instructure/canvas-theme';

import Banner from './Banner';
import Home from './Home';
import Survey from './Survey';
import Results from './Results';

function App() {
  return (
    <Router>
      <div className="banner">
        <Banner />
      </div>
      <div className="app">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </div>
    </Router>
  );
}

export default App;
