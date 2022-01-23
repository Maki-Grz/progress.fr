import React from 'react'
import './project.css'

const Project = () => {
    return (
        <div className='progress__project section__padding' id='projects'>
            <h1>Projets</h1>
            <div className='progress__project-slider'>
                <ul className='progress__project-slider__list'>
                    <li>
                        <h4 className='gradient__text'>Klee Bot</h4>
                        <p>Développement d’un logiciel (Bot) sur le réseau social Discord en JavaScript avec Node.js pour le serveur Discord et la chaîne YouTube: Le Bataillon De l’Animation</p>
                    </li>
                    <li>
                        <h4 className='gradient__text'>ENT Scrapper</h4>
                        <p>Algorithme de récupération de données sur l'ENT Oise avec la librairie Puppeteer en JavaScript. Cet algorithme permet de récupérer les informations des profils des utilisateurs via l'annuaire du site Internet en moins de 50 secondes pour  1 537 résultats.</p>
                    </li>
                    <li>
                        <h4 className='gradient__text'>Sushi Bot</h4>
                        <p>Sushi est l'un de mes plus gros projets, avec près de 15 000 personnes utilisant le bot et près de 50 commandes. Une maintenance de indeterminer est en cours pour reprendre le développement de zéro et ainsi l'adapter aux nouvelles versions de Discord.</p>
                    </li>
                    <li>
                        <h4 className='gradient__text'>Znetwork Bot</h4>
                        <p>Znetwork permet à l'utilisateur de configurer un salon qui est relier à un "canal" lui-même relier à  d'autres salons de serveurs différents pour former un seul et même canal de discussion.</p>
                    </li>
                    <li>
                        <h4 className='gradient__text'>Progress</h4>
                        <p>Création, développement, réalisation et administration 100% personnels de ce site web en utilisant des technologies web avancées et récentes comme React JS.</p>
                    </li>

                    {/* Clone */}
                    <li>
                        <h4 className='gradient__text'>Klee Bot</h4>
                        <p>Développement d’un logiciel (Bot) sur le réseau social Discord en JavaScript avec Node.js pour le serveur Discord et la chaîne YouTube: Le Bataillon De l’Animation</p>
                    </li>
                    <li>
                        <h4 className='gradient__text'>ENT Scrapper</h4>
                        <p>Algorithme de récupération de données sur l'ENT Oise avec la librairie Puppeteer en JavaScript. Cet algorithme permet de récupérer les informations des profils des utilisateurs via l'annuaire du site Internet en moins de 50 secondes pour  1 537 résultats.</p>
                    </li>
                    <li>
                        <h4 className='gradient__text'>Sushi Bot</h4>
                        <p>Sushi est l'un de mes plus gros projets, avec près de 15 000 personnes utilisant le bot et près de 50 commandes. Une maintenance de indeterminer est en cours pour reprendre le développement de zéro et ainsi l'adapter aux nouvelles versions de Discord.</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Project
