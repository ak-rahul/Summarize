import React from 'react';
import styled from 'styled-components';
import { FaUpload } from 'react-icons/fa';

const Summarizer = () => {
  return (
    <StatisticsContainer>
      <Title>Summarizer</Title>
      <UploadButton>
        <FaUpload />
        <span>Upload PDF</span>
      </UploadButton>
    </StatisticsContainer>
  );
};

// Styled Components
const StatisticsContainer = styled.div`
  background-color: #000;
  padding: 2rem;
  color: #fff;
  width: 84%;
  box-shadow: 0 4px 10px rgba(0, 223, 154, 0.5);
  border-top: 2px solid #00df9a;  /* Keep the top border */
  /* Removed left border */
  height: 93%;  /* Set the maximum height */
  overflow-y: auto;  /* Allow vertical scrolling */
`;

const Title = styled.h2`
  text-align: center;
  color: #00df9a;
  margin-bottom: 2rem;
`;

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00df9a;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b57f;
  }

  & svg {
    margin-right: 0.8rem;
    font-size: 1.5rem;
  }

  & span {
    font-weight: bold;
  }
`;

export default Summarizer;
