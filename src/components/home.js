import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function Home() {
  const modifers = ['terrible', 'horrible', 'no good', 'very bad'];
  const randomNumber = Math.floor(Math.random() * modifers.length);
  return (
    <Row>
      <Col>
        <Card bg="light" border="light" className="mt-5 floating-shadow">
          <Card.Body>
            <h1>Hi, I'm Bryant.</h1>
            <h2>I'm a software engineer.</h2>
            <h3>This is my <code>{modifers[randomNumber]}</code> website.</h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
