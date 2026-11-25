"use client";

import { SITE } from "@/lib/content";
import { useSite } from "./SiteProvider";

export function Hero() {
  const { t } = useSite();
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              {t.hero.ctaWork}
            </a>
            <a className="btn btn-ghost" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              {t.hero.ctaTalk}
            </a>
          </div>
        </div>

        <div className="hang" aria-hidden="false">
          <span className="hang-string" aria-hidden="true" />
          <div className="hang-sign">
            <span className="hang-dot" aria-hidden="true" />
            <span className="hang-text">{t.hero.status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
