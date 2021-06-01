import "./styles.css";
import icon from "../../assets/Icon.svg";
import Logo from "../../assets/Logo.svg";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/Instagram.png";

function Footer() {
  return (
    <footer>
      <h2>Become a nanny share host</h2>
      <span>Takes less than 5 minutes to get started</span>
      <div className="create-button">
        <div className="calendar">
          <img src={icon} alt="calendar" />
        </div>
        <div className="text">
          <span className="medium">Create Your Nanny Share</span>
          <span className="x-small">Takes less than 5 minutes</span>
        </div>
      </div>
      <a href="#" alt="">
        Or browse local nanny-shares
      </a>
      <div className="nav-footer">
        <img src={Logo} alt="logo" />
        <ul>
          <li>
            <a className="footer-nav-link" href="#" alt="">
              Share Your Nanny
            </a>
          </li>
          <li>
            <a className="footer-nav-link" href="#" alt="">
              Our Story
            </a>
          </li>
          <li>
            <a className="footer-nav-link" href="#" alt="">
              Blog
            </a>
          </li>
          <li>
            <a className="footer-nav-link" href="#" alt="">
              Terms & Privacy
            </a>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com/hapunui">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hapunui">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hapunui">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <hr className="mobile-hr" />
      <span className="x-small-2">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
