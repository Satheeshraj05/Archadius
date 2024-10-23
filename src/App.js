import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  scroll-behavior: smooth;
`;

const Section = styled.section`
  scroll-margin-top: 80px;
`;

const ContentWrapper = styled.div`
  padding-bottom: 60px; // Adjust this value based on your footer height
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentWrapper>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

export default App;