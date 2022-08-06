import React from 'react';
import './experience.css';

import progress from '../../assets/screen-progress.png';
import klee from '../../assets/screen-klee.png';
import logo from '../../assets/react.svg';
import node from '../../assets/nodejs.svg';
import netanime from '../../assets/accueil.png';

import Preload from '../../core/Preload';

const Experience = () => {
    return (
        <div className='progress__experience section__padding' id='experience'>
            <h1 className='gradient__text'>Expériences</h1>
            <div className='progress__experience-container'>
                <div className='progress__experience-container__card'>
                    <div className='progress__experience-container__card-header'>
                        <h2 className='gradient__text'>Progress Rect</h2>
                        <div className='progress__experience-container__card-header-content'>
                            <img src={logo} alt="React" />
                            <h3>React</h3>
                        </div>
                    </div>
                    <p>J'ai développé et j'administre seul mon site web Progress Rect.</p>
                    <div className='progress__experience-container__card-image'>
                        <Preload src={progress} alt="Progress" />
                    </div>
                    <div className='progress__experience-container__card-content-footer'>
                        <p>Créateur & Administrateur</p>
                        <p>+40h - 500Mo</p>
                    </div>
                </div>

                <div className='progress__experience-container__card'>
                    <div className='progress__experience-container__card-header'>
                        <h2 className='gradient__text'>Klee Bot</h2>
                        <div className='progress__experience-container__card-header-content'>
                            <img src={node} alt="NodeJS" />
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                    <p>J'ai développé et j'administre seul le bot du Bataillon De l'Animation.</p>
                    <div className='progress__experience-container__card-image'>
                        <Preload src={klee} alt="Klee" />
                    </div>
                    <div className='progress__experience-container__card-content-footer'>
                        <p>Créateur & Administrateur</p>
                        <p>+63h - 150Mo</p>
                    </div>
                </div>

                <div className='progress__experience-container__card'>
                    <div className='progress__experience-container__card-header'>
                        <h2 className='gradient__text'>Net ANime</h2>
                        <div className='progress__experience-container__card-header-content'>
                            <img src={logo} alt="React" />
                            <h3>React</h3>
                        </div>
                    </div>
                    <p>Je suis le créateur et seul développeur de Net Anime. Net Anime c'est aussi une API et un panel pour mon équipe.</p>
                    <div className='progress__experience-container__card-image'>
                        <Preload src={netanime} alt="netanime.fr" />
                    </div>
                    <div className='progress__experience-container__card-content-footer'>
                        <p>Créateur & Administrateur</p>
                        <p>+200h - +1Go</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
