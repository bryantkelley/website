import { Alert, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" className="nav-bg">
        <Container>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faCode} />
            {' '}
            Bryant Kelley
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="https://github.com/bryantkelley">GitHub</Nav.Link>
              <Nav.Link href="https://twitter.com/_bryantkelley">Twitter</Nav.Link>
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
