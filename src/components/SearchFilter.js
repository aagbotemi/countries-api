import React, { useState } from 'react'

const SearchFilter = () => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <section className="search-filter d-flex justify-content-between mt-1 mt-md-3">
            <div>
                {search}
                <input
                    type="text"
                    className="w-full py-1 px-2 border-0 text-muted"
                    onChange={handleChange}
                    placeholder="Search for a country..."
                />
                
            </div>
            <div>Hello World2</div>
        </section>
    )
}

export default SearchFilter
