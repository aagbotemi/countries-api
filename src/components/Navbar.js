import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    const SwitchTheme = ThemeSwitcher()
    return (
        <section className="navbar d-flex justify-content-between align-items-center">
            <h1 className="title ml-2 ml-md-4">Where in the world?</h1>
            <div className="mr-2 mr-md-4">{ SwitchTheme }</div>
        </section>
    )
}

export default Navbar
