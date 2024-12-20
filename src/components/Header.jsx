import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Your logo image

const Header = ({ onHeroClick, onAboutClick }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the Login page
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Summarizer Logo" />
      </Logo>
      <NavContainer>
        <NavLinksCenter>
          <NavLink>
            <Button onClick={onHeroClick}>Home</Button> {/* Scroll to Hero */}
          </NavLink>
          <NavLink>
            <Button onClick={onAboutClick}>About</Button> {/* Scroll to About */}
          </NavLink>
          <NavLink>
            <Button>Contact</Button>
          </NavLink>
        </NavLinksCenter>
        <NavLinkRight>
          <Button onClick={handleLoginClick}>Login</Button>
        </NavLinkRight>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;  /* Black background */
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);  /* Slight shadow for contrast */
  position: fixed;  /* Keep the header fixed at the top */
  top: 0;  /* Position at the top of the screen */
  left: 0;
  width: 94vw;
  z-index: 1000;  /* Ensure it's above other content */
`;

const Logo = styled.div`
  img {
    width: 60px;
    height: auto;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const NavLinksCenter = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex-grow: 1;
`;

const NavLink = styled.li``;

const NavLinkRight = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: 0px solid #00df9a;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #00df9a;
    color: #000;
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
