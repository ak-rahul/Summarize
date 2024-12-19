import React, { useState } from 'react';
import styled from 'styled-components';

const Summarizer = () => {
  const [pdfFile, setPdfFile] = useState(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <SummarizerContainer>
      <Title>PDF Summarizer</Title>
      <UploadSection>
        <input 
          type="file" 
          accept="application/pdf" 
          id="file-upload" 
          style={{ display: 'none' }} 
          onChange={handleFileUpload}
        />
        <UploadButton htmlFor="file-upload">Upload PDF</UploadButton>
        {pdfFile && <FileInfo>{pdfFile.name}</FileInfo>}
      </UploadSection>
    </SummarizerContainer>
  );
};

// Styled Components
const SummarizerContainer = styled.div`
  background-color: #000;
  padding: 2rem;
  color: #fff;
  width: 84%;
  box-shadow: 0 4px 10px rgba(0, 223, 154, 0.5);
  border-top: 2px solid #00df9a;
  border-left: 2px solid #00df9a;
  height: 93%;
  overflow-y: auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #00df9a;
  margin-bottom: 2rem;
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const UploadButton = styled.label`
  background-color: #00df9a;
  color: #000;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00bf89;
  }
`;

const FileInfo = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: bold;
`;

export default Summarizer;
