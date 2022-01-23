import React from 'react'
import './skill.css'
import { discord, electron, javascript, git, mongodb, nodejs, react, npm, github, netlify } from './imports'

const Skill = () => {
    return (
        <div className='progress__skill section__padding' id='skills'>
            <h1 className='gradient__text'>Compétences</h1>
            <div className='progress__skill-container'>
                <div className='shadow__global'>
                    <img src={discord} alt="Discord" />
                    <h4 className='gradient__text'>Discord</h4>
                    <p>Je maîrise la librairie DiscordJS<br />Capable de créer des Bots sur l'application pour n'importe quelles situations (modération, fun, niveaux), de m'occuper de la configuration et de l'hébergement.</p>
                </div>
                <div className='shadow__global'>
                    <img src={electron} alt="Electron" />
                    <h4 className='gradient__text'>Electron</h4>
                    <p>Fonctionnant grâce à NodeJS basé sur le moteur V8 de Google ce framework permet de créer une application web et de faciliter le déployement sur d'autres appareils.</p>
                </div>
                <div className='shadow__js'>
                    <img src={javascript} alt="Javascript" />
                    <h4 className='gradient__text'>Javascript</h4>
                    <p>JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web.</p>
                </div>
                <div className='shadow__global'>
                    <img src={git} alt="Git" />
                    <h4 className='gradient__text'>Git</h4>
                    <p>J'utilise Git pour versionner les projets et de maintenir à jour le code simplement et efficacement.</p>
                </div>
                <div className='shadow__global'>
                    <img src={mongodb} alt="Mongodb" />
                    <h4 className='gradient__text'>MongoDB</h4>
                    <p>MongoDB est l'un des meilleurs système de gestion de base de données actuel. Son orientation objet permet un stockage rapide, sécurisé et flexible de vos données.</p>
                </div>
                <div className='shadow__nodejs'>
                    <img src={nodejs} alt="NodeJS" />
                    <h4 className='gradient__text'>NodeJS</h4>
                    <p>Nodejs est utilisé comme base dans mes projets. Cet environnement me permet de développer des bots, des sites web et ainsi que des applications.</p>
                </div>
                <div className='shadow__react'>
                    <img src={react} alt="React" />
                    <h4 className='gradient__text'>React</h4>
                    <p>J'utilise React pour fournir un code propre et organisé. Facilement modulaire et flexible adapté aux modifications en temps réel.</p>
                </div>
                <div className='shadow__global'>
                    <img src={npm} alt="Npm" />
                    <h4 className='gradient__text'>NPM</h4>
                    <p>Je maîtrise le gestionnaire de packages officiel de Node.js. Cela me permet de travailler plus efficacement et plus rapidement sans avoir à re-inventer ce qui existe déjà.</p>
                </div>
                <div className='shadow__github'>
                    <img src={github} alt="Github" />
                    <h4 className='gradient__text'>Github</h4>
                    <p>Cette application me permet de contrôler l'accès et les fonctionnalités destinées à la collaboration telles que le suivi des bogues, les demandes de fonctionnalités, la gestion des tâches et un wiki pour chaque projet.</p>
                </div>
                <div className='shadow__global'>
                    <img src={netlify} alt="Netlify" />
                    <h4 className='gradient__text'>Netlify</h4>
                    <p>Netlify me permet d'héberger rapidement mes sites Web et de déployer les mises à jour plus efficacement.</p>
                </div>
            </div>
        </div>
    )
}

export default Skill