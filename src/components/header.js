import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <a href="/">
            <FontAwesomeIcon icon={faCode} /> Bryant Kelley
          </a>
          <a href="https://github.com/bryantkelley">GitHub</a>
          <a href="https://twitter.com/_bryantkelley">Twitter</a>
        </nav>
      </div>
    </div>
  );
}
