import React from 'react';
import { Alert, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <br />
      <span>
        <Alert variant="dark">
          <h3>Black Trans Lives Matter.</h3>
        </Alert>
      </span>
      <Navbar collapseOnSelect expand variant="primary">
        <Navbar.Brand>
          <FontAwesomeIcon icon={faCode} />
          {' '}
          <code>Bryant Kelley</code>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto d-none d-md-flex">
            <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
            <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
          </Nav>
          <Nav className="mr-auto d-xs-flex d-md-none">
            <NavDropdown title="Links">
              <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
              <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
