import React from 'react';
import { Link } from 'react-router-dom'

const CountryList = ({ country }) => {
    const { name, population, flag, capital, timezones } = country
    return (
        <div>
            <Link to="/details">
                <img src={flag} alt={name}/>
            
            </Link>
            <h1>{name}</h1>
            <h1>{population}</h1>
            <h1>{timezones}</h1>
            <h1>{capital}</h1>
        </div>
    )
}

export default CountryList
