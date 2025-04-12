import React from 'react'
import './DomainPage.css'
import { useState } from 'react';
import DomainWebDev from '../assets/DomainWebDev.svg';
import DomainAIML from '../assets/DomainAIML.svg';
import DomainAppDev from '../assets/DomainAppDev.svg';
import DomainDroneIoT from '../assets/DomainDroneIoT.svg';

const DomainPage = () => {

    const [selectedDomain, setSelectedDomain] = useState('webdev');
    const domainData = {
        webdev: {
            title: "Web Development",
            description: "Web development (webdev) involves creating and maintaining websites or apps, covering frontend (UI/UX with HTML, CSS, JavaScript) and backend (server, database), and full-stack (both).",
            image: DomainWebDev
        },
        ai: {
            title: "Artificial Intelligence / Machine Learning",
            description: "AI stimulates human intelligence, while ML, a subset of AI, enables systems to learn from data without explicit programming. Both power automation, predicitve analytics, and NLP",
            image: DomainAIML
        },
        appdev: {
            title: "App Development",
            description: "App development involves creating apps for smartphones and tablets, including native (Android: Kotlin/Java, iOS: Swift) and cross-platform (React Native, Flutter).",
            image: DomainAppDev
        },
        droneiot: {
            title: "Drone and IoT",
            description: "Drones and IoT connect smart devices for real-time data and automation. IoT enables drone control, navigation, and data transfer, benefitting surveillance, agriculture, and logistics.",
            image: DomainDroneIoT
        }
    };

    const { title, description, image } = domainData[selectedDomain];

    return (
        <div>
            <div className="domain-page">

                <div className="white-box">

                    <div className="main-content"> {/* Black-box */}

                        <div className="main-content-left">

                            <div className="header">
                                <div className="header-logo" />
                                <div className="header-name">DevLabs</div>
                            </div>

                            <h1>we specialize in.</h1>

                            <div className="main-content-domains">

                                <div className="domain-links">
                                    <button onClick={() => setSelectedDomain('webdev')}>Web Development</button>
                                    <button onClick={() => setSelectedDomain('ai')}>AI / ML</button>
                                    <button onClick={() => setSelectedDomain('appdev')}>App Development</button>
                                    <button onClick={() => setSelectedDomain('droneiot')}>Drone and IoT</button>
                                </div>
                                
                            </div>

                        </div>

                        <div className="main-content-right">
                            <img src={image} alt={title} />
                        </div>

                        <p className="domain-details">{description}</p>
                        
                    </div>

                     
                </div>

            </div>
        </div >
    )
}

export default DomainPage

