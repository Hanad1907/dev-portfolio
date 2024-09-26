import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
            </div>
            <div className="skills-container">
                <div className="skills-category">
                    <h5>Front-End Proficiencies</h5>
                    <ol>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>version control/Git</li>
                        <li>Figma</li>
                        <li>Miro</li>
                        <li>Tableau</li>
                    </ol>
                </div>
                <div className="skills-category">
                    <h5>Back-End Proficiencies</h5>
                    <ol>
                        <li>Java</li>
                        <li>NodeJS</li>
                        <li>Python</li>
                    </ol>
                </div>
                <div className="skills-category">
                    <h5>Dev Tool Proficiencies</h5>
                    <ol>
                        <li>Git</li>
                        <li>AWS</li>
                        <li>Nmap</li>
                        <li>Hydra</li>
                        <li>OWASP</li>
                        <li>XssBeef</li>
                        <li>Burp Suite</li>
                        <li>Hashcat</li>
                        <li>Nessus</li>
                        <li>Metasploit</li>
                        <li>Reverse Engineering</li>
                        <li>Pentesting</li>
                        <li>Splunk</li>
                    </ol>
                </div>
                <div className="skills-category">
                    <h5>Database Proficiencies</h5>
                    <ol>
                        <li>MySQL</li>
                        <li>PostgreSQL (Kali Linux Based)</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Resume;
