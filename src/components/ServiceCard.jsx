// Reusable service teaser card used on the home and service listing pages.
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../utils/constants";
export function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="therapy-card">
      <div className="therapy-image">
        <img
          src={IMAGE_PATH + service.image}
          alt={service.name}
          loading="lazy"
        />
        <span>
          <Icon size={21} />
        </span>
      </div>
      <div className="therapy-info">
        <h3>{service.name}</h3>
        <p>{service.blurb}</p>
        <ul>
          {service.benefits.slice(0, 2).map((benefit) => (
            <li key={benefit}>
              <Check size={14} />
              {benefit}
            </li>
          ))}
        </ul>
        <Link className="text-link" to={`/services/${service.slug}`}>
          Learn more <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
