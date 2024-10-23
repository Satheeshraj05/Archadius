import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/images/About.png';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: #333;
`;

const ContentTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for desktop view */
  gap: 2rem;
  align-items: center; 
  justify-content: center; /* Centers the content within their cells */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack image and text vertically on mobile */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Centers the image vertically in its cell */
`;

const AboutImage = styled.img`
  width: 70%; 
  height: auto;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: left-align;
  align-items: left-ali; /* Centers the text vertically in its cell */
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  max-width: 600px;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Archadius Properties</Title>
      <ContentTable>
        <ImageContainer>
          <AboutImage src={aboutImage} alt="About Archadius Properties" />
        </ImageContainer>
        <TextContainer>
          <Description>
            Archadius Properties is a professionally managed group of technology innovators and engineers. We are an emerging leader in the engineering and construction segment in India. Our team has executed various project works and has established a strong reputation within our domain for executing large, complex projects and providing turnkey solutions to our clients.
          </Description>
        </TextContainer>
      </ContentTable>
    </AboutContainer>
  );
};

export default About;
