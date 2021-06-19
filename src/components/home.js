import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Portrait from './portrait';

export default function Home() {
  const modifers = ['terrible', 'horrible', 'no good', 'very bad'];
  const randomNumber = Math.floor(Math.random() * modifers.length);
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={12} md={6} lg={4}>
        <Portrait />
      </Col>
      <Col>
          <h1>Hi, I'm Bryant.</h1>
          <h2>I'm a software engineer.</h2>
          <h3>
            {'This is my '}
            <code>{modifers[randomNumber]}</code>
            {' website.'}
          </h3>
      </Col>
    </Row>
  );
}
