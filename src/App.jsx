import React from 'react';
import './App.css'

import { Navbar, Brand, Project, Skill, Experience, Sidebar } from './components/index'
import { Header, Space, About, Footer } from './containers/index'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
                <About />
            </div>
            <Sidebar />
            <Space /> {/* Espace */}
            <Brand />
            <Space /> {/* Espace */}
            <Skill />
            <Project />
            <Experience />
            <Space /> {/* Espace */}
            <Footer />
        </div>
    )
}

export default App
