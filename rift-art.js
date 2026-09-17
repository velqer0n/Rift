/*! Rift Art Pack — иллюстрации мест, транспорта и легендар+ вещей.
 * Подключается отдельно, чтобы не раздувать rift.html.
 * API: artPlace(id,size), artVeh(type,size), artItem(it,size), artHasPlace(id)
 */
(function(global){
"use strict";

function svgWrap(s, inner, glow){
  const id="ra"+Math.floor(Math.random()*1e9);
  const g = glow
    ? `<defs><filter id="${id}g" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.2" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>`
    : `<defs></defs>`;
  return `<svg class="av rift-art" width="${s}" height="${s}" viewBox="0 0 100 100" aria-hidden="true">
    ${g}
    <defs><clipPath id="${id}"><rect width="100" height="100" rx="14"/></clipPath></defs>
    <g clip-path="url(#${id})"${glow?` filter="url(#${id}g)"`:""}>${inner}</g>
    <rect width="100" height="100" rx="14" fill="none" stroke="#2A323D" stroke-width="3.5"/>
  </svg>`;
}

/* ---------- МЕСТА ---------- */
const PLACE = {
  cellar: s => svgWrap(s, `
    <rect width="100" height="100" fill="#1a1410"/>
    <rect y="55" width="100" height="45" fill="#12100e"/>
    <rect x="8" y="20" width="84" height="55" fill="#2a221c" stroke="#3a3228" stroke-width="1"/>
    <rect x="12" y="26" width="18" height="22" fill="#0e1620" opacity=".9"/>
    <rect x="40" y="26" width="18" height="22" fill="#0e1620" opacity=".7"/>
    <rect x="68" y="26" width="18" height="22" fill="#0e1620" opacity=".5"/>
    <ellipse cx="50" cy="72" rx="16" ry="5" fill="#3a2a18" opacity=".8"/>
    <rect x="42" y="58" width="16" height="14" rx="1" fill="#4a3820"/>
    <circle cx="78" cy="48" r="6" fill="#e8a33d" opacity=".25"/>
    <circle cx="78" cy="48" r="2.5" fill="#e8a33d" opacity=".7"/>
    <path d="M20 75 Q30 70 40 76" stroke="#5a4a38" fill="none" stroke-width="1.5"/>
  `),
  shelter: s => svgWrap(s, `
    <rect width="100" height="100" fill="#14181c"/>
    <rect y="60" width="100" height="40" fill="#1a1510"/>
    <path d="M10 62 L50 28 L90 62 Z" fill="#2a3238" stroke="#3fd2c7" stroke-width=".8" opacity=".9"/>
    <rect x="28" y="50" width="44" height="30" fill="#1e242c"/>
    <rect x="44" y="58" width="12" height="22" fill="#0e1218"/>
    <circle cx="50" cy="72" r="5" fill="#e8a33d" opacity=".35"/>
    <circle cx="50" cy="72" r="2" fill="#e8a33d"/>
    <rect x="34" y="54" width="8" height="6" fill="#3fd2c7" opacity=".3"/>
    <rect x="58" y="54" width="8" height="6" fill="#3fd2c7" opacity=".3"/>
    <path d="M18 62 L18 48 L26 48" stroke="#5a6570" fill="none" stroke-width="1.2"/>
  `, true),
  block: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0e1420"/>
    <rect x="5" y="25" width="28" height="60" fill="#2a3340"/>
    <rect x="36" y="15" width="30" height="70" fill="#243040"/>
    <rect x="70" y="30" width="25" height="55" fill="#2a3340"/>
    <g fill="#0a1018">${[0,1,2,3,4].map(i=>[0,1,2].map(j=>
      `<rect x="${10+j*8}" y="${32+i*10}" width="4" height="5" opacity="${.4+((i+j)%3)*.2}"/>`
    ).join("")).join("")}</g>
    <g fill="#e8a33d" opacity=".4">${[0,1,2].map(i=>
      `<rect x="${42}" y="${25+i*18}" width="4" height="5"/>`
    ).join("")}</g>
    <rect y="85" width="100" height="15" fill="#1a1e24"/>
    <path d="M0 88 H100" stroke="#3a4450" stroke-width=".5"/>
  `),
  mall: s => svgWrap(s, `
    <rect width="100" height="100" fill="#10141c"/>
    <rect x="8" y="30" width="84" height="50" fill="#1e2834" stroke="#4a5a6a" stroke-width="1"/>
    <rect x="15" y="38" width="20" height="28" fill="#0a1218" opacity=".85"/>
    <rect x="40" y="38" width="20" height="28" fill="#0a1218" opacity=".7"/>
    <rect x="65" y="38" width="20" height="28" fill="#0a1218" opacity=".55"/>
    <path d="M20 66 L30 55 L40 66" fill="none" stroke="#5a6a7a" stroke-width="1"/>
    <path d="M45 66 L55 55 L65 66" fill="none" stroke="#5a6a7a" stroke-width="1"/>
    <rect x="35" y="22" width="30" height="8" fill="#2a3848"/>
    <text x="50" y="28" text-anchor="middle" font-size="5" fill="#8a9aaa" font-family="sans-serif">М</text>
    <rect y="80" width="100" height="20" fill="#151a20"/>
  `),
  hosp: s => svgWrap(s, `
    <rect width="100" height="100" fill="#101820"/>
    <rect x="20" y="22" width="60" height="58" fill="#1e2a30" stroke="#4a6a70" stroke-width="1"/>
    <rect x="42" y="55" width="16" height="25" fill="#0c1418"/>
    <rect x="28" y="32" width="12" height="12" fill="#0c1818"/>
    <rect x="60" y="32" width="12" height="12" fill="#0c1818"/>
    <path d="M48 38 H52 M50 36 V40" stroke="#c2543c" stroke-width="2.5"/>
    <circle cx="50" cy="28" r="6" fill="#c2543c" opacity=".25"/>
    <rect y="80" width="100" height="20" fill="#141a1e"/>
    <path d="M10 80 Q50 70 90 80" fill="none" stroke="#3a5050" stroke-width=".8" opacity=".5"/>
  `),
  depot: s => svgWrap(s, `
    <rect width="100" height="100" fill="#141210"/>
    <rect y="70" width="100" height="30" fill="#1a1814"/>
    <path d="M5 70 H95" stroke="#5a5040" stroke-width="2"/>
    <rect x="10" y="40" width="22" height="30" fill="#2a2820" stroke="#6a6048"/>
    <rect x="38" y="35" width="24" height="35" fill="#2a2820" stroke="#6a6048"/>
    <rect x="68" y="42" width="22" height="28" fill="#2a2820" stroke="#6a6048"/>
    <circle cx="16" cy="72" r="4" fill="#1a1810" stroke="#5a5040"/>
    <circle cx="26" cy="72" r="4" fill="#1a1810" stroke="#5a5040"/>
    <circle cx="44" cy="72" r="4" fill="#1a1810" stroke="#5a5040"/>
    <circle cx="56" cy="72" r="4" fill="#1a1810" stroke="#5a5040"/>
    <path d="M0 55 H100" stroke="#3a3830" stroke-width=".6" stroke-dasharray="3 2"/>
  `),
  indus: s => svgWrap(s, `
    <rect width="100" height="100" fill="#12141a"/>
    <rect x="8" y="40" width="30" height="45" fill="#2a3038"/>
    <rect x="45" y="25" width="20" height="60" fill="#252c34"/>
    <rect x="72" y="35" width="22" height="50" fill="#2a3038"/>
    <rect x="48" y="8" width="6" height="18" fill="#3a4450"/>
    <rect x="62" y="12" width="5" height="14" fill="#3a4450"/>
    <path d="M51 8 Q48 0 55 2" fill="none" stroke="#5a6570" stroke-width="1.5" opacity=".6"/>
    <path d="M64 12 Q62 4 68 6" fill="none" stroke="#5a6570" stroke-width="1.2" opacity=".5"/>
    <rect y="85" width="100" height="15" fill="#1a1c22"/>
    <circle cx="20" cy="55" r="3" fill="#e8a33d" opacity=".4"/>
  `),
  port: s => svgWrap(s, `
    <rect width="100" height="55" fill="#0e1824"/>
    <rect y="55" width="100" height="45" fill="#0a2030"/>
    <path d="M0 58 Q25 52 50 58 T100 58" fill="none" stroke="#2a5060" stroke-width="1.5"/>
    <path d="M0 68 Q30 62 60 70 T100 66" fill="none" stroke="#1a4050" stroke-width="1" opacity=".7"/>
    <rect x="15" y="30" width="8" height="30" fill="#3a4550"/>
    <path d="M19 30 L19 18 L45 25 L19 30" fill="#4a5560" opacity=".8"/>
    <rect x="55" y="40" width="30" height="16" fill="#2a3540" stroke="#4a5a68"/>
    <rect x="60" y="44" width="8" height="8" fill="#0a1520"/>
    <circle cx="80" cy="20" r="8" fill="#c8d0d8" opacity=".15"/>
  `),
  park: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0c1810"/>
    <ellipse cx="25" cy="70" rx="18" ry="22" fill="#1a3020"/>
    <ellipse cx="55" cy="55" rx="22" ry="28" fill="#1e3824"/>
    <ellipse cx="80" cy="72" rx="16" ry="20" fill="#18301c"/>
    <rect x="52" y="70" width="5" height="25" fill="#2a2010"/>
    <rect x="22" y="78" width="4" height="18" fill="#2a2010"/>
    <rect x="78" y="80" width="4" height="16" fill="#2a2010"/>
    <path d="M10 90 Q40 85 70 92 T100 88" fill="none" stroke="#2a4030" stroke-width="2"/>
    <circle cx="70" cy="25" r="10" fill="#e8f0ff" opacity=".08"/>
  `),
  farm: s => svgWrap(s, `
    <rect width="100" height="55" fill="#1a2218"/>
    <rect y="55" width="100" height="45" fill="#2a3820"/>
    <path d="M0 55 L100 55" stroke="#4a5a30" stroke-width="1"/>
    <path d="M10 55 L25 30 L40 55 Z" fill="#4a3a28" stroke="#6a5a40"/>
    <rect x="20" y="42" width="10" height="13" fill="#2a2010"/>
    <path d="M55 70 H95 M55 78 H95 M55 86 H95" stroke="#3a4a28" stroke-width="1.5"/>
    <circle cx="75" cy="25" r="12" fill="#e8a33d" opacity=".2"/>
    <rect x="60" y="40" width="25" height="12" fill="#3a4a38" opacity=".6"/>
  `),
  dacha: s => svgWrap(s, `
    <rect width="100" height="100" fill="#142018"/>
    <path d="M20 60 L50 35 L80 60 Z" fill="#3a2e22" stroke="#5a4a38"/>
    <rect x="30" y="60" width="40" height="25" fill="#2a241c"/>
    <rect x="45" y="68" width="10" height="17" fill="#1a1510"/>
    <rect x="35" y="65" width="8" height="8" fill="#4a6a50" opacity=".4"/>
    <rect x="57" y="65" width="8" height="8" fill="#4a6a50" opacity=".4"/>
    <rect x="12" y="70" width="8" height="20" fill="#3a4a30"/>
    <rect x="80" y="72" width="6" height="18" fill="#3a4a30"/>
    <path d="M5 90 H95" stroke="#2a3828" stroke-width="2"/>
  `),
  metro: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0a0c12"/>
    <path d="M15 20 L50 8 L85 20 L85 90 L15 90 Z" fill="#141820" stroke="#2a3848" stroke-width="1"/>
    <rect x="40" y="50" width="20" height="40" fill="#0a0e14"/>
    <path d="M25 35 H75" stroke="#3fd2c7" stroke-width=".8" opacity=".4"/>
    <path d="M25 45 H75" stroke="#3fd2c7" stroke-width=".8" opacity=".25"/>
    <circle cx="50" cy="30" r="4" fill="#3fd2c7" opacity=".3"/>
    <rect x="20" y="70" width="12" height="8" fill="#1a2030"/>
    <rect x="68" y="70" width="12" height="8" fill="#1a2030"/>
    <path d="M30 90 Q50 75 70 90" fill="none" stroke="#2a3040" stroke-width="1"/>
  `, true),
  rift: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0a0610"/>
    <path d="M50 5 L55 40 L70 50 L55 60 L50 95 L45 60 L30 50 L45 40 Z" fill="#2a1050" opacity=".8"/>
    <path d="M50 15 L52 42 L60 50 L52 58 L50 85 L48 58 L40 50 L48 42 Z" fill="#6a30c0" opacity=".7"/>
    <path d="M50 25 L51 45 L55 50 L51 55 L50 75" fill="#c0a0ff" opacity=".5"/>
    <circle cx="50" cy="50" r="18" fill="none" stroke="#a96fe0" stroke-width="1" opacity=".4"/>
    <circle cx="50" cy="50" r="28" fill="none" stroke="#6a30c0" stroke-width=".6" opacity=".25"/>
  `, true),
  tower: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0a1020"/>
    <path d="M40 90 L45 20 L55 20 L60 90 Z" fill="#1a2840" stroke="#3fd2c7" stroke-width=".8"/>
    <rect x="43" y="12" width="14" height="10" fill="#2a4060"/>
    <circle cx="50" cy="10" r="5" fill="#3fd2c7" opacity=".5"/>
    <circle cx="50" cy="10" r="2" fill="#a0fff0"/>
    <path d="M50 15 L50 5" stroke="#3fd2c7" stroke-width="1" opacity=".6"/>
    <rect x="46" y="30" width="3" height="4" fill="#3fd2c7" opacity=".4"/>
    <rect x="51" y="45" width="3" height="4" fill="#3fd2c7" opacity=".4"/>
    <rect x="46" y="60" width="3" height="4" fill="#3fd2c7" opacity=".4"/>
    <path d="M20 90 H80" stroke="#2a3850" stroke-width="2"/>
  `, true),
  seam: s => svgWrap(s, `
    <rect width="100" height="100" fill="#100818"/>
    <path d="M0 50 Q30 40 50 50 T100 50" fill="none" stroke="#a96fe0" stroke-width="3" opacity=".6"/>
    <path d="M0 50 Q30 60 50 50 T100 50" fill="none" stroke="#6a30c0" stroke-width="2" opacity=".5"/>
    <path d="M40 20 L50 50 L60 20" fill="none" stroke="#c0a0ff" stroke-width="1" opacity=".4"/>
    <path d="M40 80 L50 50 L60 80" fill="none" stroke="#c0a0ff" stroke-width="1" opacity=".4"/>
    <circle cx="50" cy="50" r="6" fill="#e0d0ff" opacity=".3"/>
    <circle cx="50" cy="50" r="2" fill="#fff" opacity=".6"/>
  `, true),
  glass: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0a1820"/>
    <polygon points="20,80 35,30 50,80" fill="#1a4050" stroke="#4fa3e0" stroke-width=".8" opacity=".7"/>
    <polygon points="40,85 55,25 70,85" fill="#1a4858" stroke="#4fa3e0" stroke-width=".8" opacity=".8"/>
    <polygon points="55,80 75,35 90,80" fill="#1a4050" stroke="#4fa3e0" stroke-width=".8" opacity=".6"/>
    <path d="M0 85 Q50 75 100 85" fill="#0e2030"/>
    <line x1="45" y1="40" x2="48" y2="50" stroke="#a0e0ff" stroke-width=".6" opacity=".5"/>
    <line x1="60" y1="35" x2="63" y2="48" stroke="#a0e0ff" stroke-width=".6" opacity=".5"/>
  `, true),
  base: s => svgWrap(s, `
    <rect width="100" height="100" fill="#121410"/>
    <rect x="15" y="35" width="70" height="45" fill="#2a2e24" stroke="#5a6048"/>
    <path d="M15 35 L50 18 L85 35" fill="#3a3e30" stroke="#6a7050"/>
    <rect x="42" y="55" width="16" height="25" fill="#1a1c14"/>
    <rect x="25" y="45" width="10" height="8" fill="#1a1c14"/>
    <rect x="65" y="45" width="10" height="8" fill="#1a1c14"/>
    <path d="M50 18 L50 8" stroke="#8a8" stroke-width="1.5"/>
    <rect x="47" y="5" width="6" height="4" fill="#c2543c"/>
    <rect y="80" width="100" height="20" fill="#1a1c14"/>
  `),
  dump: s => svgWrap(s, `
    <rect width="100" height="100" fill="#141210"/>
    <ellipse cx="35" cy="70" rx="25" ry="15" fill="#2a2820"/>
    <ellipse cx="65" cy="65" rx="28" ry="18" fill="#2e2a22"/>
    <ellipse cx="50" cy="80" rx="35" ry="12" fill="#252218"/>
    <rect x="25" y="50" width="12" height="10" fill="#3a4a50" opacity=".6" transform="rotate(-15 31 55)"/>
    <rect x="55" y="48" width="14" height="8" fill="#4a3a30" opacity=".6" transform="rotate(20 62 52)"/>
    <circle cx="70" cy="55" r="5" fill="#3a5050" opacity=".5"/>
    <path d="M10 90 H90" stroke="#3a3830" stroke-width="1"/>
  `),
  market: s => svgWrap(s, `
    <rect width="100" height="100" fill="#1a1810"/>
    <path d="M10 50 L25 30 L40 50 Z" fill="#5a3a20" opacity=".8"/>
    <path d="M35 55 L55 28 L75 55 Z" fill="#6a4a28" opacity=".85"/>
    <path d="M60 50 L80 32 L95 50 Z" fill="#5a3a20" opacity=".75"/>
    <rect x="15" y="50" width="20" height="20" fill="#2a2010"/>
    <rect x="42" y="50" width="25" height="22" fill="#2a2010"/>
    <rect x="68" y="50" width="20" height="18" fill="#2a2010"/>
    <circle cx="50" cy="70" r="3" fill="#e8a33d" opacity=".5"/>
    <rect y="80" width="100" height="20" fill="#14120c"/>
  `),
  school: s => svgWrap(s, `
    <rect width="100" height="100" fill="#141820"/>
    <rect x="15" y="30" width="70" height="50" fill="#2a3440" stroke="#4a5a68"/>
    <rect x="42" y="55" width="16" height="25" fill="#0e141c"/>
    <rect x="22" y="40" width="10" height="10" fill="#0e141c"/>
    <rect x="68" y="40" width="10" height="10" fill="#0e141c"/>
    <rect x="40" y="18" width="20" height="12" fill="#3a4a58"/>
    <path d="M48 24 H52 M50 22 V26" stroke="#c2543c" stroke-width="1.5"/>
    <rect y="80" width="100" height="20" fill="#12161c"/>
  `),
  bridge: s => svgWrap(s, `
    <rect width="100" height="50" fill="#101820"/>
    <rect y="50" width="100" height="50" fill="#0a2030"/>
    <path d="M0 55 Q50 25 100 55" fill="none" stroke="#4a5a68" stroke-width="3"/>
    <path d="M0 60 H100" stroke="#3a4a58" stroke-width="2"/>
    <line x1="20" y1="40" x2="20" y2="60" stroke="#4a5a68" stroke-width="1.5"/>
    <line x1="50" y1="30" x2="50" y2="60" stroke="#4a5a68" stroke-width="1.5"/>
    <line x1="80" y1="40" x2="80" y2="60" stroke="#4a5a68" stroke-width="1.5"/>
    <path d="M0 70 Q30 65 50 72 T100 68" fill="none" stroke="#1a4050" stroke-width="1" opacity=".6"/>
  `),
  grave: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0e1410"/>
    <path d="M20 75 L20 50 L28 45 L36 50 L36 75 Z" fill="#2a3028" stroke="#4a5a48"/>
    <path d="M50 80 L50 45 L60 38 L70 45 L70 80 Z" fill="#2a3028" stroke="#4a5a48"/>
    <path d="M75 78 L75 55 L82 50 L88 55 L88 78 Z" fill="#2a3028" stroke="#4a5a48"/>
    <path d="M0 85 Q50 80 100 88" fill="#1a2018"/>
    <circle cx="40" cy="25" r="12" fill="#c8d0c8" opacity=".06"/>
  `),
  post: s => svgWrap(s, `
    <rect width="100" height="100" fill="#141810"/>
    <rect x="25" y="40" width="50" height="35" fill="#2a3020" stroke="#5a6840"/>
    <rect x="40" y="55" width="12" height="20" fill="#1a1c14"/>
    <rect x="10" y="30" width="6" height="50" fill="#3a4030"/>
    <rect x="84" y="30" width="6" height="50" fill="#3a4030"/>
    <path d="M10 30 H90" stroke="#6a7850" stroke-width="1.5"/>
    <rect x="45" y="35" width="10" height="6" fill="#c2543c" opacity=".5"/>
    <rect y="80" width="100" height="20" fill="#1a1c14"/>
  `),
  garage: s => svgWrap(s, `
    <rect width="100" height="100" fill="#121410"/>
    <rect x="10" y="35" width="35" height="40" fill="#2a2e24" stroke="#4a5040"/>
    <rect x="55" y="35" width="35" height="40" fill="#2a2e24" stroke="#4a5040"/>
    <path d="M12 35 L27 22 L43 35" fill="#3a3e30"/>
    <path d="M57 35 L72 22 L88 35" fill="#3a3e30"/>
    <rect x="20" y="50" width="16" height="25" fill="#1a1c14"/>
    <rect x="65" y="50" width="16" height="25" fill="#1a1c14"/>
    <rect y="80" width="100" height="20" fill="#1a1c14"/>
  `),
  water: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0c1820"/>
    <rect x="25" y="20" width="50" height="55" fill="#1a2a34" stroke="#3a5a68"/>
    <rect x="35" y="30" width="12" height="20" fill="#0a1520"/>
    <rect x="53" y="30" width="12" height="20" fill="#0a1520"/>
    <path d="M20 75 Q50 70 80 78" fill="#0a3040" opacity=".6"/>
    <path d="M15 85 Q50 80 85 88" fill="#0a2838" opacity=".5"/>
    <circle cx="40" cy="55" r="2" fill="#4fa3e0" opacity=".4"/>
  `),
  bus: s => svgWrap(s, `
    <rect width="100" height="100" fill="#14161a"/>
    <rect x="10" y="40" width="80" height="30" rx="4" fill="#2a3038" stroke="#4a5560"/>
    <rect x="18" y="46" width="14" height="12" fill="#0a1218"/>
    <rect x="38" y="46" width="14" height="12" fill="#0a1218"/>
    <rect x="58" y="46" width="14" height="12" fill="#0a1218"/>
    <circle cx="25" cy="72" r="6" fill="#1a1c20" stroke="#5a6068"/>
    <circle cx="75" cy="72" r="6" fill="#1a1c20" stroke="#5a6068"/>
    <rect x="5" y="50" width="8" height="12" fill="#3a4048"/>
    <rect y="80" width="100" height="20" fill="#12141a"/>
  `),
  tv: s => svgWrap(s, `
    <rect width="100" height="100" fill="#0e1020"/>
    <rect x="30" y="25" width="40" height="55" fill="#1a2040" stroke="#3fd2c7" stroke-width=".8"/>
    <rect x="38" y="35" width="24" height="18" fill="#0a1020"/>
    <circle cx="50" cy="30" r="3" fill="#3fd2c7" opacity=".5"/>
    <path d="M50 25 L50 12" stroke="#5a6a80" stroke-width="1.5"/>
    <path d="M40 12 H60" stroke="#5a6a80" stroke-width="1"/>
    <path d="M35 12 Q30 5 40 8" fill="none" stroke="#3fd2c7" stroke-width=".8" opacity=".4"/>
    <rect y="80" width="100" height="20" fill="#121428"/>
  `, true),
  // default urban / wild / under fallbacks handled in artPlace
};

/* ---------- ТРАНСПОРТ ---------- */
const VEH_ART = {
  bike: s => svgWrap(s, `
    <rect width="100" height="100" fill="#12161c"/>
    <circle cx="30" cy="68" r="14" fill="none" stroke="#8a9aaa" stroke-width="3"/>
    <circle cx="70" cy="68" r="14" fill="none" stroke="#8a9aaa" stroke-width="3"/>
    <circle cx="30" cy="68" r="3" fill="#5a6a7a"/>
    <circle cx="70" cy="68" r="3" fill="#5a6a7a"/>
    <path d="M30 68 L50 40 L70 68" fill="none" stroke="#6a7a8a" stroke-width="2.5"/>
    <path d="M50 40 L50 55 L40 68" fill="none" stroke="#6a7a8a" stroke-width="2"/>
    <path d="M48 40 L55 32" stroke="#8a9aaa" stroke-width="2"/>
    <rect x="44" y="38" width="8" height="5" rx="1" fill="#4a5a6a"/>
  `),
  moto: s => svgWrap(s, `
    <rect width="100" height="100" fill="#12141a"/>
    <circle cx="28" cy="70" r="13" fill="none" stroke="#9aa" stroke-width="3"/>
    <circle cx="72" cy="70" r="13" fill="none" stroke="#9aa" stroke-width="3"/>
    <path d="M28 70 L40 48 L60 48 L72 70" fill="none" stroke="#6a7a8a" stroke-width="2.5"/>
    <path d="M40 48 L50 38 L58 48" fill="#3a4555" stroke="#7a8a9a"/>
    <path d="M50 38 L55 28" stroke="#8a9aaa" stroke-width="2"/>
    <rect x="42" y="50" width="16" height="10" rx="2" fill="#2a3545"/>
    <circle cx="28" cy="70" r="3" fill="#5a6"/>
    <circle cx="72" cy="70" r="3" fill="#5a6"/>
  `),
  car: s => svgWrap(s, `
    <rect width="100" height="100" fill="#12161c"/>
    <path d="M12 62 L20 48 L40 42 L65 42 L82 50 L90 62 Z" fill="#2a3545" stroke="#5a6a7a" stroke-width="1.5"/>
    <path d="M28 48 L35 36 L55 36 L62 48" fill="#1a2838" stroke="#4a5a6a"/>
    <rect x="32" y="40" width="10" height="8" fill="#0a1520" opacity=".7"/>
    <rect x="50" y="40" width="10" height="8" fill="#0a1520" opacity=".7"/>
    <circle cx="30" cy="64" r="8" fill="#1a1c20" stroke="#6a7080" stroke-width="2"/>
    <circle cx="72" cy="64" r="8" fill="#1a1c20" stroke="#6a7080" stroke-width="2"/>
    <rect x="14" y="55" width="6" height="4" fill="#e8a33d" opacity=".5"/>
    <rect x="82" y="55" width="6" height="4" fill="#c2543c" opacity=".5"/>
  `),
  truck: s => svgWrap(s, `
    <rect width="100" height="100" fill="#121410"/>
    <rect x="8" y="40" width="50" height="30" fill="#2a3028" stroke="#5a6848"/>
    <path d="M58 48 L70 48 L78 58 L78 70 L58 70 Z" fill="#3a4030" stroke="#6a7850"/>
    <rect x="62" y="52" width="10" height="8" fill="#0a1008"/>
    <circle cx="22" cy="72" r="7" fill="#1a1c14" stroke="#5a6050" stroke-width="2"/>
    <circle cx="48" cy="72" r="7" fill="#1a1c14" stroke="#5a6050" stroke-width="2"/>
    <circle cx="70" cy="72" r="7" fill="#1a1c14" stroke="#5a6050" stroke-width="2"/>
    <rect x="12" y="48" width="12" height="10" fill="#1a2010" opacity=".5"/>
  `)
};

const VEH_KIND_MAP = {
  bike:"bike", bike_tour:"bike", bike_cargo:"bike", bike_fold:"bike",
  moto:"moto", moto_enduro:"moto", moto_chopper:"moto", moto_scooter:"moto",
  car:"car", car_hatch:"car", car_wagon:"car", car_pickup:"car", car_suv:"car",
  truck:"truck", truck_box:"truck", truck_flat:"truck", truck_army:"truck", truck_bus:"truck"
};

/* ---------- ВЕЩИ (легендарный+) ---------- */
const RAR_COL = {
  4: {a:"#E8A33D", b:"#6B4E1B", g:"#ffc878"},
  5: {a:"#E8514D", b:"#6B2523", g:"#ff8a80"},
  6: {a:"#2FBFA8", b:"#1B5A50", g:"#7ee0d0"},
  7: {a:"#EDEBFF", b:"#8E8FB8", g:"#ffffff"},
  u:  {a:"#FF8A3D", b:"#8A4517", g:"#ffb070"}
};

function itemMotif(it){
  const s = (it && it.s) || "art";
  const ty = (it && it.ty) || "";
  if(s==="wpn"){
    if(ty==="r") return "gun";
    if(ty==="e") return "staff";
    return "blade";
  }
  if(s==="body") return "armor";
  if(s==="head") return "helm";
  if(s==="feet"||s==="legs"||s==="hands") return "gear";
  if(s==="ring"||s==="neck") return "jewel";
  if(s==="bag") return "bag";
  return "relic";
}

function artItemSvg(it, size){
  const s = size || 64;
  const rk = it.uq ? "u" : (it.r >= 4 ? it.r : 4);
  const col = RAR_COL[rk] || RAR_COL[4];
  const motif = itemMotif(it);
  let core = "";
  if(motif==="blade"){
    core = `<path d="M50 12 L55 55 L50 88 L45 55 Z" fill="${col.a}" opacity=".85"/>
      <path d="M45 55 L50 20 L55 55" fill="none" stroke="${col.g}" stroke-width="1" opacity=".6"/>
      <rect x="42" y="55" width="16" height="6" rx="1" fill="${col.b}"/>
      <rect x="47" y="61" width="6" height="12" fill="${col.b}"/>`;
  } else if(motif==="gun"){
    core = `<rect x="20" y="42" width="55" height="12" rx="2" fill="${col.a}" opacity=".85"/>
      <rect x="65" y="38" width="18" height="8" fill="${col.b}"/>
      <rect x="28" y="54" width="10" height="16" fill="${col.b}"/>
      <circle cx="30" cy="48" r="2" fill="${col.g}" opacity=".7"/>`;
  } else if(motif==="staff"){
    core = `<rect x="47" y="18" width="6" height="65" rx="2" fill="${col.b}"/>
      <circle cx="50" cy="20" r="10" fill="${col.a}" opacity=".7"/>
      <circle cx="50" cy="20" r="5" fill="${col.g}" opacity=".5"/>
      <path d="M40 22 Q50 10 60 22" fill="none" stroke="${col.g}" stroke-width="1" opacity=".5"/>`;
  } else if(motif==="armor"){
    core = `<path d="M30 30 L50 22 L70 30 L68 70 L50 80 L32 70 Z" fill="${col.b}" stroke="${col.a}" stroke-width="1.5"/>
      <path d="M40 40 L50 35 L60 40 L58 60 L50 65 L42 60 Z" fill="${col.a}" opacity=".4"/>
      <circle cx="50" cy="48" r="4" fill="${col.g}" opacity=".4"/>`;
  } else if(motif==="helm"){
    core = `<path d="M28 55 Q28 28 50 25 Q72 28 72 55 L68 62 L32 62 Z" fill="${col.b}" stroke="${col.a}" stroke-width="1.5"/>
      <rect x="38" y="42" width="10" height="6" fill="#0a0c10" opacity=".7"/>
      <rect x="52" y="42" width="10" height="6" fill="#0a0c10" opacity=".7"/>
      <path d="M50 25 L50 18" stroke="${col.g}" stroke-width="1.5" opacity=".6"/>`;
  } else if(motif==="jewel"){
    core = `<circle cx="50" cy="48" r="18" fill="${col.b}" stroke="${col.a}" stroke-width="2"/>
      <polygon points="50,32 58,48 50,64 42,48" fill="${col.a}" opacity=".7"/>
      <circle cx="50" cy="48" r="5" fill="${col.g}" opacity=".5"/>`;
  } else if(motif==="bag"){
    core = `<path d="M30 40 L35 30 L65 30 L70 40 L68 75 L32 75 Z" fill="${col.b}" stroke="${col.a}" stroke-width="1.5"/>
      <path d="M40 30 Q50 22 60 30" fill="none" stroke="${col.a}" stroke-width="2"/>
      <circle cx="50" cy="52" r="4" fill="${col.g}" opacity=".4"/>`;
  } else {
    core = `<circle cx="50" cy="50" r="22" fill="${col.b}" stroke="${col.a}" stroke-width="2"/>
      <path d="M50 30 L55 50 L50 70 L45 50 Z" fill="${col.a}" opacity=".7"/>
      <circle cx="50" cy="50" r="6" fill="${col.g}" opacity=".45"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="${col.a}" stroke-width=".6" opacity=".3"/>`;
  }
  const bg = `<rect width="100" height="100" fill="#0c1016"/>
    <circle cx="50" cy="50" r="40" fill="${col.a}" opacity=".06"/>
    ${core}
    <text x="50" y="92" text-anchor="middle" font-size="8" fill="${col.a}" opacity=".7" font-family="system-ui,sans-serif">${(it.ic||"◆").slice(0,2)}</text>`;
  return svgWrap(s, bg, true);
}

/* ---------- ПУБЛИЧНЫЙ API ---------- */
function artHasPlace(id){ return !!(PLACE[id]); }

function artPlace(id, size){
  size = size || 52;
  const fn = PLACE[id];
  if(fn) return fn(size);
  // fallback: type-tinted cityscape using seed from id
  return PLACE.block(size);
}

function artVeh(type, size){
  size = size || 56;
  const kind = VEH_KIND_MAP[type] || type;
  const fn = VEH_ART[kind] || VEH_ART.car;
  return fn(size);
}

function artItem(it, size){
  if(!it) return "";
  const rare = it.uq || (typeof it.r==="number" && it.r>=4);
  if(!rare) return null; // caller keeps emoji/ic
  return artItemSvg(it, size||64);
}

global.RIFT_ART = {
  PLACE_IDS: Object.keys(PLACE),
  artPlace, artVeh, artItem, artHasPlace
};
global.artPlace = artPlace;
global.artVeh = artVeh;
global.artItem = artItem;
global.artHasPlace = artHasPlace;

})(typeof window!=="undefined"?window:globalThis);
