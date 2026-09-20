// Shared bottom call-to-action section.
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { phone } from "../data/siteInfo";
export function Cta() {
  return (
    <section className="cta-strip">
      <div className="wrap">
        <div>
          <p className="eyebrow light">A GENTLER WAY FORWARD</p>
          <h2>
            Begin your healing <i>journey.</i>
          </h2>
        </div>
        <div>
          <Link className="button gold" to="/contact#enquiry">
            Book Appointment <ArrowRight size={17} />
          </Link>
          <a className="button ghost" href={`tel:${phone}`}>
            <Phone size={17} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
