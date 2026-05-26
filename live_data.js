/** 
 * RISKIA AUTO-GENERATED DATA 
 * Session: 26/05/2026 13:49
 */

const RISKIA_DASHBOARD = {
    "update": "26/05/2026 13:49",
    "header": "PULSO RISKIA: RISK-ON CUBIERTO (VIX: 17.08)",
    "status": "OPTIMISTA",
    "color": "#2a9d8f",
    "ccl": "$1487.6",
    "radar_text": "Carga Automática v4.2",
    "agenda_text": "Tasa 10Y Cae a 4.50% | VIX Sube por Coberturas",
    "link_reporte": "REPORTES_DIARIOS/INPUT_CANAL_RICK.md",
    "insight_text": "Oxígeno monetario. La caída técnica de la tasa a 10 años libera al Nasdaq, pero el alza del VIX denota miedo institucional previo al Súper Miércoles."
};

const RISKIA_LIVE_DATA = {
    "update_time": "26/05/2026 13:49",
    "macro": [
        {
            "label": "SPY",
            "value": "+0.58%",
            "color": "green"
        },
        {
            "label": "QQQ",
            "value": "+1.03%",
            "color": "green"
        },
        {
            "label": "Tasa 10Y",
            "value": "4.50%",
            "color": "green"
        },
        {
            "label": "Crudo WTI",
            "value": "$94.24",
            "color": "red"
        },
        {
            "label": "Bitcoin",
            "value": "$76509",
            "color": "red"
        }
    ],
    "impulso": [
        {
            "ticker": "QQQ",
            "status": "CONFIRMADO",
            "motive": "Rally alimentado por la perforación del 4.50% en la Tasa del Tesoro a 10 años.",
            "Precio": 728.55,
            "RSI_Valor": 68.5,
            "Dist_POC_%": 4.5,
            "MACD_Cruce": "Compra"
        }
    ],
    "ciclo": [
        {
            "ticker": "VIX",
            "status": "ALERTA",
            "motive": "Divergencia bajista. El mercado sube pero las primas de riesgo (VIX) se disparan casi 3% por coberturas institucionales.",
            "Precio": 17.08,
            "RSI_Valor": 55.2,
            "Dist_POC_%": 2.1,
            "MACD_Cruce": "Compra Fuerte"
        }
    ],
    "cautela": [
        {
            "ticker": "BTC",
            "status": "VIGILANCIA",
            "motive": "Sanciones del Reino Unido al exchange HTX (conexiones con Rusia) golpean al cripto.",
            "Precio": 76509,
            "RSI_Valor": 42.1,
            "Dist_POC_%": -3.5,
            "MACD_Cruce": "Venta"
        }
    ]
};
