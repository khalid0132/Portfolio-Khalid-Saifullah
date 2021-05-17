import React from 'react';
import ContactItem from '../components/ContactItem';
import Title from '../components/Title';

import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

const ContactPage = () => {
    return (
        <div>
        <div className="title">
            <Title title={'About Me'} span={'About Me'} />
        </div>
        <div className="ContactPage">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.1662393501833!2d17.95067543527566!3d59.21632138487853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f70e5f50563db%3A0xd8cb77a0d662bfa8!2sVis%C3%A4ttrav%C3%A4gen%2021%2C%20141%2050%20Huddinge!5e0!3m2!1ssv!2sse!4v1621238658060!5m2!1ssv!2sse" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+46 (0) 737139307'} title={'Phone'}/>
                <ContactItem icon={email} text1={'mksaifullah0132@gmail.com'} text2={'khalid0132@gmail.com'} title={'Email'}/>
                <ContactItem icon={location} text1={'Visättravägen 21, Huddinge-14150'} text2={'Sweden'} title={'Address'}/>
            </div>
        </div>
    </div>
    );
};

export default ContactPage;