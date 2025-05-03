
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
        price_text: "Between $2.50 and $3.00 per foot depending on hull condition and service frequency."
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
        price_text: "Entre $2.50 y $3.00 por pie, dependiendo de la condición del casco y frecuencia del servicio."
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
}

setLanguage('en');
