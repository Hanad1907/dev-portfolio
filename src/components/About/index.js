import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img
                    src={require('../../assets/images/Screen.png')}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div className="about-text">
                <p className="highlighted-text">
                    <span className="bold-text">Hello, I'm Hanad!</span> I'm a dedicated and curious Cyber Security student with a passion for exploring the security landscape and discovering new opportunities.
                </p>
                <p className="highlighted-text">
                    <span className="bold-text">In my exploratory journey,</span> I constantly seek innovation and solutions that protect and empower digital solutions.
                </p>
            </div>
        </section>
    );
}

export default About;
