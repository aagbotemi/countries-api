import React from 'react'
import CountryList from './CountryList'
import { Row, Col, Container } from 'reactstrap';

const Country = ({ countries }) => {
    return (
        <Container fluid>
            <Row>
                {countries.map((country, index) => {
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
