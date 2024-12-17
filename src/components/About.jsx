import React, { forwardRef } from 'react';
import styled from 'styled-components';

const About = forwardRef((props, ref) => {
  return (
    <AboutSection ref={ref}>
      <AboutContent>
        <SectionTitle>About Us</SectionTitle>
        <DescriptionText>
          The Summarizer App is designed to make your reading experience effortless. Whether you're a student, professional, or casual reader,
          our app simplifies and shortens long articles, research papers, and more to save you time. We use cutting-edge algorithms to ensure
          high-quality summaries without compromising important details. Dive into the future of reading!
          <br /><br />
          As information continues to grow at an exponential rate, the time we spend consuming and processing written content is ever-increasing. 
          The Summarizer App serves as your time-saving companion in the digital world. It helps you focus on the key points of an article or report
          without having to read the entire text. 
          <br /><br />
          Whether you need a quick summary of a lengthy research paper for your studies or an executive summary of an article for work, our 
          app ensures you're not bogged down by unnecessary details. With just a few clicks, you can get concise, digestible summaries that 
          allow you to make quicker, more informed decisions.
          <br /><br />
          At the heart of the Summarizer App lies our intelligent algorithm, which uses natural language processing (NLP) techniques to analyze the 
          text, identify its main ideas, and deliver a shortened version without losing key information. Our app offers various customization 
          options to ensure the summary fits your needs – from simple overviews to more in-depth synopses.
          <br /><br />
          We believe that everyone should have access to more efficient reading tools. With the Summarizer App, you're empowered to read more 
          efficiently, absorb key information faster, and stay ahead in a fast-paced world. Whether you're preparing for exams, reviewing 
          reports, or simply seeking to improve your reading experience, we're here to help.
          <br /><br />
          Join thousands of other users who have already embraced a smarter way of reading. Experience the future of content consumption 
          today, and unlock the power of summaries with the Summarizer App!
        </DescriptionText>
      </AboutContent>
    </AboutSection>
  );
});

export default About;

// Styled Components

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const AboutContent = styled.div`
  text-align: center;
  width: 92vw;
  padding: 10px;
  margin-top: 20%;
  box-shadow: 0 0 10px 5px rgba(0, 223, 154, 0.7);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
  margin-top: 10%;
  &:hover {
    box-shadow: 0 0 20px 10px rgba(0, 223, 154, 0.9);
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #00df9a;
`;

const DescriptionText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #ddd;
  line-height: 1.6;
`;
