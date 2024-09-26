import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'iPhone Calculator',
            description: "This project showcases an iPhone calculator replica, meticulously crafted using JavaScript, HTML, and CSS.",
            image: 'iphoneimage.png',
            technologies: ['HTML/CSS', 'JavaScript'],
            github: 'https://github.com/Hanad1907/IPhone-Calculator'
        },
        {
            name: 'Vulnerability Scanner',
            description: "This Vulnerability scanner is a user-friendly tool for identifying open ports and assessing OS vulnerabilities.",
            image: 'Scanner.png',
            technologies: ['Python', 'Git'],
            github: 'https://github.com/Hanad1907/Py.Vulnscanner'
        },
        {
            name: 'Firewall Guard',
            description: "Py.Firewallguard is a customizable firewall designed to block network scans, stop intrusions, and enhance network security with a user-friendly GUI.",
            image: 'Firewall.png',
            technologies: ['Python', 'Tkinter', 'Git'],
            github: 'https://github.com/Hanad1907/Py.Firewallguard'
        }
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
