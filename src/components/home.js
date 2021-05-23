import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Portrait from './portrait';

export default function Home() {
  const modifers = ['terrible', 'horrible', 'no good', 'very bad'];
  const randomNumber = Math.floor(Math.random() * modifers.length);
  return (
    <Row>
      <Col xs={12} sm={8} md={6} lg={4}>
        <Portrait />
      </Col>
      <Col>
        <div className="mt-5">
          <h1>Hi, I'm Bryant.</h1>
        </div>
        <div className="mt-5">
          <h2>I'm a software engineer.</h2>
        </div>
      </Col>
      <Col>
        <div className="mt-5">
          <h2>This is my</h2>
          <h2>
            <code>{modifers[randomNumber]}</code>
          </h2>
          <h2>website.</h2>
        </div>
      </Col>
    </Row>
  );
}
