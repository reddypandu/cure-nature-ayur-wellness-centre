import { SectionTitle } from "./SectionTitle";
import { additionalServices } from "../data/services";

export function AdditionalServices() {
  return (
    <section className="additional-services">
      <div className="wrap">
        <SectionTitle
          eyebrow="MORE WELLNESS SUPPORT"
          title={
            <>
              Additional <i>services.</i>
            </>
          }
          copy="We also offer guidance and support for the following wellness needs."
        />
        <ul className="additional-services-list">
          {additionalServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
