import React from 'react'
import CountryList from './CountryList'

const Country = ({countries}) => {
    return (
        <div>
            {countries.map((country, index) => {
                return (
                    <CountryList
                        key={index}
                        country={country}
                    />
                )
            })}
        </div>
    )
}

export default Country
