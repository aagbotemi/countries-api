import React from 'react'

const CountryList = ({ country }) => {
    const { name, alpha2Code, timezones } = country
    return (
        <div>
            <h1>{name}</h1>
            <h1>{alpha2Code}</h1>
            <h1>{timezones}</h1>
        </div>
    )
}

export default CountryList
