import React from "react";
import "./layout.css";
import Accordion from 'react-bootstrap/Accordion';

function AccordianComponent() {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>CONTACT</Accordion.Header>
        <Accordion.Body>
            <p className="main-text">Contact: 074 123 456</p>
            <p className="main-text">email: neil@checking123.co.za</p>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordianComponent;