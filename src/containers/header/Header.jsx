import React from 'react'
import './header.css'
import logo from '../../assets/working.svg'

const Header = () => {
    return (
        <div className="progress__header section__padding" id='home'>
            <div className='progress__header-content'>
                <h1 className='gradient__text'>Exprimez votre vision</h1>
                <p>La société Progress Rect réalise vos souhaits et met tout en œuvre pour écrire l'avenir de votre entreprise et son identité sur Internet.</p>
            </div>

            <div className='progress__header-image'>
                <img src={logo} alt="working" />
            </div>
        </div>
    )
}

export default Header