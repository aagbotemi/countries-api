import React, { useState } from 'react'

const SearchFilter = ({ handleChange }) => {
    return (
        <section className="search-filter d-flex justify-content-between mt-3">
            <div>
                <input
                    type="text"
                    className="w-full py-1 px-2 border-0 text-muted"
                    //value={handleChange}
                    onChange={handleChange}
                    placeholder="Search for a country..."
                />
                
            </div>
            <div>Hello World2</div>
        </section>
    )
}

export default SearchFilter
