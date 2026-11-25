"use client";

import { useSite } from "./SiteProvider";

export function Footer() {
  const { t } = useSite();
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <a href="#top">{t.footer.top}</a>
      </div>
    </footer>
  );
}
