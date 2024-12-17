import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import logo from "../assets/logo.jpeg";  // Your logo image

export default function Header() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Function to navigate to the Login page
  const handleLoginClick = () => {
    navigate("/login");  // Navigate to the Login page
  };

  return (
    <HeaderContainer>
      <Logo>
        {/* Use correct path depending on where your image is stored */}
        <img src={logo} alt="Summarizer Logo" />
      </Logo>
      <NavContainer>
        <NavLinksCenter>
          <NavLink>
            <Button>Home</Button>
          </NavLink>
          <NavLink>
            <Button>About</Button>
          </NavLink>
          <NavLink>
            <Button>Contact</Button>
          </NavLink>
        </NavLinksCenter>
        <NavLinkRight>
          <Button onClick={handleLoginClick}>Login</Button> {/* Add onClick handler */}
        </NavLinkRight>
      </NavContainer>
    </HeaderContainer>
  );
}

// Styled Components

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;  /* Black background */
  color: #fff;  /* White text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);  /* Slight shadow for contrast */
`;

const Logo = styled.div`
  img {
    width: 80px;  /* Adjusted width of the logo */
    height: auto;  /* Maintain aspect ratio */
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
  flex-grow: 1;  /* Takes up the remaining space to push the login button to the right */
`;

const NavLink = styled.li``;

const NavLinkRight = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;  /* White text color for buttons */
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: 2px solid #00df9a;  /* Green border for buttons */
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #00df9a;  /* Green background on hover */
    color: #000;  /* Black text color when hovered */
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;  /* Remove focus outline */
  }
`;
