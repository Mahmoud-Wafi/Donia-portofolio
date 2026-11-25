"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/content";
import { useSite } from "./SiteProvider";

export function Contact() {
  const { t } = useSite();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = t.contact.template.replace("{name}", name.trim()).replace("{message}", message.trim());
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <div>
          <h2 className="h2">{t.contact.title}</h2>
          <p className="prose">{t.contact.lead}</p>

          <ul className="reach">
            <li>
              <span>{t.contact.whatsapp}</span>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" dir="ltr">
                {SITE.phone}
              </a>
            </li>
            <li>
              <span>{t.contact.instagram}</span>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" dir="ltr">
                @doniaWebSite
              </a>
            </li>
            <li>
              <span>{t.contact.email}</span>
              <a href={`mailto:${SITE.email}`} dir="ltr">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <span>{t.contact.name}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="field">
            <span>{t.contact.message}</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder={t.contact.messagePh}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            {t.contact.send}
          </button>
          <p className="form-note">{t.contact.note}</p>
        </form>
      </div>
    </section>
  );
}
