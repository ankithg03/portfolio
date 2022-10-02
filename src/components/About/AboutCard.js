import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="yellow">ANKITH G </span>
            from <span className="yellow"> Mysuru, Karnataka, India.</span>
            <br />I'm Ankith G, also known as Ank, A Software Developer who thinks programming language is just a way to communicate with the device, regardless of any programming language it can be, what do you think about it? .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free!"{" "}
          </p>
          <footer className="blockquote-footer">Steve McConnell</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
