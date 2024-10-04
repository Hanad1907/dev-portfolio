import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
            </div>
            <div className="resume-content">
                <div className="skills-container">
                    <div className="skills-category">
                        <h5>Front-End Proficiencies</h5>
                        <ol>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>Version Control / Git</li>
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
                        <h5>Cybersecurity Tools & Proficiencies</h5>
                        <ol>
                            <li>Nmap</li>
                            <li>Wireshark</li>
                            <li>Metasploit</li>
                            <li>Burp Suite</li>
                            <li>Hashcat</li>
                            <li>Nessus</li>
                            <li>OWASP ZAP</li>
                            <li>Splunk</li>
                            <li>Kali Linux</li>
                            <li>Hydra</li>
                            <li>John the Ripper</li>
                            <li>Reverse Engineering</li>
                            <li>Penetration Testing</li>
                        </ol>
                    </div>
                    <div className="skills-category">
                        <h5>Cloud & DevOps Proficiencies</h5>
                        <ol>
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>GitLab CI/CD</li>
                            <li>Terraform</li>
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
            </div>
        </section>
    );
}

export default Resume;
