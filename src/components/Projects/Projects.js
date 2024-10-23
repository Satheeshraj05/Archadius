import React from 'react';
import styled from 'styled-components';

// Project Images
import project1 from '../../assets/images/Project.png';
import project2 from '../../assets/images/Project-2.png';
import project3 from '../../assets/images/Project-3.png';
import project4 from '../../assets/images/Project-4.png';
import project5 from '../../assets/images/Project-5.png';

// Why Choose Us Images
import whyChooseUs1 from '../../assets/images/Portfolio-2.png';
import whyChooseUs2 from '../../assets/images/Portfolio.png';

const ProjectsContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 2rem;
`;

const ProjectImage = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`;

const WhyChooseUsImage = styled.img`
  width: 50%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WhyChooseUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center; // Center the content horizontally
  max-width: 1200px; // Limit the width of the container
  margin: 0 auto; // Center the container within its parent
`;

const WhyChooseUsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  &:first-of-type ${WhyChooseUsImage} {
    width: 89%; // Reduce the size of the first image
  }
`;

const WhyChooseUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WhyChooseUsTitle = styled.h3`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const WhyChooseUsSubtitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const WhyChooseUsText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectGrid>
        <ProjectImage src={project1} alt="Project 1" />
        <ProjectImage src={project2} alt="Project 2" />
        <ProjectImage src={project3} alt="Project 3" />
        <ProjectImage src={project4} alt="Project 4" />
        <ProjectImage src={project5} alt="Project 5" />
      </ProjectGrid>

      <WhyChooseUsContainer>
        <WhyChooseUsItem>
          <WhyChooseUsImage src={whyChooseUs1} alt="Modern Kitchen Design" />
          <WhyChooseUsTextContainer>
            <WhyChooseUsTitle>WHY CHOOSE US</WhyChooseUsTitle>
            <WhyChooseUsSubtitle>We Build Your Visions</WhyChooseUsSubtitle>
            <WhyChooseUsText>
              Archadius, a professionally managed group of technology innovators and engineers, is an emerging leader in the engineering and construction segment in India. We have executed various projects and have established a strong reputation within our domain for executing large complex projects and providing turnkey solutions to our clients.
            </WhyChooseUsText>
          </WhyChooseUsTextContainer>
        </WhyChooseUsItem>

        <WhyChooseUsItem>
          <WhyChooseUsTextContainer>
            <WhyChooseUsTitle>WHY CHOOSE US</WhyChooseUsTitle>
            <WhyChooseUsSubtitle>We Build Your Visions</WhyChooseUsSubtitle>
            <WhyChooseUsText>
              Archadius, a professionally managed group of technology innovators and engineers, is an emerging leader in the engineering and construction segment in India. We have executed various projects and have established a strong reputation within our domain for executing large complex projects and providing turnkey solutions to our clients.
            </WhyChooseUsText>
          </WhyChooseUsTextContainer>
          <WhyChooseUsImage src={whyChooseUs2} alt="Elegant Interior Design" />
        </WhyChooseUsItem>
      </WhyChooseUsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
