import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <br />
      <span>
        <div className="neumorph-banner">
          <h3 className="neumorph-dark-text">Black Trans Lives Matter.</h3>
        </div>
      </span>
      <Navbar collapseOnSelect expand variant="light" bg="light" sticky="top" className="neumorph-nav">
        <Navbar.Brand>
          <FontAwesomeIcon icon={faCode} />
          {' '}
          Bryant Kelley
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto d-none d-md-flex">
            <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
            <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
            <NavDropdown title="Links">
              <Nav.Link href="https://aoc-2020.bryantkelley.com">Advent of Code</Nav.Link>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto d-xs-flex d-md-none">
            <NavDropdown title="Links">
              <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
              <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
              <Nav.Link href="https://aoc-2020.bryantkelley.com">Advent of Code</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
