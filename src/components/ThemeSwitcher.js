import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const [mode, setMode] = useState(() => localStorage.getItem('mode'));
    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light')
        }
    }, [mode])

    return (
        <button className='theme-btn border-0' onClick={() => setMode(mode => mode === 'dark' ? 'light' : 'dark')}>
            <span className={mode === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></span>
            <small> {mode === 'dark' ? 'Light ' : 'Dark '}Mode</small>
        </button>
    )
}

export default ThemeSwitcher
