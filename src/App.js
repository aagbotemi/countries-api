import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Countries} />
      <Route path="/details" component={CountryDetails} />
      <Footer />
    </Router>
  );
}

export default App;
