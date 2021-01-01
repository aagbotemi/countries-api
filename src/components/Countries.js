import React, { useState, useEffect } from 'react';
import Country from './Country';

function App() {
  const [countries, setCountries] = useState([]); // the state of array where the weather is stored
  
  const API_URL = "https://restcountries.eu/rest/v2/all";
  
  useEffect(() => {
    const getCountry = async () => {
      
      try {
        const fetchCountry = await fetch(`${API_URL}`)
        const data = await fetchCountry.json()
        setCountries(data)
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    getCountry();
  }, [])

  return (
    <section>

      <Country countries={countries} />
    </section>
  );
}

export default App;