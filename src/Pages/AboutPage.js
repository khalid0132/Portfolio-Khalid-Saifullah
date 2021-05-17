import React from 'react';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import Title from '../components/Title';

import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const AboutPage = () => {
    return (
        <div className="AboutPage">
         <Title title={'About Me'} span={'About Me'} />
         <ImageSection></ImageSection>
         <Title title={'My Skills'} span={'My Skills'} />
         <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'HTML'} progress={'82%'} width={'82%'} />
                <SkillsSection skill={'CSS'} progress={'73%'} width={'73%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'React Native'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Node Js'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Web Design'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'40%'} width={'40%'} />
        </div>
        <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={intelligence} title={'HTML, CSS and JavaScript Solution'} 
                text={'have very good knowledge on HTML5, CSS3 and JavaScript, ES6, Bootstrap, Material UI'}
                />

                <ServicesSection image={gamedev} title={'React Js and MongoDB'} 
                text={'Have done my full-stack project by using React and MongoDB '}
                />

                <ServicesSection image={design} title={'Web and UX/UI Design'} 
                text={'Design is my passion where I use Figma to make my page visible'}
                />

                
            </div>
        </div>
    );
};

export default AboutPage;