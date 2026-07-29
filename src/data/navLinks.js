/**
 * Primary navigation. `type: "services"` renders the services mega-menu,
 * which is generated from servicesData.js — no need to list services twice.
 */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", type: "services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ],
};
