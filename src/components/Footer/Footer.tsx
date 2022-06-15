import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons/faJedi";
const styles = require("./Footer.module.css");

const Footer = (): any => {
  return (
    <footer className={styles.footer}>
      <div>
        <FontAwesomeIcon icon={faJedi} />
        <span>Star Wars API</span>
      </div>
      <div>
        <span>
          powered by{" "}
          <a href="https://reactjs.org/" target="blank">
            React
          </a>{" "}
          and{" "}
          <a href="https://swapi.dev/" target="blank">
            SWAPI
          </a>
        </span>
      </div>
      <div>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
