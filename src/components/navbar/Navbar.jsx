import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/progress-remove.png';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="progress__navbar">
            <div className="progress__navbar-links">
                <img src={logo} alt="logo" />
                <div className="progress__navbar-links_container">
                    <p><a href="#home">Accueil</a></p>
                    <p><a href="#skills">Compétences</a></p>
                    <p><a href="#projects">Projets</a></p>
                    <p><a href="#experience">Expériences</a></p>
                </div>
            </div>
            <div className="progress__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={60} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={60} onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="progress__navbar-menu_container scale-up-center">
                        <div className="progress__navbar-menu_container-links">
                            <p><a href="#home">Accueil</a></p>
                            <p><a href="#skills">Compétences</a></p>
                            <p><a href="#projects">Projets</a></p>
                            <p><a href="#experience">Expériences</a></p>
    
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar