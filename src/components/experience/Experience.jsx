import React from 'react'
import './experience.css'

import progress from '../../assets/screen-progress.png'
import logo from '../../assets/react.svg'

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
                        <img src={progress} alt="" />
                    </div>
                    <div className='progress__experience-container__card-content-footer'>
                        <p>Créateur & Administrateur</p>
                        <p>+40h - 500Mo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
