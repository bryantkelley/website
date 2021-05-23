import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Appearances() {
  return (
    <Row className="mt-5">
      <Col xs={12}>
        <h3>Guest Appearances</h3>
        <h5>Oops, my friends accidentally let me on their shows.</h5>
        <Row>
          <Col xs={12} md={6}>
            <h4>
              <code>I Have No Idea What I'm Doing</code>
            </h4>
            <a href="https://goodstuff.network/noidea/64">
              <h5>Pop Off Episode 3 - "Milk Tubes"</h5>
            </a>
          </Col>
          <Col xs={12} md={6}>
            <h4>
              <code>Idle Curiosities</code>
            </h4>
            <a href="https://idlecuriosities.com/episodes/033-the-first-of-many-bad-things-to-come-ft-bryant-kelley">
              <h5>033 - the first of many bad things to come ft. bryant kelley</h5>
            </a>
            <a href="https://idlecuriosities.com/episodes/037-the-cat-knows-how-fat-it-is-live">
              <h5>037 - the cat knows how fat it is (live!)</h5>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
