const translations = {
  en: {
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    heroTitle: "Robotic Boat Hull Cleaning",
    heroSubtitle: "Advanced technology for pristine results – before and after visuals included.",
    stayUpdated: "Stay Updated",
    email: "Email:",
    phone: "Phone:"
  },
  es: {
    services: "Servicios",
    pricing: "Precios",
    contact: "Contacto",
    heroTitle: "Limpieza Robótica de Casco de Barco",
    heroSubtitle: "Tecnología avanzada para resultados impecables – incluye imágenes del antes y después.",
    stayUpdated: "Mantente Informado",
    email: "Correo:",
    phone: "Teléfono:"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
