"use client";

import { useSite } from "./SiteProvider";

export function SkipLink() {
  const { t } = useSite();
  return (
    <a className="skip" href="#main">
      {t.ui.skip}
    </a>
  );
}
