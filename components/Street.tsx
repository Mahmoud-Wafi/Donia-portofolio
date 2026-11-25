"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { shops } from "@/lib/content";
import { useSite } from "./SiteProvider";

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Street() {
  const { t } = useSite();
  const section = useRef<HTMLElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [lit, setLit] = useState(false);

  // One staged moment: the shop signs switch on, left to right, the first time the street is in view.
  useEffect(() => {
    setArmed(true);
    const el = section.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setLit(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLit(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollByShop = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl" ? -1 : 1;
    const shop = el.querySelector<HTMLElement>(".shop");
    const step = (shop?.offsetWidth ?? 300) + 24;
    el.scrollBy({ left: dir * rtl * step * 2, behavior: "smooth" });
  };

  return (
    <section
      id="work"
      ref={section}
      className={`street ${armed ? "is-armed" : ""} ${lit ? "is-lit" : ""}`}
    >
      <div className="wrap street-head">
        <div>
          <h2 className="h2">{t.work.title}</h2>
          <p className="prose">{t.work.lead}</p>
        </div>
        <div className="street-controls">
          <button type="button" className="round" onClick={() => scrollByShop(-1)} aria-label={t.work.prev}>
            <Arrow />
          </button>
          <button type="button" className="round" onClick={() => scrollByShop(1)} aria-label={t.work.next}>
            <Arrow />
          </button>
        </div>
      </div>

      <div className="street-scroll" ref={scroller} tabIndex={0} role="region" aria-label={t.work.region}>
        <ul className="track">
          {shops.map((s, i) => {
            const text = t.projects[i];
            const style = {
              "--a": s.a,
              "--b": s.b,
              "--bg": s.bg,
              "--fg": s.fg,
              "--i": i,
            } as CSSProperties;
            return (
              <li className="shop-wrap" key={s.id} style={style}>
                <a
                  className="shop"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name}, ${text.kind}. ${t.work.open}. ${t.work.openIn}`}
                >
                  <div className="shop-sign">
                    <span className={`shop-name ${s.signClass}`}>{s.name}</span>
                  </div>
                  <div className="shop-awning" aria-hidden="true" />
                  <div className="shop-window">
                    <p className="shop-kind">{text.kind}</p>
                    <p className="shop-desc">{text.desc}</p>
                    <ul className="shop-tags">
                      {text.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="shop-door">
                    <span>{t.work.open}</span>
                    <Arrow />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
