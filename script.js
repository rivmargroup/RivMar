
const translations = {
    en: {
        services: "Services",
        pricing: "Pricing",
        contact: "Contact",
        hero_title: "Robotic Boat Hull Cleaning",
        hero_desc: "Advanced technology for pristine results – before and after visuals included.",
        service1: "Hull cleaning with underwater robot",
        service2: "Photos and videos of before and after",
        service3: "Service record for every visit",
        price_text: "Between $2.50 and $3.00 per foot depending on hull condition and service frequency.",
        plan_basic: "Basic Inspection",
        plan_basic_1: "Visual hull inspection",
        plan_basic_2: "High-res photos included",
        plan_standard: "Standard Cleaning",
        plan_standard_1: "Full hull cleaning by robot",
        plan_standard_2: "Removes algae and debris",
        plan_premium: "Premium Cleaning",
        plan_premium_1: "Robot cleaning with photos & video",
        plan_premium_2: "Before & after media archive",
        newsletter_title: "Subscribe for Offers & News",
        newsletter_desc: "Enter your email to receive updates and promotions from RivMar.",
        subscribe: "Subscribe"
    },
    es: {
        services: "Servicios",
        pricing: "Precios",
        contact: "Contacto",
        hero_title: "Limpieza Robótica de Casco de Bote",
        hero_desc: "Tecnología avanzada para resultados impecables – incluye fotos y videos del antes y después.",
        service1: "Limpieza de casco con robot submarino",
        service2: "Fotos y videos del antes y después",
        service3: "Registro de servicio en cada visita",
        price_text: "Entre $2.50 y $3.00 por pie, dependiendo de la condición del casco y frecuencia del servicio.",
        plan_basic: "Inspección Básica",
        plan_basic_1: "Inspección visual del casco",
        plan_basic_2: "Incluye fotos de alta resolución",
        plan_standard: "Limpieza Estándar",
        plan_standard_1: "Limpieza total del casco con robot",
        plan_standard_2: "Elimina algas y residuos",
        plan_premium: "Limpieza Premium",
        plan_premium_1: "Limpieza con robot + fotos y video",
        plan_premium_2: "Archivo completo del servicio",
        newsletter_title: "Suscríbete para Ofertas y Noticias",
        newsletter_desc: "Ingresa tu correo para recibir promociones y actualizaciones de RivMar.",
        subscribe: "Suscribirse"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => setLanguage("en"));
