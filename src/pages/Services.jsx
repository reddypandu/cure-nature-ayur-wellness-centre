// All-services listing page and the three-step care process.
import { HeartPulse, Phone, Sparkles } from "lucide-react";
import { Cta } from "../components/Cta";
import { AdditionalServices } from "../components/AdditionalServices";
import { PageBanner } from "../components/PageBanner";
import { Seo } from "../components/Seo";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/services";

export function Services() {
  const steps = [
    [Phone, "01", "Consult"],
    [Sparkles, "02", "Personalised plan"],
    [HeartPulse, "03", "Your therapy"],
  ];
  return (
    <>
      <Seo
        title="Wellness Services | Cure Ayur Nature Vizag"
        description="Explore yoga, massage, meditation, Nabhi and Shiro Dhara services at Cure Ayur Nature in Visakhapatnam."
      />
      <PageBanner title="Our services" />
      <section className="services-intro wrap">
        <SectionTitle
          eyebrow="RESTORE AT YOUR OWN PACE"
          title={
            <>
              Traditional care, <i>thoughtfully offered.</i>
            </>
          }
          copy="Explore our collection of natural wellness services. Each session is a chance to slow down, reconnect and feel gently supported."
        />
        <div className="therapy-grid service-page-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </section>
      <AdditionalServices />
      <section className="how">
        <div className="wrap">
          <SectionTitle
            eyebrow="HOW IT WORKS"
            title={
              <>
                Simple steps toward <i>wellbeing.</i>
              </>
            }
          />
          <div className="how-grid">
            {steps.map(([Icon, number, title]) => (
              <div key={number}>
                <span>{number}</span>
                <Icon />
                <h3>{title}</h3>
                <p>
                  We listen, guide and make space for your individual wellbeing
                  needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
