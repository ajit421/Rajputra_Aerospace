# Rajputra Aerospace website

A one-page product website for the Rajputra Aerospace concept aircraft, live at https://rajputra-aerospace.pages.dev.

**Stack:** Vite 8, React 19, TypeScript 6, Tailwind CSS 4, Motion (animations), sharp (image optimisation) and oxlint.

## Commands

```bash
npm install        # once
npm run dev        # local dev server at http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # serve the built dist/ at http://localhost:4173
npm run lint       # oxlint
npm run images     # regenerate public/images and public/docs from ../Documentation
```

## How it's organised

- `src/data.ts` holds all the copy, figures, image lists and `CONTACT_EMAIL`. Edit text here, not in the components.
- `src/components/`:
  - `Hero.tsx`: the opening screen.
  - `Nav.tsx`: the top navigation.
  - `Sections.tsx`: every middle section, from safety to missions.
  - `Reserve.tsx`: the enquiry form and footer.
  - `ui.tsx`: the shared scroll-reveal and heading components.
- Theme colours and fonts are Tailwind v4 `@theme` tokens in `src/index.css`, for example `bg-carbon`, `text-copper` and `font-display`.
- `scripts/optimize-images.mjs` reads the original renders from `../Documentation`, resizes them, converts them to WebP and writes them to `public/images/`. It also copies the two PDFs into `public/docs/`. Add new images to its map, then run `npm run images`.
- `wrangler.jsonc` is the Cloudflare Pages config. See `../SETUP.md` for deployment.

## Notes

- The site has no backend. The enquiry form opens the visitor's email app with the message filled in, addressed to `CONTACT_EMAIL`.
- The figures are design targets from the technical report, and the site labels them that way.
- `public/docs/` holds about 31 MB of PDFs, which anyone visiting the site can download.
