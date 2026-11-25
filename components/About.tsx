"use client";

import { useSite } from "./SiteProvider";

export function About() {
  const { t } = useSite();
  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div>
          <h2 className="h2">{t.about.title}</h2>
          <p className="prose">{t.about.p1}</p>
          <p className="prose">{t.about.p2}</p>
        </div>

        <div>
          <h3 className="h3">{t.about.skillsTitle}</h3>
          <dl className="skills">
            {t.about.groups.map((g) => (
              <div className="skills-row" key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
