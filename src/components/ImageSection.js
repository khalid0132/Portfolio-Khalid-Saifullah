import React from 'react';
import about from '../img/khalid1.jpg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
        <div className="img">
            <img src={about} style={{height:'270px', width:'170px'}} alt=""/>
        </div>
        <div className="about-info">
            <h4>I am<span> Khalid Saifullah</span></h4>
            <p className="about-text">
            As a person, I am safe and calm. I have an analytical and open disposition that makes it easy for me to get in touch with people.
            My work is very goal-oriented. If I decide to go through something, I will do it if no one convinces me that I am wrong. 
            What also makes me believe that I am the right person for you is that I am knowledgeable, enthusiastic and full of initiative and that I am a very good team worker.
            </p>
            <div className="about-details">
                <div className="left-section">
                    <p>Full Name</p>
                    <p>Nationality</p>
                    <p>Languages</p>
                    <p>Address</p>
                    <p>Mobile</p>
                    <p>E-mail:</p>
                </div>
                <div className="right-section">
                    <p>: Khalid Saifullah</p>
                    <p>: Swedish, Bangladeshi</p>
                    <p>: Swedish, English, Bengali, Hindi, Urdu, Arabic</p>
                    <p>: Visättravägen 21, Huddinge-14150, Stockholm, Sweden</p>
                    <p>: +46 (0) 737139307</p>
                    <p>: mksaifullah0132@gmail.com  /  khalid0132@gmail.com</p>
                </div>
            </div>
            <a target="_blank" href = "https://drive.google.com/file/d/1r2E05YkZyJ0ET1-f6vFlFAln8qdSsRRp/view">
            <button className="btn">Download CV</button> </a>
        </div>
    </div>
    );
};

export default ImageSection;