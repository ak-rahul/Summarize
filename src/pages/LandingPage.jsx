import React, { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars-2';


const LandingPage = () => {
  const aboutRef = useRef(null); // Create a ref for About component

  // Function to handle the scroll to About section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
      <LandingPageContainer>
        <Header onAboutClick={scrollToAbout} />  {/* Pass scroll function to Header */}
        <Hero />
        <About ref={aboutRef} />  {/* Pass ref to About component */}
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
