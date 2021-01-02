import React from 'react'
import CountryList from './CountryList'
import { Row, Col, Container } from 'reactstrap';

const Country = ({ countries }) => {
    return (
        <Container fluid>
            <Row className="mt-sm-4 mt-3">
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
