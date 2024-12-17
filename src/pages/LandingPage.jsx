import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header />
      <Hero />
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  min-height: 100vh;  /* Ensure it takes up at least the full viewport height */
  background-color: #0000;  /* Black background */
  color: #fff;  /* White text color */
  margin: 0;  /* Remove default margin */
  padding: 0;  /* Remove any padding */
  display: flex;
  flex-direction: column;  /* Stack the header and hero */
`;

export default LandingPage;

