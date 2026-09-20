// Sticky primary navigation, service dropdown, and mobile drawer.
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { services } from "../data/services";
import { phone } from "../data/siteInfo";
import { IMAGE_PATH } from "../utils/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    const onOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", onOutsideClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`nav router-nav ${isScrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}
        ref={menuRef}
      >
        <Link to="/" className="brand" onClick={() => setIsOpen(false)}>
          <img src={IMAGE_PATH + "logo.jpeg"} alt="Cure Ayur Nature logo" />
          <span>
            Ayur Nature
            <br />
            <em>Wellness Centre</em>
          </span>
        </Link>
        <button
          className="menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="menu-btn-inner">
              <X size={18} />
              <span>Close</span>
            </span>
          ) : (
            <span className="menu-btn-inner">
              <Menu size={18} />
              <span>Menu</span>
            </span>
          )}
        </button>

        {isOpen && (
          <div
            className="drawer-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav className={isOpen ? "open" : ""}>
          <div className="drawer-header">
            <div className="drawer-title">
              <img
                src={IMAGE_PATH + "logo.jpeg"}
                alt="Cure Ayur Nature logo"
                className="drawer-logo"
              />
              <span>
                Ayur Nature
                <br />
                <em>Wellness Centre</em>
              </span>
            </div>
            <button
              type="button"
              className="drawer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              title="Close navigation"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>

          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <div className={`service-menu ${servicesOpen ? "expanded" : ""}`}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services <ChevronDown size={14} />
            </button>
            <div className="service-dropdown">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    to={`/services/${service.slug}`}
                    key={service.slug}
                    onClick={() => {
                      setIsOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    <Icon size={16} />
                    {service.name}
                  </Link>
                );
              })}
              <Link
                className="view-all"
                to="/services"
                onClick={() => {
                  setIsOpen(false);
                  setServicesOpen(false);
                }}
              >
                View All Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <Link
            className="nav-cta"
            to="/contact#enquiry"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment <ArrowRight size={15} />
          </Link>
          <LanguageSelector />
          <button
            type="button"
            className="drawer-bottom-close-btn"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} /> Close Menu
          </button>
        </nav>
      </header>
      <a className="mobile-top-call" href={`tel:${phone}`}>
        <Phone size={13} /> Tap to call: +91 {phone}
      </a>
    </>
  );
}
