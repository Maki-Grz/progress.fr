import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import './sidebar.css'
import social from '../../assets/social.svg'
import profile from '../../assets/profile.svg'
import mail from '../../assets/mail.gif'

import Footer from '../../containers/footer/Footer'

const ControlledPopup = () => {
    const [open1, setOpen1] = useState(false);
    const closeModal1 = () => setOpen1(false);

    const [open2, setOpen2] = useState(false);
    const closeModal2 = () => setOpen2(false);

    return (
        <div className='progress__popup'>
            <button type="button" className="progress__popup-button social" onClick={() => setOpen1(o => !o)}>
                <img src={social} alt='Social' width={50} />
            </button>

            <button type="button" className="progress__popup-button profile" onClick={() => setOpen2(o => !o)}>
                <img src={profile} alt='Profile' width={50} />
            </button>

            <Popup open={open1} closeOnDocumentClick onClose={closeModal1}>
                <div className="progress__popup-data">
                    <a className="close" onClick={closeModal1}>
                        &times;
                    </a>
                    <iframe title='Discord' src="https://canary.discord.com/widget?id=686114664731377703&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
                    <div className='progress__popup-data__mail'>
                        <img src={mail} alt="mail" />
                        <h3>"Me contacter" Bientôt Disponible</h3>
                    </div>
                </div>
            </Popup>

            <Popup open={open2} closeOnDocumentClick onClose={closeModal2}>
                <div className="progress__popup-data">
                    <a className="close" onClick={closeModal2}>
                        &times;
                    </a>
                    <div className='progress__popup-data__container'>
                        <Footer />
                    </div>
                    {/* Ajouts de mon profil */}
                </div>
            </Popup>

        </div>
    );
};

export default ControlledPopup;