import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand>
        <FontAwesomeIcon icon={faCode} />
        {' '}
        Bryant Kelley
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
        <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
        <Nav.Link href="https://aoc-2020.bryantkelley.com">Advent of Code</Nav.Link>
      </Nav>
    </Navbar>
  );
}
