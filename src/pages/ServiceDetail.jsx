// Shared template used by the five explicit service detail page wrappers.
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Cta } from "../components/Cta";
import { PageBanner } from "../components/PageBanner";
import { Seo } from "../components/Seo";
import { IMAGE_PATH } from "../utils/constants";

export function ServiceDetail({ service }) {
  const Icon = service.icon;
  return (
    <>
      <Seo
        title={`${service.name} | Cure Ayur Nature Vizag`}
        description={service.blurb}
      />
      <PageBanner title={service.name} />
      <section className="detail wrap">
        <img src={IMAGE_PATH + service.image} alt={service.name} />
        <div>
          <p className="eyebrow">TRADITIONAL WELLNESS CARE</p>
          <Icon className="detail-icon" />
          <h2>{service.name}</h2>
          <p>
            {service.detail} {service.blurb}
          </p>
          <div className="detail-info">
            <div>
              <b>Benefits</b>
              {service.benefits.map((benefit) => (
                <span key={benefit}>
                  <Check size={15} />
                  {benefit}
                </span>
              ))}
            </div>
            <div>
              <b>
                <Clock3 size={15} /> Session duration
              </b>
              <p>{service.duration}</p>
              <b>Suitable for</b>
              <p>Anyone seeking a calm, personalised wellness session.</p>
            </div>
          </div>
          <Link
            className="button primary"
            to={`/contact?service=${service.slug}#enquiry`}
          >
            Book this service <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
