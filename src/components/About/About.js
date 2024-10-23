import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/images/About.png';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f8f9fa; /* Light background for modern feel */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: #333;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center; /* Centers text vertically */
  justify-content: space-between; /* Ensures proper spacing between image and text */
  flex-wrap: wrap; /* Makes the layout responsive */
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AboutImage = styled.img`
  width: 80%; /* Reduce image size */
  height: auto;
  border-radius: 8px; /* Adds smooth edges for a modern look */
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: justify;
  max-width: 600px;
`;

const About = () => {
    return (
        <AboutContainer>
            <Title>About Archadius Properties</Title>
            <Content>
                <ImageContainer>
                    <AboutImage src={aboutImage} alt="About Archadius Properties" />
                </ImageContainer>
                <TextContainer>
                    <Description>
                        Archadius Properties is a professionally managed group of technology innovators and engineers. We are an emerging leader in the engineering and construction segment in India. Our team has executed various project works and has established a strong reputation within our domain for executing large, complex projects and providing turnkey solutions to our clients.
                    </Description>
                    <Description>
                        At Archadius, we believe in building your visions. Our expertise lies in transforming your ideas into reality, creating spaces that are not just structurally sound but also aesthetically pleasing and functionally efficient.
                    </Description>
                </TextContainer>
            </Content>
        </AboutContainer>
    );
};

export default About;
