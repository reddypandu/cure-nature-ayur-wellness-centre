// Explicit Nabhi Therapy route wrapper.
import { services } from "../../data/services";
import { ServiceDetail } from "../ServiceDetail";
export function NabhiTherapy() {
  return <ServiceDetail service={services[3]} />;
}
