"use client";

import { useSite } from "./SiteProvider";

export function Services() {
  const { t } = useSite();
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="services-head">
          <h2 className="h2">{t.services.title}</h2>
          <p className="prose">{t.services.lead}</p>
        </div>
        <ul className="services">
          {t.services.items.map((item) => (
            <li className="service" key={item.title}>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
