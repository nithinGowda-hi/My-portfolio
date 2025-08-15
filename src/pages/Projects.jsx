import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

function Projects() {
  const projectList = [
    { 
      title: "Contact Management App", 
      desc: "A full-stack MERN app that lets users add, edit, and delete contacts with authentication and search features.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
      code: "https://github.com/nithinGowda-hi/contact-app",
      demo: "https://contact-app-demo.netlify.app"
    },
    { 
      title: "Post App", 
      desc: "A CRUD app where users can create, read, update, and delete posts. Includes pagination and image uploads.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
      code: "https://github.com/nithinGowda-hi/post-app",
      demo: "https://post-app-demo.netlify.app"
    },
    { 
      title: "E-commerce Website", 
      desc: "An e-commerce website with product listings, cart functionality, and responsive UI design.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      code: "https://github.com/nithinGowda-hi/ecommerce",
      demo: "https://ecommerce-demo.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projectList.map((proj, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <div className="mb-3">
                    {proj.tech.map((tech, idx) => (
                      <Badge bg="primary" key={idx} className="me-1">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="primary" href={proj.demo} target="_blank" className="me-2">Live Demo</Button>
                  <Button variant="outline-light" href={proj.code} target="_blank">Code</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
