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
  flex-wrap: nowrap; /* Allow images to stay in a single row */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
`;

const ProjectImage = styled.img`
  width: 20%; /* Adjust this width for how many images you want visible */
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease; /* Smooth transition for pop effect */

  &:hover {
    transform: scale(1.1); /* Pop out effect */
    z-index: 1; /* Ensure hovered image is on top */
  }
`;

const WhyChooseUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem; /* Space below the Project section */
  align-items: center; /* Center items horizontally */
`;

const WhyChooseUsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center items horizontally */
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const WhyChooseUsImage = styled.img`
  width: 500px; /* Set fixed width */
  height: 500px; /* Set fixed height */
  object-fit: cover; /* Maintain aspect ratio and fill the space */
  border-radius: 15px; /* Add border radius for curved corners */
`;

const WhyChooseUsTextContainer = styled.div`
  width: 50%; /* Adjusted to fit text content */
  padding: 0; /* Removed padding */
  z-index: 2;
  margin-left: 20px; /* Adjust spacing between image and text */
  
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0; /* Reset margin for smaller screens */
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
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
`;

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectGrid>
                {/* Displaying images without animation */}
                <ProjectImage src={project1} alt="Project 1" />
                <ProjectImage src={project2} alt="Project 2" />
                <ProjectImage src={project3} alt="Project 3" />
                <ProjectImage src={project4} alt="Project 4" />
                <ProjectImage src={project5} alt="Project 5" />
            </ProjectGrid>

            <WhyChooseUsContainer>
                {/* First Item: Image on the left, text on the right */}
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

                {/* Second Item: Image on the right, text on the left */}
                <WhyChooseUsItem style={{ flexDirection: 'row-reverse' }}>
                    <WhyChooseUsImage src={whyChooseUs2} alt="Elegant Interior Design" />
                    <WhyChooseUsTextContainer>
                        <WhyChooseUsTitle>WHY CHOOSE US</WhyChooseUsTitle>
                        <WhyChooseUsSubtitle>We Build Your Visions</WhyChooseUsSubtitle>
                        <WhyChooseUsText>
                            Archadius, a professionally managed group of technology innovators and engineers, is an emerging leader in the engineering and construction segment in India. We have executed various projects and have established a strong reputation within our domain for executing large complex projects and providing turnkey solutions to our clients.
                        </WhyChooseUsText>
                    </WhyChooseUsTextContainer>
                </WhyChooseUsItem>
            </WhyChooseUsContainer>
        </ProjectsContainer>
    );
};

export default Projects;
