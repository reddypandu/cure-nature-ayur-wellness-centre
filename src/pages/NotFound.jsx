// Fallback shown when no configured route matches the current location.
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageBanner } from "../components/PageBanner";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Cure Ayur Nature"
        description="The requested page could not be found."
      />
      <PageBanner title="Page not found" />
      <section className="notfound wrap">
        <p className="eyebrow">404</p>
        <h2>
          Let’s find your way <i>back.</i>
        </h2>
        <p>The page you’re looking for isn’t here, but a calmer moment is.</p>
        <Link to="/" className="button primary">
          Return home <ArrowRight size={17} />
        </Link>
      </section>
    </>
  );
}
