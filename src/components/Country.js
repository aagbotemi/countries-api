import React from 'react'
import CountryList from './CountryList'
import { Row, Col, Container } from 'reactstrap';
import SearchFilter from './SearchFilter';

const Country = ({ countries, search }) => {
    const filteredCountries = countries.filter((country) =>
        country.name.includes(search)
    )

    
    return (
        <Container fluid>
            <SearchFilter />
            <Row className="mt-sm-3 mt-2">
                {filteredCountries.map((country, index) => {
                    // console.log(country);
                    return (
                        <Col md={4} sm={6} className="mb-3">
                            <CountryList
                                key={index}
                                country={country}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Country
