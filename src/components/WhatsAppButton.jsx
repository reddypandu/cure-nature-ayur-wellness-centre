// Persistent floating contact and social shortcuts: Call, Facebook, Instagram, WhatsApp.
import { phone, whatsapp, instagram, facebook } from "../data/siteInfo";

export function WhatsAppButton() {
  return (
    <div className="floating-actions" role="region" aria-label="Quick contact and social links">
      <a
        className="floating-btn call-btn"
        href={`tel:${phone}`}
        aria-label="Call Cure Ayur Nature"
        title="Call Us"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="floating-tooltip">Call Us</span>
      </a>

      <a
        className="floating-btn facebook-btn"
        href={facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow us on Facebook"
        title="Facebook"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span className="floating-tooltip">Facebook</span>
      </a>

      <a
        className="floating-btn instagram-btn"
        href={instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow us on Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
        <span className="floating-tooltip">Instagram</span>
      </a>

      <a
        className="floating-btn whatsapp-btn whatsapp"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.58C14.65 13.5 14.49 13.46 14.32 13.71C14.16 13.96 13.68 14.52 13.53 14.69C13.39 14.85 13.24 14.87 12.99 14.75C12.74 14.62 11.94 14.36 10.99 13.52C10.25 12.86 9.75 12.05 9.6 11.8C9.46 11.55 9.59 11.41 9.71 11.29C9.82 11.18 9.96 11 10.08 10.86C10.21 10.72 10.25 10.62 10.33 10.45C10.41 10.29 10.37 10.14 10.31 10.02C10.25 9.9 9.76 8.7 9.56 8.2C9.36 7.72 9.16 7.78 9.01 7.77C8.87 7.77 8.71 7.76 8.54 7.76C8.38 7.76 8.11 7.82 7.89 8.07C7.66 8.31 7.03 8.9 7.03 10.11C7.03 11.32 7.91 12.49 8.03 12.65C8.16 12.82 9.76 15.28 12.21 16.34C12.79 16.59 13.25 16.74 13.6 16.85C14.19 17.04 14.72 17.01 15.15 16.95C15.63 16.88 16.63 16.34 16.84 15.77C17.05 15.19 17.05 14.7 16.99 14.59C16.92 14.5 16.82 14.45 16.57 14.39Z" />
        </svg>
        <span className="floating-tooltip">WhatsApp</span>
      </a>
    </div>
  );
}
