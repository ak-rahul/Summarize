import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'; // Close button icon
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig'; // Assuming you're using Firebase for auth

const LogoutModal = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login'); // Navigate to login page after logging out
    }).catch((error) => {
      console.error("Error logging out: ", error);
    });
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <ModalTitle>Are you sure you want to log out?</ModalTitle>
        <ModalActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleLogout} confirm>Yes, Log Out</Button>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  width: 400px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ff4444;
  }
`;

const ModalTitle = styled.h3`
  color: #fff;
  margin-bottom: 1.5rem;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: ${({ confirm }) => (confirm ? '#ff4444' : '#00df9a')};
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ confirm }) => (confirm ? '#ff2a2a' : '#00b57f')};
  }
`;

export default LogoutModal;
