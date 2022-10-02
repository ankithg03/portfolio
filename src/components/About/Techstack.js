import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiMagento,
    DiIntellij, DiJava, DiAndroid, DiPhp, DiAngularSimple, DiLess,
    DiSass
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs, SiApachecordova, SiDotnet, SiCss3,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMagento />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiIntellij />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAndroid />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApachecordova />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDotnet />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAngularSimple />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiLess />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
    </Row>
  );
}

export default Techstack;
