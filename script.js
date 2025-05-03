const translations = {
  en: {
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    robotic: "Robotic Boat Hull Cleaning",
    subtitle: "Advanced technology for pristine results – before and after visuals included.",
    stayUpdated: "Stay Updated",
    contactTitle: "Contact",
    email: "Email:",
    phone: "Phone:"
  },
  es: {
    services: "Servicios",
    pricing: "Precios",
    contact: "Contacto",
    robotic: "Limpieza Robótica de Casco de Barco",
    subtitle: "Tecnología avanzada para resultados impecables – incluye visuales antes y después.",
    stayUpdated: "Mantente Informado",
    contactTitle: "Contacto",
    email: "Correo electrónico:",
    phone: "Teléfono:"
  }
};

function changeLanguage(lang) {
  const t = translations[lang];
  document.getElementById("nav-services").textContent = t.services;
  document.getElementById("nav-pricing").textContent = t.pricing;
  document.getElementById("nav-contact").textContent = t.contact;
  document.getElementById("hero-title").textContent = t.robotic;
  document.getElementById("hero-subtitle").textContent = t.subtitle;
  document.getElementById("stay-updated").textContent = t.stayUpdated;
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("email-label").textContent = t.email;
  document.getElementById("phone-label").textContent = t.phone;
}
