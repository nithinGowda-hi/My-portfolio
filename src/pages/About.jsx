import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap, FaCertificate, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg'; // replace with your image

function About() {
  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", 
    "JavaScript", "Bootstrap", "HTML", "CSS", "Git/GitHub"
  ];

  return (
    <section id="about" className="py-5 about-section align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Profile Image */}
          <Col md={3} className="text-center mb-4 mb-md-0">
            {/* <Image src={profilePic} roundedCircle width="250" height="250" className="profile-img" /> */}
          </Col>

          {/* About Text */}
          <Col md={7}>
            <h2 className="fw-bold mb-3 ">About Me</h2>
            <p>
              I’m <strong>Nithingowda M</strong>, an aspiring <strong>MERN Stack Developer</strong> passionate about building 
              dynamic, user-friendly, and scalable web applications.
            </p>
            <p>
              As a fresher with a strong foundation in web technologies, I’m eager to contribute to real-world projects, 
              learn from experienced professionals, and grow into a full-stack development role.
            </p>

            {/* Education */}
            <p><FaGraduationCap className="me-2 text-primary" /> B.Sc. in Computer Science – [University of Mysore]</p>

            {/* Certifications */}
            <p><FaCertificate className="me-2 text-warning" /> Certified in Web Technologies and MERN Stack</p>

            {/* Career Objective */}
            <p><FaLightbulb className="me-2 text-success" /> 
              Career Goal: To join a progressive organization where I can apply my technical skills, 
              enhance my knowledge, and contribute to impactful projects.
            </p>

            {/* Skills */}
            <div className="mb-3">
              {skills.map((skill, idx) => (
                <Badge bg="primary" key={idx} className="me-1 mb-1">{skill}</Badge>
              ))}
            </div>

            {/* Contact Links */}
            <p>
              <FaEnvelope className="me-2" /> <a href="mailto:gnithin905@gmail.com" className="text-light">gnithin905@gmail.com</a><br />
              <FaLinkedin className="me-2" /> <a href="https://www.linkedin.com/in/nithin-gowda-8bb7a52bb" target="_blank" rel="noreferrer" className="text-light">LinkedIn</a><br />
              <FaGithub className="me-2" /> <a href="https://github.com/nithinGowda-hi" target="_blank" rel="noreferrer" className="text-light">GitHub</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
