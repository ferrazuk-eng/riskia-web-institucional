/**
 * RISKIA - LIVE CONTENT CONFIGURATION
 * 
 * Edit strings within quotes to update website content.
 * Fields: title, date, text, link, linkLabel
 */

const LIVE_CONTENT = {
    preMarket: {
        title: "Pre-Market: Sesión América",
        date: "Lunes, 13 de Abril",
        text: "Observamos una apertura estable con foco en los datos de inflación de mañana. El sector tecnológico muestra resiliencia mientras el crudo presiona soportes clave.",
        link: "https://wa.me/5491140626605",
        linkLabel: "Ver análisis completo"
    },
    cierre: {
        title: "Cierre de Mercado",
        date: "Viernes, 10 de Abril",
        text: "Semana marcada por la rotación hacia defensivos. El S&P 500 cierra con leve retroceso tras testear máximos históricos. El mercado digiere las minutas de la FED.",
        link: "https://wa.me/5491140626605",
        linkLabel: "Resumen de cierre"
    },
    informe: {
        title: "Estrategia Mensual",
        date: "Abril 2026",
        text: "Nuestra tesis central para este mes se enfoca en la asimetría de activos energéticos frente a la descompresión de tasas. Analizamos 3 sectores con potencial estructural.",
        link: "https://wa.me/5491140626605",
        linkLabel: "Acceder al informe"
    }
};

/**
 * Render logic - DO NOT EDIT BELOW THIS LINE
 */
function renderLiveContent() {
    const containers = {
        'premarket-content': LIVE_CONTENT.preMarket,
        'cierre-content': LIVE_CONTENT.cierre,
        'informe-content': LIVE_CONTENT.informe
    };

    const waLink = "https://wa.me/5491140626605?text=Hola!+Quiero+sumarme+al+canal+de+RISKIA.";

    for (const [id, data] of Object.entries(containers)) {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = `
                <div class="h-full flex flex-col justify-between space-y-6">
                    <div class="space-y-4">
                        <div class="flex justify-between items-start">
                            <h4 class="text-xl font-black uppercase italic tracking-tighter text-riskiaBlue">${data.title}</h4>
                            <span class="text-[10px] font-bold text-riskiaGray uppercase tracking-widest">${data.date}</span>
                        </div>
                        <p class="text-riskiaBlue/70 font-light italic leading-relaxed text-sm">${data.text}</p>
                    </div>
                    
                    <div class="space-y-4 pt-2">
                        <!-- Channel Label -->
                        <p class="text-[10px] uppercase text-riskiaGray font-bold tracking-widest">
                            Contenido real del canal
                        </p>
                        <!-- Primary CTA Button -->
                        <a href="${waLink}" target="_blank" class="block w-full text-center bg-riskiaOrange text-white px-6 py-4 font-black uppercase tracking-widest text-[11px] hover:brightness-110 shadow-lg transition-all">
                            👉 Acceder al análisis completo
                        </a>
                        
                        <!-- Secondary Link -->
                        <a href="${data.link}" target="_blank" class="block text-center text-[10px] font-black uppercase tracking-widest text-riskiaGray hover:text-riskiaBlue transition-colors">
                            ${data.linkLabel} →
                        </a>
                    </div>
                </div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', renderLiveContent);
