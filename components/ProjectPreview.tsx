import type { ReactNode } from "react";
import type { Shop } from "@/lib/content";

type C = { a: string; b: string; bg: string; fg: string };

/** Small illustrations, drawn around (0,0), roughly 170 wide and 140 tall. One per kind of business. */
const ART: Record<string, (c: C) => ReactNode> = {
  // Restaurant: plate with food, fork and knife
  karam: (c) => (
    <>
      <circle r="56" fill={c.b} />
      <circle r="42" fill="none" stroke={c.a} strokeWidth="3" />
      <circle cx="-12" cy="-6" r="13" fill={c.a} />
      <circle cx="14" cy="8" r="10" fill="#e8b04b" />
      <circle cx="-4" cy="20" r="8" fill="#5c8a3a" />
      <rect x="-86" y="-40" width="6" height="80" rx="3" fill={c.b} />
      <rect x="80" y="-40" width="6" height="80" rx="3" fill={c.b} />
    </>
  ),
  // Café: cup, steam and saucer
  noir: (c) => (
    <>
      <ellipse cx="0" cy="66" rx="70" ry="8" fill={c.a} opacity=".5" />
      <path d="M-48 -24h96v34a48 48 0 0 1-96 0z" fill={c.b} />
      <path d="M48 -10h12a20 20 0 0 1 0 40h-14" fill="none" stroke={c.b} strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="0" cy="-24" rx="48" ry="9" fill={c.a} />
      <path
        d="M-16 -44q-10-14 0-26M12 -44q-10-14 0-26"
        fill="none"
        stroke={c.b}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".7"
      />
    </>
  ),
  // Accessories: necklace with pendant and a ring
  wika: (c) => (
    <>
      <path d="M-70 -50q70 120 140 0" fill="none" stroke={c.b} strokeWidth="4" />
      <path d="M0 52l-16-20 16-18 16 18z" fill={c.a} />
      <circle cx="-56" cy="46" r="16" fill="none" stroke={c.a} strokeWidth="6" />
      <circle cx="-56" cy="28" r="5" fill={c.b} />
      <circle cx="62" cy="40" r="10" fill={c.b} opacity=".85" />
    </>
  ),
  // Luxury watches: watch face, strap, ticks and hands
  chronolux: (c) => (
    <>
      <rect x="-24" y="-92" width="48" height="50" rx="8" fill={c.a} opacity=".35" />
      <rect x="-24" y="42" width="48" height="50" rx="8" fill={c.a} opacity=".35" />
      <circle r="52" fill={c.bg} stroke={c.a} strokeWidth="7" />
      {Array.from({ length: 12 }, (_, i) => {
        const major = i % 3 === 0;
        return (
          <line
            key={i}
            x1="0"
            y1={major ? -36 : -38}
            x2="0"
            y2="-42"
            stroke={c.a}
            strokeWidth={major ? 3 : 1.5}
            transform={`rotate(${i * 30})`}
          />
        );
      })}
      <path d="M0 0V-28" stroke={c.fg} strokeWidth="4" strokeLinecap="round" />
      <path d="M0 0L20 10" stroke={c.fg} strokeWidth="3" strokeLinecap="round" />
      <circle r="4" fill={c.a} />
    </>
  ),
  // Furniture: sofa
  luxora: (c) => (
    <>
      <rect x="-70" y="-30" width="140" height="48" rx="14" fill={c.b} />
      <rect x="-84" y="-6" width="34" height="56" rx="12" fill={c.a} />
      <rect x="50" y="-6" width="34" height="56" rx="12" fill={c.a} />
      <rect x="-56" y="8" width="112" height="42" rx="10" fill={c.a} opacity=".8" />
      <rect x="-66" y="50" width="6" height="16" rx="2" fill={c.b} />
      <rect x="60" y="50" width="6" height="16" rx="2" fill={c.b} />
    </>
  ),
  // Gym: dumbbell
  extreme: (c) => (
    <g transform="rotate(-18)">
      <rect x="-60" y="-4" width="120" height="8" rx="4" fill={c.fg} />
      <rect x="-86" y="-34" width="14" height="68" rx="4" fill={c.fg} />
      <rect x="-72" y="-24" width="12" height="48" rx="3" fill={c.fg} opacity=".75" />
      <rect x="72" y="-34" width="14" height="68" rx="4" fill={c.fg} />
      <rect x="60" y="-24" width="12" height="48" rx="3" fill={c.fg} opacity=".75" />
    </g>
  ),
  // Tech retail: laptop and phone
  fox: (c) => (
    <>
      <rect x="-70" y="-46" width="120" height="76" rx="6" fill={c.b} stroke={c.a} strokeWidth="3" />
      <rect x="-60" y="-36" width="100" height="56" rx="3" fill={c.a} opacity=".35" />
      <path d="M-84 30h148l-10 12h-128z" fill={c.a} />
      <rect x="50" y="-10" width="36" height="66" rx="8" fill={c.bg} stroke={c.a} strokeWidth="3" />
      <circle cx="68" cy="46" r="3" fill={c.a} />
    </>
  ),
};

function Art({ id, c, x, y, s }: { id: string; c: C; x: number; y: number; s: number }) {
  const draw = ART[id];
  if (!draw) return null;
  return <g transform={`translate(${x} ${y}) scale(${s})`}>{draw(c)}</g>;
}

/**
 * A tall, stylised "full page screenshot" of the site, made from the project's own name and colours.
 * It is taller than the frame it sits in, so the card can scroll it on hover.
 */
export function ProjectPreview({ shop }: { shop: Shop }) {
  const c: C = { a: shop.a, b: shop.b, bg: shop.bg, fg: shop.fg };
  return (
    <svg
      className="preview"
      viewBox="0 0 400 640"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="640" fill={c.bg} />

      {/* navigation */}
      <rect width="400" height="40" fill={c.fg} opacity=".07" />
      <text x="18" y="25" fontSize="13" fontWeight="700" fill={c.fg} style={{ fontFamily: "var(--font-display)" }}>
        {shop.name}
      </text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={298 + i * 30} y="18" width="20" height="4" rx="2" fill={c.fg} opacity=".5" />
      ))}

      {/* hero */}
      <rect y="40" width="400" height="220" fill={c.a} opacity=".16" />
      <rect x="22" y="92" width="150" height="14" rx="7" fill={c.fg} />
      <rect x="22" y="114" width="120" height="14" rx="7" fill={c.fg} />
      <rect x="22" y="146" width="140" height="6" rx="3" fill={c.fg} opacity=".45" />
      <rect x="22" y="158" width="110" height="6" rx="3" fill={c.fg} opacity=".45" />
      <rect x="22" y="184" width="84" height="26" rx="13" fill={c.a} />
      <Art id={shop.id} c={c} x={300} y={150} s={0.9} />

      {/* three item tiles */}
      <rect x="22" y="282" width="110" height="10" rx="5" fill={c.fg} opacity=".85" />
      {[0, 1, 2].map((i) => {
        const x = 22 + i * 122;
        return (
          <g key={i}>
            <rect x={x} y="306" width="112" height="112" rx="10" fill={c.fg} opacity=".06" />
            <rect x={x} y="306" width="112" height="112" rx="10" fill="none" stroke={c.a} opacity=".35" />
            <Art id={shop.id} c={c} x={x + 56} y={362} s={0.5} />
            <rect x={x} y="428" width="70" height="6" rx="3" fill={c.fg} opacity=".6" />
            <rect x={x} y="440" width="40" height="6" rx="3" fill={c.a} />
          </g>
        );
      })}

      {/* banner */}
      <rect x="22" y="470" width="356" height="92" rx="12" fill={c.a} opacity=".22" />
      <rect x="22" y="470" width="356" height="92" rx="12" fill="none" stroke={c.a} opacity=".5" />
      <rect x="40" y="492" width="150" height="12" rx="6" fill={c.fg} />
      <rect x="40" y="514" width="110" height="6" rx="3" fill={c.fg} opacity=".5" />
      <rect x="40" y="530" width="80" height="20" rx="10" fill={c.a} />
      <Art id={shop.id} c={c} x={312} y={516} s={0.55} />

      {/* footer */}
      <rect y="590" width="400" height="50" fill={c.fg} opacity=".07" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={22 + i * 70} y="612" width="50" height="6" rx="3" fill={c.fg} opacity=".4" />
      ))}
    </svg>
  );
}
