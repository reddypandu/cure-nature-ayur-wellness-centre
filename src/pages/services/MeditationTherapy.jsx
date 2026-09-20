// Explicit Meditation Therapy route wrapper.
import { services } from "../../data/services";
import { ServiceDetail } from "../ServiceDetail";
export function MeditationTherapy() {
  return <ServiceDetail service={services[2]} />;
}
