import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    const SwitchTheme = ThemeSwitcher()
    return (
        <section className="navbar d-flex justify-content-between">
            <h1 className="title">Where in the world?</h1>
            <div>{ SwitchTheme }</div>
        </section>
    )
}

export default Navbar
