import "./Footer.css";
import { Button } from "@mui/material";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Button>about us</Button>
              </li>
              <li>
                <Button>our services</Button>
              </li>
              <li>
                <Button>privacy policy</Button>
              </li>
              <li>
                <Button>affiliate program</Button>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Button>FAQ</Button>
              </li>
              <li>
                <Button>shipping</Button>
              </li>
              <li>
                <Button>returns</Button>
              </li>
              <li>
                <Button>order status</Button>
              </li>
              <li>
                <Button>payment options</Button>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <Button>watch</Button>
              </li>
              <li>
                <Button>bag</Button>
              </li>
              <li>
                <Button>shoes</Button>
              </li>
              <li>
                <Button>dress</Button>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="/dashboard">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/dashboard">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/dashboard">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/dashboard">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
