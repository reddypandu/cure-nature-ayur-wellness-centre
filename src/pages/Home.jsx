// Landing page with 10 sections: Hero, Who We Are, Services, Why Choose Us,
// How It Works, Stats, Additional Services, Testimonials-style, FAQs, CTA.
import { useState } from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  ChevronDown,
  Clock,
  Heart,
  Leaf,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Cta } from "../components/Cta";
import { AdditionalServices } from "../components/AdditionalServices";
import { Seo } from "../components/Seo";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/services";
import { phone } from "../data/siteInfo";
import { IMAGE_PATH } from "../utils/constants";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Certified Practitioners",
    desc: "Our therapists are trained in authentic Ayurvedic and wellness traditions with years of hands-on experience.",
  },
  {
    icon: Heart,
    title: "Personalised Approach",
    desc: "Every session is tailored to your unique body constitution, needs, and wellness goals.",
  },
  {
    icon: Leaf,
    title: "100% Natural Methods",
    desc: "We use only natural herbs, oils and time-tested techniques — no chemicals, no side effects.",
  },
  {
    icon: Award,
    title: "Trusted Since Years",
    desc: "Hundreds of satisfied clients trust us for their wellness journey in Visakhapatnam.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Book sessions at your convenience with morning, afternoon, and evening slots available.",
  },
  {
    icon: Smile,
    title: "Warm & Welcoming Space",
    desc: "Step into a calm, clean and peaceful environment designed to help you relax from the moment you arrive.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Book a Consultation",
    desc: "Reach out to us via phone, WhatsApp, or our booking form. We'll find a convenient time for you.",
  },
  {
    step: "02",
    title: "Personal Assessment",
    desc: "Our practitioner listens to your health concerns, lifestyle, and goals to understand your unique needs.",
  },
  {
    step: "03",
    title: "Customised Treatment",
    desc: "We design a personalised wellness plan using the most suitable therapies and natural techniques.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "Follow-up guidance and lifestyle tips to help you maintain your wellbeing long after your visit.",
  },
];

const stats = [
  { number: "1500+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "15+", label: "Therapies Offered" },
  { number: "98%", label: "Satisfaction Rate" },
];

const faqs = [
  {
    q: "What is Ayurvedic wellness therapy?",
    a: "Ayurvedic wellness therapy is a holistic approach rooted in ancient Indian traditions. It uses natural herbs, oils, yoga, meditation and hands-on techniques to restore balance in your body and mind — without chemicals or invasive procedures.",
  },
  {
    q: "Do I need a doctor's referral to visit?",
    a: "No referral is needed. You can book directly with us. However, if you have a specific medical condition, we recommend informing us beforehand so we can tailor the session accordingly.",
  },
  {
    q: "How long does a typical session last?",
    a: "Most sessions range between 30 to 75 minutes depending on the therapy. For example, Yoga sessions are 45–60 minutes, while Shiro Dhara can be 45–60 minutes. We'll discuss the ideal duration during your consultation.",
  },
  {
    q: "Is it safe for elderly people and children?",
    a: "Yes! Our therapies are gentle and non-invasive. We adapt techniques for every age group, from children to seniors, ensuring complete comfort and safety throughout.",
  },
  {
    q: "What should I wear or bring to my appointment?",
    a: "Wear comfortable, loose-fitting clothing. We provide everything needed for the therapy. Just bring yourself and an open mind — we'll take care of the rest.",
  },
  {
    q: "Are there any side effects of the treatments?",
    a: "Our treatments are 100% natural and non-invasive, so there are no harmful side effects. Some people feel deeply relaxed or mildly drowsy after a session, which is completely normal and a sign of deep restoration.",
  },
  {
    q: "How many sessions will I need to feel better?",
    a: "Many clients feel noticeably better after just one session. For chronic issues or deeper wellness goals, we typically recommend a series of 4–8 sessions, spaced based on your personal needs.",
  },
  {
    q: "What is Nabhi Therapy and how does it help?",
    a: "Nabhi Therapy is a traditional practice focused on the navel area. It aids digestive comfort, improves energy flow and promotes overall body balance. It's a gentle, deeply relaxing experience.",
  },
  {
    q: "Can I combine multiple therapies in one visit?",
    a: "Absolutely! We often recommend complementary therapies together — for example, combining Yoga with Meditation, or Massage with Shiro Dhara — for a more complete wellness experience.",
  },
  {
    q: "What are your operating hours and location?",
    a: "We're open Monday to Saturday, 8:00 AM to 7:00 PM. Sundays are by appointment only. We're located at KGH Road, opposite Medicover, Maharanipeta, Visakhapatnam.",
  },
];

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-q-text">{faq.q}</span>
        <ChevronDown size={18} className="faq-chevron" />
      </button>
      <div className="faq-answer">
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Seo
        title="Cure Ayur Nature | Wellness Centre in Vizag"
        description="Natural wellness services in Vizag including yoga, massage, meditation, Nabhi and Shiro Dhara."
      />

      {/* 1. Hero */}
      <section className="hero">
        <div className="hero-photo" />
        <div className="hero-content">
          <p className="eyebrow light">NATURAL WELLNESS · VISAKHAPATNAM</p>
          <h1>
            Heal naturally.
            <br />
            <i>Live fully.</i>
          </h1>
          <p>
            A quiet place to pause, restore and return to yourself through
            time-honoured wellness services.
          </p>
          <div className="hero-actions">
            <Link className="button gold" to="/contact#enquiry">
              <CalendarDays size={18} />
              Book Appointment
            </Link>
            <a className="button ghost" href={`tel:${phone}`}>
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="who-we-are wrap">
        <div className="who-image">
          <img
            src={IMAGE_PATH + "meditation-therapy.jpeg"}
            alt="Calm treatment space at Cure Ayur Nature"
          />
          <div className="image-badge">
            <Leaf />
            <span>
              Rooted in
              <br />
              natural care
            </span>
          </div>
        </div>
        <div className="who-copy">
          <SectionTitle
            eyebrow="WHO WE ARE"
            title={
              <>
                Wellness that feels
                <br />
                <i>like coming home.</i>
              </>
            }
          />
          <p>
            At Cure Ayur Nature, we bring together gentle movement, traditional
            Ayurvedic rituals and mindful care in an atmosphere made for rest.
          </p>
          <p>
            Every session begins with listening. We take the time to understand
            what you need, then guide you toward simple, supportive wellbeing
            practices.
          </p>
          <p>
            Founded in Visakhapatnam, our centre is a peaceful refuge for anyone
            seeking natural healing — free from chemicals, side effects, and rush.
          </p>
          <Link to="/about" className="text-link">
            Learn about our approach <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* 3. Services */}
      <section className="therapy-section">
        <div className="wrap">
          <SectionTitle
            eyebrow="OUR SERVICES"
            title={
              <>
                Care for your whole <i>being.</i>
              </>
            }
            copy="Time-honoured practices, delivered with a gentle, personal touch."
          />
          <div className="therapy-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
          <div className="center-link">
            <Link className="text-link" to="/services">
              View all services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="why-choose-section">
        <div className="wrap">
          <SectionTitle
            eyebrow="WHY CHOOSE US"
            title={
              <>
                The Cure Ayur Nature <i>difference.</i>
              </>
            }
            copy="What makes our centre a trusted choice for natural wellness in Visakhapatnam."
          />
          <div className="why-choose-grid">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div className="why-choose-card" key={item.title}>
                  <span className="why-choose-icon">
                    <Icon size={26} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="how-works-section">
        <div className="wrap">
          <SectionTitle
            eyebrow="YOUR JOURNEY"
            title={
              <>
                How it <i>works.</i>
              </>
            }
            copy="Four simple steps to begin your natural wellness journey with us."
          />
          <div className="how-works-grid">
            {howItWorks.map((item, i) => (
              <div className="how-works-card" key={item.step}>
                <span className="how-works-step">{item.step}</span>
                <div className="how-works-line" />
                <Sparkles size={28} className="how-works-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats */}
      <section className="home-stats">
        <div className="wrap home-stats-grid">
          {stats.map((stat) => (
            <div className="home-stat" key={stat.label}>
              <Star size={20} className="stat-star" />
              <b>{stat.number}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Additional Services */}
      <AdditionalServices />

      {/* 8. Testimonials Banner */}
      <section className="trust-banner">
        <div className="wrap trust-banner-inner">
          <div className="trust-left">
            <p className="eyebrow light">TRUSTED BY HUNDREDS</p>
            <h2>
              Real results, <i>real people.</i>
            </h2>
            <p>
              Our clients keep coming back because they experience genuine relief,
              renewed energy, and lasting wellbeing through our natural therapies.
            </p>
          </div>
          <div className="trust-right">
            <div className="trust-card">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => (
                  <Star size={16} key={i} />
                ))}
              </div>
              <blockquote>
                "After just three sessions, my chronic back pain reduced
                significantly. The therapists are incredibly caring and
                professional. I highly recommend Cure Ayur Nature!"
              </blockquote>
              <p className="trust-reviewer">
                — Lakshmi P. <span>· Visakhapatnam</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="faq-section">
        <div className="wrap">
          <SectionTitle
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title={
              <>
                Got questions? <i>We've got answers.</i>
              </>
            }
            copy="Everything you need to know before your first visit."
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FaqItem
                faq={faq}
                index={index}
                isOpen={openFaq === index}
                onToggle={toggleFaq}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <Cta />
    </>
  );
}
