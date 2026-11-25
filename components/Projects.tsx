"use client";

import type { CSSProperties } from "react";
import { shops } from "@/lib/content";
import { useSite } from "./SiteProvider";
import { ProjectPreview } from "./ProjectPreview";

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

export function Projects() {
  const { t } = useSite();

  return (
    <section id="work" className="projects">
      <div className="wrap">
        <div className="projects-head">
          <h2 className="h2">{t.work.title}</h2>
          <p className="prose">{t.work.lead}</p>
        </div>

        <ul className="cards">
          {shops.map((s, i) => {
            const text = t.projects[i];
            const style = { "--a": s.a, "--b": s.b, "--bg": s.bg, "--fg": s.fg } as CSSProperties;
            const display = s.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            return (
              <li key={s.id} className={`card ${i === 0 ? "card-feature" : ""}`} style={style}>
                <a
                  className="card-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name}, ${text.kind}. ${t.work.open}. ${t.work.openIn}`}
                >
                  <div className="card-media">
                    <div className="browser">
                      <div className="browser-bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span className="browser-url">{display}</span>
                      </div>
                      <div className="browser-view">
                        <div className="browser-pan">
                          <ProjectPreview shop={s} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="card-kind">{text.kind}</p>
                    <h3 className="card-name">{s.name}</h3>
                    <p className="card-desc">{text.desc}</p>
                    <ul className="card-tags">
                      {text.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <span className="card-cta">
                      {t.work.open}
                      <Arrow />
                    </span>
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
