import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="logo-icon" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </a>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#experience-section" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                    <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
