import React from 'react';
import { BsSearch } from 'react-icons/bs'

const SearchFilter = ({ handleChange, handleSelect, region }) => {
    return (
        <section className="search-filter d-flex justify-content-between mt-3">
            <div>
                <BsSearch className="search-icon" />
                <input
                    type="text"
                    className="border-0"
                    icon="search"
                    onChange={handleChange}
                    placeholder="Search for a country..."
                />
            </div>
            <div>
                <select value={region} onChange={handleSelect} className="w-full border-0">
                    <option  disabled="true" value=''>Filter by Region</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Oceania'>Oceania</option>
            </select>
            </div>
        </section>
    )
}

export default SearchFilter
