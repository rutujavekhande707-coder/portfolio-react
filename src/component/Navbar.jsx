import React, { useState } from 'react'
import "./Navbar.css"
import useScrollSpy from '../hooks/useScrollSpy';

function Navbar() {
    const [open, setOpen] = useState(false)
    const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'contact'], 100);

    const handleNavClick = () => {
        setOpen(false)
    }

    return (
        <header>
            <div>
                <h1 onClick={() => window.scrollTo(0, 0)}>RV</h1>
            </div>
            <nav className={`navbar ${open ? "open" : ""}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleNavClick}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleNavClick}>About</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleNavClick}>Skills</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleNavClick}>Projects</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleNavClick}>Contact</a>
            </nav>
        </header>
    )
}

export default Navbar