import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiMacos,
    SiPhpstorm,
    SiPycharm,
    SiWebstorm,
    SiAdobe,
    SiNpm,
    SiBitbucket,
    SiJira,
    SiCodepen,
    SiCodesandbox,
    SiVisualstudio, SiApache, SiUbuntu, SiMysql
} from "react-icons/si";
import {DiEclipse} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhpstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPycharm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiEclipse />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiWebstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAdobe />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiNpm/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiBitbucket/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJira/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCodepen/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCodesandbox/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudio/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApache/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiUbuntu/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMysql/>
        </Col>
    </Row>
  );
}

export default Toolstack;
