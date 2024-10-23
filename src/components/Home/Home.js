import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/Homepage.png';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #2e3330;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
`;

const Home = () => {
    return (
        <HomeContainer>
            <HeroImage src={heroImage} alt="Modern Architecture" />
            <HeroText>
                <Title>Let's Make Your Best Home Ever</Title>
                <Subtitle>Archadius Properties</Subtitle>
            </HeroText>
        </HomeContainer>
    );
};

export default Home;