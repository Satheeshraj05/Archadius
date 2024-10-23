import React, { useState } from 'react';
import styled from 'styled-components';

// Import portfolio images
import portfolio1 from '../../assets/images/Portfolio.jpg';
import portfolio2 from '../../assets/images/Portfolio-2.jpg';
import portfolio3 from '../../assets/images/Portfolio-3.jpg';
import portfolio4 from '../../assets/images/Portfolio-4.png';
import portfolio5 from '../../assets/images/Portfolio-5.png';
import project1 from '../../assets/images/Project.png';
import project2 from '../../assets/images/Project-2.png';
import project3 from '../../assets/images/Project-3.png';

// Use placeholder for service icon (replace it later with the correct path)
// Replace this line with your local service icon path
import serviceIcon from '../../assets/images/service-icon.png'; // Adjust the path as needed

const SectionContainer = styled.div`
  background-color: #1c1c1c;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  width: 5rem;
  height: 2px;
  background-color: #fff;
  margin: 1rem auto;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled.div`
  background-color: #2d2d2d;
  padding: 2rem;
  text-align: center;
  width: 15rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

// Portfolio grid section
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// Modal section for displaying full-size images
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%; /* Adjust max width as needed */
  max-height: 90%; /* Adjust max height as needed */
`;

const ModalImage = styled.img`
  max-width: 100%; /* Make the image responsive */
  max-height: 100%; /* Maintain aspect ratio */
  object-fit: contain; /* Maintain aspect ratio while resizing */
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  padding: 10px;

  &:hover {
    color: #ff0000;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 20px;
`;

const RightArrow = styled(Arrow)`
  right: 20px;
`;

const portfolioItems = [
  { id: 1, src: portfolio1, alt: 'Project 1' },
  { id: 2, src: portfolio2, alt: 'Project 2' },
  { id: 3, src: portfolio3, alt: 'Project 3' },
  { id: 4, src: portfolio4, alt: 'Project 4' },
  { id: 5, src: portfolio5, alt: 'Project 5' },
  { id: 6, src: project1, alt: 'Project 6' },
  { id: 7, src: project2, alt: 'Project 7' },
  { id: 8, src: project3, alt: 'Project 8' },
];

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setCurrentImage(portfolioItems[index].src);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(portfolioItems[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setCurrentIndex(prevIndex);
    setCurrentImage(portfolioItems[prevIndex].src);
  };

  return (
    <>
      <SectionContainer>
        <Subtitle>Why Choose Us</Subtitle>
        <Title>We Provide Quality Services</Title>
        <Divider />
        <ServicesContainer>
          <ServiceCard>
          <ServiceIcon src={serviceIcon} alt="Service Icon" />
            <ServiceTitle>Architectural Design</ServiceTitle>
          </ServiceCard>
          <ServiceCard>
          <ServiceIcon src={serviceIcon} alt="Service Icon" />

            <ServiceTitle>Interior Design</ServiceTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={serviceIcon} alt="Service Icon" />

            <ServiceTitle>Landscape Design</ServiceTitle>
          </ServiceCard>
        </ServicesContainer>
      </SectionContainer>

      <SectionContainer>
        <Title>Elegance and Luxury</Title>
        <PortfolioGrid>
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} onClick={() => openModal(index)}>
              <PortfolioImage src={item.src} alt={item.alt} />
            </PortfolioItem>
          ))}
        </PortfolioGrid>

        {currentImage && (
          <Modal>
            <ModalContent>
              <CloseButton onClick={closeModal}>×</CloseButton>
              <ModalImage src={currentImage} alt="Current project" />
              <LeftArrow onClick={prevImage}>&larr;</LeftArrow>
              <RightArrow onClick={nextImage}>&rarr;</RightArrow>
            </ModalContent>
          </Modal>
        )}
      </SectionContainer>
    </>
  );
};

export default Portfolio;
