// About page covering the centre story, offerings, team, and values.
import {
  ArrowRight,
  Flower2,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Cta } from "../components/Cta";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { Seo } from "../components/Seo";
import { services } from "../data/services";
import { IMAGE_PATH } from "../utils/constants";

export function About() {
  const reasons = [
    [Leaf, "Natural methods"],
    [Users, "Experienced therapists"],
    [Flower2, "Calm environment"],
    [HeartPulse, "Personalised care"],
    [ShieldCheck, "Hygienic spaces"],
  ];
  const therapists = [
    [
      "Wellness Therapist",
      "Ayurvedic wellness practitioner",
      "therapist-1.jpeg",
    ],
    ["Yoga Guide", "Yoga & meditation facilitator", "therapist-2.jpeg"],
    ["Care Specialist", "Natural therapy practitioner", "therapist-3.jpeg"],
  ];
  return (
    <>
      <Seo
        title="About Cure Ayur Nature | Natural Wellness in Vizag"
        description="Learn about Cure Ayur Nature, a calm and personalised natural wellness centre in Visakhapatnam."
      />
      <PageBanner title="About us" />
      <section className="about wrap">
        <div className="about-image">
          <img
            src={IMAGE_PATH + "meditation-therapy.jpeg"}
            alt="Cure Ayur Nature treatment room"
          />
        </div>
        <div className="about-copy">
          <SectionTitle
            eyebrow="OUR STORY"
            title={
              <>
                Wellbeing, with <i>heart.</i>
              </>
            }
          />
          <p>
            Cure Ayur Nature was created as a welcoming pause from the pace of
            everyday life. In our peaceful Vizag centre, traditional wellness
            practices meet attentive, individual care.
          </p>
          <p>
            We believe natural healing begins with being seen, heard and given
            room to rest. Our approach is gentle, practical and centred on
            helping you reconnect with yourself.
          </p>
        </div>
      </section>
      <section className="mission wrap">
        <article>
          <Leaf />
          <h3>Our mission</h3>
          <p>
            To make restorative, traditional wellness care feel accessible, calm
            and personal for every guest.
          </p>
        </article>
        <article>
          <Sparkles />
          <h3>Our vision</h3>
          <p>
            To be a trusted sanctuary in Vizag for mindful living and natural
            wellbeing.
          </p>
        </article>
      </section>
      <section className="offer-section">
        <div className="wrap">
          <SectionTitle
            eyebrow="WHAT WE OFFER"
            title={
              <>
                A practice for every <i>pause.</i>
              </>
            }
          />
          <div className="offer-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.slug}`} key={service.slug}>
                  <Icon />
                  <span>{service.name}</span>
                  <ArrowRight size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="why about-why">
        <div className="wrap">
          <SectionTitle
            eyebrow="WHY CHOOSE US"
            title={
              <>
                A more mindful kind of <i>care.</i>
              </>
            }
          />
          <div className="why-grid">
            {reasons.map(([Icon, title]) => (
              <div className="why-item" key={title}>
                <span>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>
                  Thoughtful wellbeing care shaped around your comfort and
                  needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="therapists wrap">
        <SectionTitle
          eyebrow="OUR THERAPISTS"
          title={
            <>
              Guided by caring <i>hands.</i>
            </>
          }
        />
        <div className="therapist-grid">
          {therapists.map(([name, qualification, image]) => (
            <article key={name}>
              <img
                src={IMAGE_PATH + image}
                alt="Cure Ayur Nature therapist placeholder"
              />
              <h3>{name}</h3>
              <p>{qualification}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="stats">
        <div className="wrap">
          <div>
            <b>10+</b>
            <span>Years of mindful care</span>
          </div>
          <div>
            <b>1,000+</b>
            <span>Happy wellness guests</span>
          </div>
          <div>
            <b>5</b>
            <span>Restorative services</span>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
