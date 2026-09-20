// Site footer with routes, service links, and contact details.
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { phone, whatsapp } from "../data/siteInfo";
import { IMAGE_PATH } from "../utils/constants";

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <img src={IMAGE_PATH + "logo.jpeg"} alt="Cure Ayur Nature logo" />
            <span>
              Ayur Nature
              <br />
              <em>Wellness Centre</em>
            </span>
          </Link>
          <p>A gentle space for natural wellbeing in the heart of Vizag.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <b>Our services</b>
          {services.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug}>
              {service.name}
            </Link>
          ))}
        </div>
        <div>
          <b>Stay connected</b>
          <a href={`tel:${phone}`}>+91 {phone}</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
          <Link to="/contact">Find our centre</Link>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>
          © {new Date().getFullYear()} Cure Ayur Nature. All rights reserved.
        </span>
        <span>
          Therapies are complementary wellness practices and not a substitute
          for medical treatment.
        </span>
      </div>
    </footer>
  );
}
