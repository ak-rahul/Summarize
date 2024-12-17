import React from 'react';
import { ReactTyped } from 'react-typed';
import styled from 'styled-components';

const Hero = () => {
  return (
    <PageContainer>
      <HeroContent>
        <MottoText>Welcome to the Summarizer App</MottoText>
        <SubText>
          <ReactTyped
            strings={["Simplifying your reading experience..."]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </SubText>
        <GetStartedButton>Get Started</GetStartedButton>
      </HeroContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* Full page black background */
`;

const HeroContent = styled.div`
  text-align: center;
  width: 85vw;
  height: 40vh;
  padding: 20px;
  box-shadow: 0 0 10px 5px rgba(0, 223, 154, 0.7); /* Green halo around the box */
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3); /* Transparent black background */
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px 10px rgba(0, 223, 154, 0.9); /* Larger green halo on hover */
  }
`;

const MottoText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff; /* White text */
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff; /* White text */
  margin-bottom: 2rem;
`;

const GetStartedButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #00df9a; /* Green background */
  border: 2px solid #00df9a; /* Green border */
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 
                0 0 10px 5px rgba(0, 223, 154, 0.7); /* Green halo glow */
    background-color: #00b37a; /* Darker green background on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px 5px rgba(0, 223, 154, 0.7); /* Green halo on focus */
  }
`;

export default Hero;
