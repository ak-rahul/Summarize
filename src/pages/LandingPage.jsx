import React, { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars-2';

const LandingPage = () => {
  const heroRef = useRef(null); // Ref for Hero section
  const aboutRef = useRef(null); // Ref for About section

  // Function to handle scrolling to a section
  const scrollToSection = (section) => {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
      <LandingPageContainer>
        <Header 
          onHeroClick={() => scrollToSection(heroRef)} // Pass Hero scroll function
          onAboutClick={() => scrollToSection(aboutRef)} // Pass About scroll function
        />
        <Hero ref={heroRef} /> {/* Attach Hero ref */}
        <About ref={aboutRef} /> {/* Attach About ref */}
      </LandingPageContainer>
    </Scrollbars>
  );
};

const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  background-color: black;
  overflow-x: hidden;
`;

export default LandingPage;