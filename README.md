# Donia Haroun | Portfolio

Next.js (App Router, TypeScript) static site. English and Arabic (RTL), light and dark themes.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static site in ./out
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository on the `main` branch.
2. In the repo: Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

For a user page (`<user>.github.io`), remove the `NEXT_PUBLIC_BASE_PATH` line from the workflow.

## Edit content

- All text (English and Arabic), nav labels and project descriptions: `lib/content.ts`
- Project links, colours and sign styles: `shops` in `lib/content.ts`
- Contact details: `SITE` in `lib/content.ts`
- Colours, type and layout: `app/globals.css` (tokens at the top)
