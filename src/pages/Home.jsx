import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';
import myPhoto from '../assets/profile.jpg'; // Replace with your photo path

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="text-section text-center text-md-start">
            <h1 className="fw-bold display-4 fade-in">
              Hi, I'm <span className="highlight">Nithingowda M</span>
            </h1>
            <h3 className="typing-text">Aspiring MERN Stack Developer</h3>
            <p className="mt-3 intro-text">
              I’m a passionate fresher eager to build innovative web applications,
              contribute to real-world projects, and grow my career as a software developer.
            </p>
            <p className="extra-info">
              📜 Certified in Web Technologies &  💻 MERN Stack  | 🎯 Eager to learn <br />
              🚀 Built 3 full-stack projects during training
            </p>
            <div className="mt-4">
              <Button variant="primary" size="lg" className="me-3" href="#projects">
                View My Projects <FaArrowRight className="ms-2" />
              </Button>
              <Button variant="outline-light" size="lg" href="#contact">
                Contact Me
              </Button>
            </div>
          </Col>

          {/* Photo Section */}
          <Col md={6} className="photo-section text-center">
            <img src={myPhoto} alt="Nithingowda M" className="profile-photo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
