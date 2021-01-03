import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const CountryList = ({ country }) => {
    const { name, population, flag, capital, timezones, region } = country
    // console.log(name);
    return (
        <div>
            <Card>
                <Link to="/details">
                    <CardImg height="180rem" top src={flag} alt={name} />
                </Link>
                <CardBody>
                    <div className="d-flex align-items-baseline mb-0">
                        <CardTitle tag="h5">{name},</CardTitle>
                        <CardSubtitle tag="h6" className="ml-1 text-muted">{capital}</CardSubtitle>
                    </div>
                    
                    <CardText className="mb-0">Region: {region}</CardText>
                    <CardText className="mb-0">Population: {population}</CardText>
                    <CardText>Time zone: {timezones}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CountryList

