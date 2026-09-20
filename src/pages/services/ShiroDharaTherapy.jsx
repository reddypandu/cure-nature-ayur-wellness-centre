// Explicit Shiro Dhara Therapy route wrapper.
import { services } from "../../data/services";
import { ServiceDetail } from "../ServiceDetail";
export function ShiroDharaTherapy() {
  return <ServiceDetail service={services[4]} />;
}
