import React from 'react';
import { Alert, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand variant="dark" className="nav-bg">
        <Container>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faCode} />
            {' '}
            Bryant Kelley
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto d-none d-md-flex">
              <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
              <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
              <Nav.Link href="https://www.yetanotherhobby.com/">Podcast</Nav.Link>
            </Nav>
            <Nav className="mr-auto d-xs-flex d-md-none">
              <NavDropdown title="Links">
                <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
                <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
                <Nav.Link href="https://www.yetanotherhobby.com/">Podcast</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Alert variant="dark">
          <h3>Black Trans Lives Matter.</h3>
        </Alert>
      </Container>
    </>
  );
}
