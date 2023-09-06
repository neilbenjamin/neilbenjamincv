import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./layout.css";
import image from "./neil.jpg";
import AccordianComponent from "./accordianComponent.js";

function LayoutComponent() {
  return (
    <Container>
      <Row>
        <Col md={5} className="border-right col-sidebar">
          <img
            className="img-fluid main-header-image rounded"
            src={image}
            alt="Neil"
          />
          <h3 className="side-bar-header">NEIL BENJAMIN</h3>
          <p className="sidebar-text">
            <AccordianComponent />
          </p>
        </Col>
        <Col md={7}>
          <h2 className="header-text">ABOUT</h2>
          <h5 className="sub-text border-bottom">Personal Background</h5>
          <p className="main-text">
            I am currently a Music Teacher. I discovered the Internet of Things
            during Covid when I was losing my mind from boredom. I very quickly
            got hooked, and since then, I have started my own small WordPress
            agency. However, this wasn't enough to satiate my curiosity as to
            why things worked the way they did, which led me to HTML, then to
            CSS, and then to JS, eventually bringing me to Hyperion Dev. I am
            also a double SAFTA winner for best audio post/production, so I am
            well-versed in audio editing and soundscaping, music arranging and
            composition, as well as being a performer. I play guitar and DJ. I
            am also adept with Adobe Illustrator. I am hoping to get a solid
            handle on being able to develop applications for mobile and desktop
            alike and move away from the rigid, restraining frameworks of
            WordPress.{" "}
          </p>
          <h2 className="header-text">STUDENT</h2>
          <h5 className="sub-text border-bottom">
            Hyperion Dev - Full Stack Web Developer
          </h5>
          <p className="main-text">
            I am currently busy with a Full Stack Web Development course at
            Hyperion Dev, immersing myself in the diverse world of both
            front-end and back-end technologies. With my studies, I have learnt
            how to create dynamic and interactive web applications, enhancing my
            proficiency in programming languages like HTML, CSS, JavaScript, and
            exploring frameworks such as React for the front end and Node.js for
            the back end. In addition to learning these new skills, I have also
            been running a small Wordpress agency and assisting a few clients
            with their Wordpress sites.
          </p>
          <h1 className="header-text">CORE SUBJECTS</h1>
          <h5 className="sub-text border-bottom">Course Content</h5>
          <p className="main-text">
            HTML, CSS, Javascript, Node, React, Next.js, Git, gitHub, API's,
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default LayoutComponent;
