import React from 'react';
import './footer.css'

import logo from '../../assets/progress-remove.png';
import Preload from '../../core/Preload';

const Footer = () => {
    return (
        <div className='progress__footer section__padding'>
            <div className='progress__footer-containers'>
                <Preload src={logo} alt="Progress" />
                <div className='progress__footer-containers__column'>

                    <div className='progress__footer-containers__column-about'>
                        <h3 className='gradient__text'>À propos</h3>
                        <p>Ce site web a comme but de me présenter, de montrer mes talents et de prendre contact avec moi.<br /><br />Je suis ouvert à toute critique concernant le site web, mon objectif est de m'améliorer.</p>
                    </div>

                    <div className='progress__footer-containers__column-sections'>
                        <h3 className='gradient__text'>Sections</h3>
                        <p><a href="#home">Accueil</a></p>
                        <p><a href="#skills">Compétences</a></p>
                        <p><a href="#projects">Projets</a></p>
                        <p><a href="#experience">Expériences</a></p>
                    </div>

                    <div className='progress__footer-containers__column-contact'>
                        <h3 className='gradient__text'>Contact</h3>
                        <p><a href="https://discord.gg/gaBzAVZ" target="_blank" rel="noreferrer">Discord</a></p>
                        <p><a href="https://www.instagram.com/maki_grz/" target="_blank" rel="noreferrer">Instagram</a></p>
                        <p><a href="https://www.linkedin.com/in/maximilien-grz-90a72921b/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p><a href="https://www.github.com/maki-grz" target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Footer;
