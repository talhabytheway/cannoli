import "./Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
function Footer() {
  return (
    <>
      <footer>
        <div className="about">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            dolore ipsam, blanditiis, odio, possimus repellendus impedit
            deleniti libero quia aut tempora commodi saepe natus ducimus maxime
            soluta eum omnis doloremque!
          </p>
          <ul>
            <li>
              <img src={facebook} alt="logo facebook" />
            </li>
            <li>
              <img src={instagram} alt="logo instagram" />
            </li>
            <li>
              <img src={linkedin} alt="logo linkedIn" />
            </li>
            <li>
              <img src={whatsapp} alt="logo whatsapp" />
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span className="subHead">Adress:</span>
              <span className="Head">34 Street, Washington DC, USA</span>
            </li>
            <li>
              <span className="subHead">Phone:</span>
              <span className="Head">+1 242 485 478</span>
            </li>
            <li>
              <span className="subHead">Email:</span>
              <span className="Head">info@cannoli.com</span>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>About</li>
            <li>Terms Of Use</li>
            <li>Disclaimers</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
      <div
        style={{
          backgroundColor: "#ff7504",
          fontSize: "1.5rem",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} All rights reserved |
        github.com/talhabytheway
      </div>
    </>
  );
}

export default Footer;
