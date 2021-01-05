import React, { useState, useEffect } from 'react';
import Country from './Country';
import SearchFilter from './SearchFilter';
import { Col, Container, Row } from 'reactstrap';

function App() {
  const [countries, setCountries] = useState([]); // the state of array where the weather is stored
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

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

  useEffect(() => {
    setFilteredCountries(countries.filter(country => {
      return country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.toLowerCase().includes(region.toLocaleLowerCase())
    }))
  }, [search, countries, region])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSelect = (e) => {
    setRegion(e.target.value);
  };

  return (
    <section>
      <Container fluid>

        <SearchFilter handleChange={handleChange} handleSelect={handleSelect} region={region} />
            
        <Row className="mt-sm-3 mt-2">
          {filteredCountries.map((country, index) => (
            <Col md={4} sm={6} className="mb-3">
              <Country key={index} country={country} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default App;