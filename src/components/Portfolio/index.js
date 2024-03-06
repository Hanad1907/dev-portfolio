import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Australian Travel Guide ',
            description: 'This is a tour-guide for people that want to visit Australia with destinations to visit and what to do when they are in that specific city',
            image: 'Australia.png',
            technologies: ['HTML/CSS'],
            github: 'https://github.com/Hanad1907/Australian-Travel-Guide'
        },
        {
            name: 'Village Simulator',
            description: 'A Village Simulator game where you can click your way around, buy houses, swords, and defeat monsters. In order for monsters to appear, you have to click on trees.',
            image: 'Village.png',
            technologies: ['HTML/CSS', 'JavaScript'],
            github: 'https://github.com/Hanad1907/Landsby-Simulator'
        },
        {
            name: 'iPhone Calculator',
            description: "This project showcases an iPhone calculator replica, meticulously crafted using JavaScript, HTML, and CSS.",
            image: 'iphoneimage.png',
            technologies: ['HTML/CSS', 'JavaScript'],
            github: 'https://github.com/Hanad1907/IPhone-Calculator'
        },
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    {projects.map((project, index) => (
                        <li key={index} className="padding">
                            <Project projects={project} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
