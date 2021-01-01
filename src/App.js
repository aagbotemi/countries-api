import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Countries} />
      <Route path="/details" component={CountryDetails} />
    </Router>
  );
}

export default App;
