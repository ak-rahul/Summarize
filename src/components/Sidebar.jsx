import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaFileAlt, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal'; // Import the modal

const Sidebar = () => {
  const [isModalVisible, setModalVisible] = useState(false); // State to control the modal visibility
  const navigate = useNavigate();

  // Handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Show the logout confirmation modal
  const handleLogoutClick = () => {
    setModalVisible(true);
  };

  // Close the logout modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SidebarContainer>
        <SidebarButton onClick={() => handleNavigate('/dashboard')}>
          <FaHome />
          <span>Dashboard</span>
        </SidebarButton>
        <SidebarButton onClick={() => handleNavigate('/reports')}>
          <FaFileAlt />
          <span>Reports</span>
        </SidebarButton>
        <SidebarButton onClick={() => handleNavigate('/settings')}>
          <FaCog />
          <span>Settings</span>
        </SidebarButton>
        <SidebarButton onClick={() => handleNavigate('/dashboard/profile')}>
          <FaUser />
          <span>Profile</span>
        </SidebarButton>
        <SidebarButton onClick={handleLogoutClick}>
          <FaSignOutAlt />
          <span>Logout</span>
        </SidebarButton>
      </SidebarContainer>

      {/* Render LogoutModal if it's visible */}
      <LogoutModal isVisible={isModalVisible} onClose={closeModal} />
    </>
  );
};

// Styled Components
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  width: 10%;
  height: 100%;
  padding: 1.5rem 0.8rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-right: 1px solid #00df9a;
`;

const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin: 0.4rem 0;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  transition: all 0.3s ease;

  & span {
    flex-grow: 1;
    text-align: left;
  }

  &:hover {
    background-color: rgba(0, 223, 154, 0.1);
    color: #00df9a;
  }
`;

export default Sidebar;
