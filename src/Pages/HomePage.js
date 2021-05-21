import React from 'react';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from 'typewriter-effect';


// import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    <span> Khalid Saifullah </span>
                     is here...
                </h1>
                    <h4 className="text-center">
                        <Typewriter 
                            options={{
                                strings: ['Frontend Developer', 'React and JavaScript Developer', 'ICT Expert'],
                                         autoStart: true,
                                        loop: true,
                                    }}
                                    />
                                </h4>
                <p className="h-sub-text">
                    who is working as a frontend developer at Zisson AB in Stockholm branch, Sweden which is norwegian based IT company. I'm looking for ways to put my IT knowledge and skills to use in a work environment.
                    My IT education and  present work experience with some projects has given me a great foundation of knowledge and skills in development area.
                    I am able to catch new technologies quickly and apply those abilities to improve my work smoothly. Additionally, I'm good at JavaScript, React, HTML, CSS and database like MongoDB.

                </p>
                <div className="icons">
                    <a
                        className="icon-holder"
                        href="https://www.facebook.com/khalid.saifullah1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a
                        className="icon-holder"
                        href="https://github.com/khalid0132"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a
                        className="icon-holder"
                        href="https://www.linkedin.com/in/khalid-saifullah-689298148/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon lk" />
                    </a>

                </div>
            </header>
        </div>
    );
};

export default HomePage;