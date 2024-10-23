import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1c1d1f;
  margin-top: -4rem; /* Add spacing above the footer */
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const PoweredBy = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Archadius Logo" />
      <PoweredBy>Powered by Dzyncartel</PoweredBy>
    </FooterContainer>
  );
};

export default Footer;
