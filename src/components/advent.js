import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Advent() {
  // An Advent Calendar Full of Bees
  const today = new Date().getDate(); // 1 to 31
  const days = [];

  const [opened, setOpened] = useState(false);

  for (let i = 1; i < 26; i++) {
    days.push((
      <Col xs={2}>
        <h4>{i}</h4>
        {i < today && '🐝'}
        {i === today && !opened && (
          <Button onClick={() => setOpened(true)}>🎁</Button>
        )}
        {i === today && opened && '🐝'}
        {i > today && '🔒'}
      </Col>
    ));
  }

  return (
    <>
      <Row className="mt-5">
        <Col>
          <h3>Advent Calendar</h3>
        </Col>
      </Row>
      <Row>
        {days}
      </Row>
    </>
  );
}
