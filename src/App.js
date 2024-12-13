import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const AppContainer = styled.div`
  background: linear-gradient(-45deg, #FF61D8, #6B8AFF, #00FFA3, #FFB800);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  min-height: 100vh;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
`;

const Navigation = styled.nav`
  padding: 1rem;
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin: 1rem 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FloatingEmoji = styled.span`
  position: absolute;
  animation: ${float} 6s ease-in-out infinite;
  font-size: 2rem;
`;

function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    dataScience: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'MYSQL'],
    fullstack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Bootstrap', 'HTML', 'CSS']
  };

  return (
    <AppContainer>
      <Navigation>
        <h3>✨ Fozan Ahmed</h3>
      </Navigation>

      <Section>
        <FloatingEmoji style={{ top: '10%', left: '10%' }}>🚀</FloatingEmoji>
        <FloatingEmoji style={{ top: '20%', right: '20%' }}>💻</FloatingEmoji>
        <FloatingEmoji style={{ bottom: '15%', left: '15%' }}>📊</FloatingEmoji>
        
        <h1>Hey there! I'm Fozan Ahmed ✌️</h1>
        <p>Data Scientist × Fullstack Developer</p>
      </Section>

      <Section>
        <h2>Data Science Skills 📊</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {skills.dataScience.map((skill) => (
            <Card key={skill}>
              <h3>{skill}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Fullstack Skills 💻</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {skills.fullstack.map((skill) => (
            <Card key={skill}>
              <h3>{skill}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Projects 🎯</h2>
        <Card>
          <h3>Personality Distribution Analysis in AequorTech-CTRL</h3>
          <p>This project analyses the distribution of personality types among employees in AequorTech CTRL using Python. It utilizes a dataset of 350 employees, each assigned a random role and personality type. The primary goal is to provide an understanding of the overall distribution of personality types in the company and offer functions for retrieving personality information based on employee names or IDs . By: Fozan Ahmed .</p>
        </Card>
        <Card>
          <h3>Portfolio Website</h3>
          <p>https://felixarash.github.io/fozanahmedmemon-portfolio/</p>
        </Card>
      </Section>

      <Section>
        <h2>Let's Connect! 🤝</h2>
        <Card>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/felixarash">GitHub</a>
            <a href="https://linkedin.com/in/fozanahmedmemon">LinkedIn</a>
            <a href="mailto:your.fozanahmedm9@gmail.com">Email</a>
          </div>
        </Card>
      </Section>
    </AppContainer>
  );
}

export default Portfolio;