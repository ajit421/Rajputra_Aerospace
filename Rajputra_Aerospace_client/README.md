# Rajputra_Aerospace_client

A one-page website built from the design the client sent as a Claude artifact:
https://claude.ai/artifact/KCXCafdxjLSeXFfjT66XZu

It uses the same stack as `../Rajputra_Aerospace_web`: Vite 8, React 19, TypeScript 6, Tailwind CSS 4, Motion (animations), sharp (image optimisation) and oxlint.

## Commands

```bash
npm install        # once
npm run dev        # local dev server at http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # serve the built dist/ at http://localhost:4173
npm run lint       # oxlint
npm run images     # regenerate public/images/*.webp from images-src/
```

## How it's organised

- `src/data.ts` holds all the copy, figures, image lists, `CONTACT_EMAIL` and the founder's LinkedIn link. Edit text here, not in the components.
- `src/components/`:
  - `Nav.tsx`: the sticky header, with a menu button on small screens.
  - `Hero.tsx`: the opening screen and the four headline figures.
  - `Sections.tsx`: every section from the aircraft overview to the footer.
  - `Lightbox.tsx`: the full-size image viewer. It supports arrow keys, swiping and Esc.
  - `ui.tsx`: shared pieces (scroll reveal, headings, buttons, zoomable images).
- Theme colours and fonts are Tailwind v4 `@theme` tokens in `src/index.css`, for example `bg-ground`, `text-copper` and `font-display`.
- `images-src/` holds the source JPGs. `npm run images` turns them into WebP files in `public/images/`. To add an image, put it in `images-src/`, run `npm run images`, and reference `/images/<name>.webp` in `data.ts`.

## Notes

- The five drawings in `images-src/` were edited from the originals in `../Documentation`. Their title blocks now say "Rajputra Aerospace", and the spec sheet shows the current dimensions (4795 mm length, 2700 mm wheelbase, 3000 mm height, 1855 mm width). Regenerating from `../Documentation` would bring back "Air One Rajput".
- `tokyo.jpg` is the `scene_08_tokyo_cyberpunk` render, which shows a winged, off-design aircraft. The client's design includes it, so it stays.
- The site has no backend. The email button opens the visitor's email app, addressed to `CONTACT_EMAIL`.

## Deploying

This is a static site. On Cloudflare Pages, use build command `npm run build` and output directory `dist`, with this folder as the root directory.
