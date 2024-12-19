import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <NavbarContainer>
      <Logo onClick={() => handleNavigate('/dashboard')}>Summarize</Logo>
      <NavLinks>
        <NavItem onClick={() => handleNavigate('/dashboard')}>Home</NavItem>
        <NavItem onClick={() => handleNavigate('/reports')}>Reports</NavItem>
        <NavItem onClick={() => handleNavigate('/settings')}>Settings</NavItem>
      </NavLinks>
      <NavActions>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <NotificationIcon>
          <FaBell />
        </NotificationIcon>
        <UserIcon>
          <FaUserCircle onClick={() => handleNavigate('/profile')} />
        </UserIcon>
      </NavActions>
    </NavbarContainer>
  );
};

// Styled Components

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  color: #00df9a;

  &:hover {
    color: #00c776;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #00df9a;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SearchIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #00df9a;
  }
`;

const NotificationIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #00df9a;
  }
`;

const UserIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    color: #00df9a;
  }
`;

export default Navbar;
