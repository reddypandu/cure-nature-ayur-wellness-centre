// Explicit Yoga Therapy route wrapper.
import { services } from "../../data/services";
import { ServiceDetail } from "../ServiceDetail";
export function YogaTherapy() {
  return <ServiceDetail service={services[0]} />;
}
