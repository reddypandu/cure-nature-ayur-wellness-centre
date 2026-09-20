// Contact page with enquiry form, preselected service support, and map.
import { useState } from "react";
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Route as RouteIcon,
} from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { Seo } from "../components/Seo";
import { services } from "../data/services";
import {
  address,
  directionsUrl,
  hours,
  mapEmbedUrl,
  phone,
  sundayHours,
  whatsapp,
} from "../data/siteInfo";

export function Contact() {
  const [isSent, setIsSent] = useState(false);
  const selectedService =
    new URLSearchParams(window.location.search).get("service") || "";
  const submitForm = (event) => {
    event.preventDefault();
    setIsSent(true);
    event.currentTarget.reset();
  };
  return (
    <>
      <Seo
        title="Contact Cure Ayur Nature | Book a Wellness Session"
        description="Contact Cure Ayur Nature in Maharanipeta, Visakhapatnam to book your wellness appointment."
      />
      <PageBanner title="Contact us" />
      <section id="enquiry" className="contact-page wrap">
        <div className="contact-cards">
          <SectionTitle
            eyebrow="WE WOULD LOVE TO HEAR FROM YOU"
            title={
              <>
                Let’s make room for <i>wellbeing.</i>
              </>
            }
          />
          <article>
            <Phone />
            <div>
              <b>Call us</b>
              <a href={`tel:${phone}`}>+91 {phone}</a>
            </div>
          </article>
          <article>
            <MessageCircle />
            <div>
              <b>WhatsApp us</b>
              <a
                className="text-link"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation <ArrowRight size={15} />
              </a>
            </div>
          </article>
          <article>
            <MapPin />
            <div>
              <b>Visit our centre</b>
              <p>{address}</p>
            </div>
          </article>
          <article>
            <Clock3 />
            <div>
              <b>Opening hours</b>
              <p>
                {hours}
                <br />
                {sundayHours}
              </p>
            </div>
          </article>
        </div>
        <form className="enquiry-form" onSubmit={submitForm}>
          <p className="eyebrow">SEND AN ENQUIRY</p>
          <h2>
            We’re here to <i>help.</i>
          </h2>
          {isSent && (
            <p className="form-success">
              Thank you. We’ve received your enquiry and will be in touch
              shortly.
            </p>
          )}
          <label>
            Full name
            <input required placeholder="Your name" />
          </label>
          <label>
            Phone number
            <input required type="tel" placeholder="Your number" />
          </label>
          <label>
            Email address
            <input required type="email" placeholder="you@email.com" />
          </label>
          <label>
            Service
            <select required defaultValue={selectedService}>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option value={service.slug} key={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </label>
          <label className="full">
            Your message
            <textarea required rows="4" placeholder="How can we support you?" />
          </label>
          <button className="button primary full">
            Send enquiry <ArrowRight size={17} />
          </button>
        </form>
      </section>
      <section className="map-section">
        <iframe
          title="Map showing Cure Ayur Nature in Maharanipeta, Visakhapatnam"
          src={mapEmbedUrl}
          loading="lazy"
        />
        <a
          className="button primary"
          target="_blank"
          rel="noreferrer"
          href={directionsUrl}
        >
          <RouteIcon size={17} />
          Get Directions
        </a>
      </section>
    </>
  );
}
