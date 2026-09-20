// Explicit Massage Therapy route wrapper.
import { services } from "../../data/services";
import { ServiceDetail } from "../ServiceDetail";
export function MassageTherapy() {
  return <ServiceDetail service={services[1]} />;
}
