"use client";

import { useEffect, useState } from "react";
import { useSite } from "./SiteProvider";

const links = ["about", "work", "services", "contact"] as const;

export function Header() {
  const { t, toggleLang, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href="#top" aria-label={t.ui.home} onClick={() => setOpen(false)}>
          Donia Haroun
        </a>

        <nav id="primary-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="tools">
          <button type="button" className="tool" onClick={toggleLang} aria-label={t.ui.langLabel}>
            {t.ui.langBtn}
          </button>
          <button
            type="button"
            className="tool tool-icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.ui.toLight : t.ui.toDark}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3 7 7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" />
                </g>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="tool tool-icon menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
