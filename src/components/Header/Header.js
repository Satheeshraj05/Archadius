import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close menu
import logo from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px; /* Move below the close button */
    right: 10px; /* Add space to the right */
    background-color: rgba(50, 50, 50, 0.8); /* Greyish-black with transparency */
    width: calc(100% - 20px); /* Full width minus some padding */
    height: calc(100vh - 60px); /* Full height minus the header */
    align-items: flex-end; /* Right-align the content */
    justify-content: center; /* Center the items vertically */
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    padding: 1rem; /* Add padding for better spacing */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff; /* Default color for mobile view */
  font-weight: 500;
  cursor: pointer;
  margin: 0.5rem 0; /* Add margin for spacing between links */

  &:hover {
    color: #ddd; /* Lighten color on hover */
  }

  @media (min-width: 769px) {
    color: #000; /* Change text color to black for desktop view */
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking
    }
  };

  return (
    <HeaderContainer>
      <NavLink onClick={() => scrollToSection('home')}>
        <Logo src={logo} alt="Archadius Properties" />
      </NavLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Nav isOpen={isOpen}>
        <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
