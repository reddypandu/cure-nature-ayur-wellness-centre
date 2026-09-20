// Shared page hero banner with a simple breadcrumb.
import { Link } from "react-router-dom";
export function PageBanner({ title }) {
  return (
    <section className="page-banner">
      <div className="wrap">
        <p className="eyebrow light">CURE AYUR NATURE · VISAKHAPATNAM</p>
        <h1>{title}</h1>
        <p className="crumb">
          <Link to="/">Home</Link>
          <span>/</span>
          {title}
        </p>
      </div>
    </section>
  );
}
