import { Col, Row } from 'react-bootstrap';

export default function Appearances() {
  return (
    <Row className="mt-5">
      <Col xs={12}>
        <h3>Guest Appearances</h3>
        <h4>Oops, my friends accidentally let me on their shows.</h4>
        <Row>
          <Col xs={12} md={6}>
            <h5>
              <code>I Have No Idea What I'm Doing</code>
            </h5>
            <a href="https://goodstuff.network/noidea/64">
              Pop Off Episode 3 - "Milk Tubes"
            </a>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              <code>Idle Curiosities</code>
            </h5>
            <a href="https://idlecuriosities.com/episodes/033-the-first-of-many-bad-things-to-come-ft-bryant-kelley">
              033 - the first of many bad things to come ft. bryant kelley
            </a>
            <a href="https://idlecuriosities.com/episodes/037-the-cat-knows-how-fat-it-is-live">
              037 - the cat knows how fat it is (live!)
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
