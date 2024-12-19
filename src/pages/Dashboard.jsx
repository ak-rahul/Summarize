import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Statistics from '../components/Statistics';
import styled from 'styled-components';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Navbar />
      <Sidebar />
      <MainContent>
        <Statistics />
      </MainContent>
    </DashboardContainer>
  );
}

// Styled Components

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #f4f4f4;
  justify-content: right;
`;

