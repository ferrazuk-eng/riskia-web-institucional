/**
 * RISKIA Live Content Integrator v4.6 (Audit Driven - Hotfixed)
 * Agente 11 - Web Integration & Data Hydration
 * Last Update: 17/04/2026 - Hotfix: Ocultar Riesgo País
 */

function updateQuantHub() {
    const timerEl = document.getElementById('update-timer');

    if (typeof RISKIA_LIVE_DATA !== 'undefined') {
        const data = RISKIA_LIVE_DATA;

        // 1. Render Macro Header
        renderMacroHeader(data.macro);

        // 2. Render Quant Lists
        renderQuantList('impulso-list', data.impulso, 'impulso');
        renderQuantList('ciclo-list', data.ciclo, 'ciclo');
        renderQuantList('cautela-list', data.cautela, 'cautela');

        if (timerEl) {
            timerEl.innerText = `ACTUALIZADO: ${data.update_time}`;
        }
    } else {
        console.warn('RISKIA_LIVE_DATA not found.');
        if (timerEl) timerEl.innerText = 'ESPERANDO DATA LAKE...';
    }

    if (window.lucide) lucide.createIcons();
}

function renderMacroHeader(macros) {
    const container = document.getElementById('macro-container');
    if (!container || !macros) return;

    // Filtramos los macros para que NO incluya "Riesgo Pais"
    const filteredMacros = macros.filter(m => m.label !== "Riesgo Pais");

    container.innerHTML = filteredMacros.map(m => `
        <div class="bg-white p-4 border border-subtle shadow-sm flex flex-col group hover:border-riskiaBlue transition-all">
            <span class="text-[9px] font-black tracking-widest text-riskiaGray uppercase mb-1">${m.label}</span>
            <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-${m.color}-500 animate-pulse"></div>
                <span class="text-lg font-black text-riskiaBlue tracking-tighter">${m.value}</span>
            </div>
        </div>
    `).join('');
}

function renderQuantList(containerId, items, category) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.length ? '' : `<p class="text-[9px] text-riskiaGray italic opacity-60">Sin activos auditados en esta sección.</p>`;

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white p-5 border border-subtle shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col gap-3";

        let accentColor = 'bg-riskiaBlue';
        let badgeText = 'Auditado';

        if (category === 'impulso') { accentColor = 'bg-emerald-500'; badgeText = 'Oportunidad'; }
        if (category === 'ciclo') { accentColor = 'bg-amber-500'; badgeText = 'Cautela'; }
        if (category === 'cautela') { accentColor = 'bg-riskiaOrange'; badgeText = 'Trampa'; }

        const priceDisp = (item.Precio > 0) ? `$${item.Precio.toFixed(2)}` : 'N/D';
        const rsiDisp = (item.RSI_Valor > 0) ? item.RSI_Valor.toFixed(1) : 'N/D';

        let topTagText = item.MACD_Cruce || '---';
        let topTagColor = accentColor;

        if (category === 'cautela') {
            topTagText = item.status || 'VETADO';
            topTagColor = 'bg-red-600';
        }

        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h5 class="text-lg font-black text-riskiaBlue tracking-tighter">${item.ticker}</h5>
                    <p class="text-[8px] font-black uppercase tracking-widest text-riskiaGray">${badgeText}</p>
                </div>
                <div class="${topTagColor} text-white text-[7px] font-black px-2 py-0.5 uppercase tracking-widest">
                    ${topTagText}
                </div>
            </div>
            
            <div class="bg-riskiaPaper/50 p-3 border-l-2 border-subtle italic">
                <p class="text-[9px] leading-relaxed text-riskiaGray font-medium">
                    <span class="font-black text-riskiaBlue uppercase text-[8px] block mb-1">Dictamen 72hs:</span>
                    "${item.motive}"
                </p>
            </div>

            <div class="grid grid-cols-3 gap-2 border-t border-subtle pt-3 text-center">
                <div>
                    <p class="text-[7px] font-black text-riskiaGray uppercase opacity-70">Precio</p>
                    <p class="text-[10px] font-bold text-riskiaBlue">${priceDisp}</p>
                </div>
                <div>
                    <p class="text-[7px] font-black text-riskiaGray uppercase opacity-70">RSI</p>
                    <p class="text-[10px] font-bold ${item.RSI_Valor > 70 ? 'text-riskiaOrange' : 'text-riskiaBlue'}">${rsiDisp}</p>
                </div>
                <div>
                    <p class="text-[7px] font-black text-riskiaGray uppercase opacity-70">D. POC</p>
                    <p class="text-[10px] font-bold text-riskiaBlue">${item['Dist_POC_%'] ? item['Dist_POC_%'].toFixed(1) + '%' : '---'}</p>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 w-full h-1 ${accentColor} opacity-20 group-hover:opacity-100 transition-opacity"></div>
        `;
        container.appendChild(card);
    });
}

// Initial hydration
document.addEventListener('DOMContentLoaded', updateQuantHub);