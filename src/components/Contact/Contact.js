import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: left; /* Left align the title */
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactItem = styled.div`
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  font-size: 1rem;
`;

const IconWrapper = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem; /* Adjust icon size */
`;

const Contact = () => {
    return (
        <ContactContainer>
            <Title>Get In Touch With Us</Title>
            <ContactInfo>
                <ContactItem>
                    <IconWrapper>
                        <i className="fas fa-phone"></i>
                    </IconWrapper>
                    <ContactTitle>Phone</ContactTitle>
                    <ContactText>+91 98456 13141</ContactText>
                    <ContactText>+91 99443 65649</ContactText>
                </ContactItem>
                <ContactItem>
                    <IconWrapper>
                        <i className="fas fa-envelope"></i>
                    </IconWrapper>
                    <ContactTitle>Email</ContactTitle>
                    <ContactText>archadius2022@gmail.com</ContactText>
                    <ContactText>archadius2023@gmail.com</ContactText>
                </ContactItem>
                <ContactItem>
                    <IconWrapper>
                        <i className="fas fa-map-marker-alt"></i>
                    </IconWrapper>
                    <ContactTitle>Address</ContactTitle>
                    <ContactText>Manimuthar Complex 4/254, Mettupalayam</ContactText>
                    <ContactText>Rd, K. Vadamadurai, Coimbatore 641017</ContactText>
                </ContactItem>
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
