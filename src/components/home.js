import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Home() {
  const modifers = ['terrible', 'horrible', 'no good', 'very bad'];
  const randomNumber = Math.floor(Math.random() * modifers.length);
  return (
    <Row>
      <Col>
        <h1>Hi, I'm Bryant.</h1>
        <h2>I'm a software engineer.</h2>
        <h3>This is my <code>{modifers[randomNumber]}</code> website.</h3>
      </Col>
    </Row>
  );
}
