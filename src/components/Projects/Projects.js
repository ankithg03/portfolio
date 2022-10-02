import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/rely.png";
import emotion from "../../Assets/Projects/game.png";
import editor from "../../Assets/Projects/ssl.png";
import chatify from "../../Assets/Projects/og.png";
import suicide from "../../Assets/Projects/ecom.png";
import bitsOfCode from "../../Assets/Projects/catalog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Open-Graph"
              description="Magento 2 Module to Improve Search Engine Optimization via OpenGraph on your Magento site."
              ghLink="https://github.com/ankithg03/codilar-open-graph"
              demoLink="https://packagist.org/packages/ankith/open-graph-extension/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Catalog Graphql"
              description="OOSP to appear on filter via url_key for the feature of Magento."
              ghLink="https://github.com/ankithg03/catalog-graphql"
              demoLink="https://packagist.org/packages/ankith/catalog-graphql/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SSL Cert to your local"
              description="SSL Cert to your local apache2 Virtual Host"
              ghLink="https://github.com/ankithg03/ssl-for-local-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Rely.sg"
              description="relymagento2"
              ghLink="https://github.com/ankithg03/relymagento2"
              demoLink="https://www.rely.sg/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ecommerce"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              demoLink="https://codilar-coder.herokuapp.com/coder/Day-04/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Game"
              description="Simple JavaScript Based Game."
              demoLink="https://codilar-coder.herokuapp.com/game.html/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
