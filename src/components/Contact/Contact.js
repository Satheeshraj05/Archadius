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

const ContactTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-spacing: 0 2rem; /* Space between rows */
  @media (max-width: 768px) {
    display: block;
  }
`;

const TableRow = styled.tr`
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const TableCell = styled.td`
  text-align: center;
  padding: 1rem;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
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
            <ContactTable>
                <tbody>
                    <TableRow>
                        <TableCell>
                            <IconWrapper>
                                <i className="fas fa-phone"></i>
                            </IconWrapper>
                            <ContactTitle>Phone</ContactTitle>
                            <ContactText>+91 98456 13141</ContactText>
                            <ContactText>+91 99443 65649</ContactText>
                        </TableCell>
                        <TableCell>
                            <IconWrapper>
                                <i className="fas fa-envelope"></i>
                            </IconWrapper>
                            <ContactTitle>Email</ContactTitle>
                            <ContactText>archadius2022@gmail.com</ContactText>
                            <ContactText>archadius2023@gmail.com</ContactText>
                        </TableCell>
                        <TableCell>
                            <IconWrapper>
                                <i className="fas fa-map-marker-alt"></i>
                            </IconWrapper>
                            <ContactTitle>Address</ContactTitle>
                            <ContactText>Manimuthar Complex 4/254, Mettupalayam</ContactText>
                            <ContactText>Rd, K. Vadamadurai, Coimbatore 641017</ContactText>
                        </TableCell>
                    </TableRow>
                </tbody>
            </ContactTable>
        </ContactContainer>
    );
};

export default Contact;
