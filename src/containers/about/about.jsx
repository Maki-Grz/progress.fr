import React from 'react'
import './about.css'
import profil from '../../assets/profil.gif'
import { discord, instagram, linkedin, github } from './imports'

import PreloadImage from '../../core/Preload'

const About = () => {
    return (
        <div className='progress__about section__padding' id='contact'>
            <div className='progress__about-box'>
                <div className='progress__about-box-container'>
                    <div className='progress__about-box-container-profil'>
                        <PreloadImage src={profil} alt="Maximilien Grzeczka" />
                        <h3 className='gradient__text'>Maximilien Grzeczka</h3>
                    </div>
                    <div className='progress__about-box-container-social'>
                        <a href="https://discord.gg/gaBzAVZ" target="_blank" rel="noreferrer"><PreloadImage src={discord} alt="Discord" /></a>
                        <a href="https://www.instagram.com/maki_grz/" target="_blank" rel="noreferrer"><PreloadImage src={instagram} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/in/maximilien-grzeczka-90a72921b/" target="_blank" rel="noreferrer"><PreloadImage src={linkedin} alt="Linkedin" /></a>
                        <a href="https://www.github.com/maki-grz" target="_blank" rel="noreferrer"><PreloadImage src={github} alt="Github" /></a>
                    </div>
                    <div className='line'></div>
                    <div className='progress__about-box-container-citation'>
                    <p>Lycéen de 17 ans, fanatique Apple et souvent d'une mauvaise foi dite "légendaire" je me passionne pour le langage JavaScript et souhaite participer à de nombreux projets pour progresser dans le vaste monde du développement.<br /><br />Durant ma scolarité en lycée général et mon apprentissage en autodidacte, je construis ma réputation en travaillant sur des projets d'applications/sites web en JavaScript. <br /><br />En apprentissage constant avec les nouvelles technologies web comme React.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About