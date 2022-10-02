import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Ankith G, also known as Ank, A Software Developer who thinks programming language is just a way to communicate with the device, regardless of any programming language it can be, what do you think about it?
              <br />
              <h3 id="-img-src-https-media-giphy-com-media-vgcdazckvsr6om0uwg-giphy-gif-width-50-a-little-more-about-me-"><img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50" />{'A little more about me...'}</h3>
              <pre className={'home-code'}>
              <code className="lang-javascript">
                const aboutMe = {"{"}
                {"\n"}
                <span className="hljs-symbol">{"   "}pronouns:</span>{" "}
                <span className="hljs-string">"he"</span> |{" "}
                <span className="hljs-string">"him"</span>,{"\n"}
                <span className="hljs-symbol">{"   "}code:</span> [Php, Javascript,
                KnockoutJS, HTML, CSS, Python, Java, CSharp, Swift, Scss, Less, ],{"\n"}
                <span className="hljs-symbol">{"   "}technologies:</span> {"{"}
                {"\n"}
                <span className="hljs-symbol">{"      "}frontEnd:</span> {"{"}
                {"\n"}
                <span className="hljs-symbol">{"         "}js:</span> [
                <span className="hljs-string">"React"</span>,{" "}
                <span className="hljs-string">"NextJS"</span>,{" "}
                <span className="hljs-string">"Angular"</span>],{"\n"}
                <span className="hljs-symbol">{"         "}css:</span> [
                <span className="hljs-string">"Bulma"</span>,{" "}
                <span className="hljs-string">"Bootstrap"</span>,{" "}
                <span className="hljs-string">"Material Design"</span>,{" "}
                <span className="hljs-string">"Semantic UI"</span>]{"\n"}
                {"      "}
                {"}"},{"\n"}
                <span className="hljs-symbol">{"      "}backEnd:</span> {"{"}
                {"\n"}
                <span className="hljs-symbol">{"         "}java:</span> [
                <span className="hljs-string">"Spring"</span>],{"\n"}
                <span className="hljs-symbol">{"         "}js:</span> [
                <span className="hljs-string">"Node"</span>],{"\n"}
                <span className="hljs-symbol">{"         "}csharp:</span> [
                <span className="hljs-string">"Asp.net Core"</span>],{"\n"}
                <span className="hljs-symbol">{"         "}misc:</span> [
                <span className="hljs-string">"Bash"</span>,{" "}
                <span className="hljs-string">"Puppeteer"</span>,{" "}
                <span className="hljs-string">"Cypress"</span>],{"\n"}
                <span className="hljs-symbol">{"         "}php:</span> [
                <span className="hljs-string">"Magento"</span>,{" "}
                <span className="hljs-string">"Symfony"</span>,{" "}
                <span className="hljs-string">"Laravel"</span>],{"\n"}
                <span className="hljs-symbol">{"         "}python:</span> [
                <span className="hljs-string">"Django"</span>,{" "}
                <span className="hljs-string">"flask"</span>]{"\n"}
                {"      "}
                {"}"},{"\n"}
                <span className="hljs-symbol">{"      "}api:</span> [
                <span className="hljs-string">"Rest"</span>,{" "}
                <span className="hljs-string">"GraphQl"</span>]{"\n"}
                <span className="hljs-symbol">{"      "}databases:</span> [
                <span className="hljs-string">"MongoDB"</span>,{" "}
                <span className="hljs-string">"mySQL"</span>,{" "}
                <span className="hljs-string">"SQLServer"</span>,{" "}
                <span className="hljs-string">"SQLite"</span>],{"\n"}
                <span className="hljs-symbol">{"      "}mobile:</span> [
                <span className="hljs-string">"Android"</span>]{"\n"}
                <span className="hljs-symbol">{"      "}products:</span> [
                <span className="hljs-string">"AEM"</span>,{" "}
                <span className="hljs-string">"ScandiPWA"</span>,{" "}
                <span className="hljs-string">"Magento PWA"</span>,{" "}
                <span className="hljs-string">"NexPWA"</span>,{" "}
                <span className="hljs-string">"Adobe Commerce"</span>]{"\n"}
                {"   "}
                {"}"},{"\n"}
                <span className="hljs-symbol">{"   "}currentOccupation:</span> [
                <span className="hljs-string">
                  "A Software Developer who aspire to be a stable version but end up to be a
                  beta version"
                </span>
                ],{"\n"}
                <span className="hljs-symbol">{"   "}challenge:</span>{" "}
                <span className="hljs-string">
                  "A developer who wants to have knowledge to help others through
                  programming."
                </span>
                ,{"\n"}
                {"}"};{"\n"}
              </code>
            </pre>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankithg03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AnkithG1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankith-g-028373140/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iam_ank_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
