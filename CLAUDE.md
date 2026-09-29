# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo is for **Rajputra Aerospace**, a concept gyro-VTOL aircraft. "Rajputra Aerospace" is the single name for the company, the aircraft and the website. Use it everywhere, and write "the Rajputra Aerospace aircraft" where a sentence needs the aircraft itself.

The project was earlier called "Air One Rajput", then "Rajput Royale". Text baked into the images, the PDFs and the downloaded `.pptx` still shows those names. Changing it means regenerating those files from the updated prompts.

- `Documentation/`: design assets, with no build step. It holds:
  - The AI image-generation prompt guides (Markdown).
  - The images generated from them.
  - Two PDFs: `Rajputra_Aerospace_Dossier.pdf` and `Rajputra_Aerospace_Engineering.pdf`.
  - The investor pitch deck (`Rajputra_Aerospace_Pitch_Deck.pptx`).
- `Rajputra_Aerospace_web/`: the product website, deployed at https://rajputra-aerospace.pages.dev. Stack: Vite 8, React 19, TypeScript, Tailwind CSS 4, Motion. See its README.
- `Rajputra_Aerospace_client/`: a second website built from the client's Claude artifact design, on the same stack. It has its own README. Its drawings in `images-src/` were edited to the current name and dimensions, so don't regenerate them from `Documentation/`. Leave `Rajputra_Aerospace_web/` alone when working on it.
- `SETUP.md`: GitHub and Cloudflare Pages deployment steps.

The folders in `../` (`renders/`, `video/`, `new_image/`, `images/`, `AIR_ONE_X1_*`) belong to the earlier **AIR ONE X1** concept, which is a different airframe. Do not use X1 assets for this aircraft, and don't rename the `air_one_x1_*` reference filenames in the prompt guides. `../images/` holds the X1 blueprints that the technical prompts were modeled on.

## Website commands (run inside `Rajputra_Aerospace_web/`)

```bash
npm run dev       # dev server, http://localhost:5173
npm run build     # tsc -b && vite build -> dist/
npm run lint      # oxlint
npm run images    # regenerate public/images/*.webp and public/docs/*.pdf from ../Documentation
```

There are no tests. All copy and figures live in `src/data.ts`. Theme tokens are the `@theme` block in `src/index.css`. The site is static, and the enquiry form opens the visitor's email app (`CONTACT_EMAIL` in `data.ts`). To add an image, add it to the map in `scripts/optimize-images.mjs`, run `npm run images`, and commit the generated `.webp` file.

`scene_08_tokyo_cyberpunk.jpg` is deliberately left out of the website. That render shows a winged, off-design aircraft.

## Prompt guides (in `Documentation/`)

The guides are written in Hinglish (Hindi and English mixed), with the prompts themselves in English. Keep that style. Prompts target Nano Banana (Gemini image generation) and assume reference images are attached.

| File | Covers | Output images |
|---|---|---|
| `RAJPUTRA_AEROSPACE_ORIGINAL_PROMPTS_GUIDE.md` | 5 white-studio orthographic views (left, right, top, front, rear) | `*_side_view*.jpg/png` |
| `RAJPUTRA_AEROSPACE_10_SCENIC_PROMPTS.md` | 10 location and flight scenes | `scene_01_…` to `scene_10_…` |
| `RAJPUTRA_AEROSPACE_TECHNICAL_BLUEPRINT_PROMPTS.md` | 7 blueprint, exploded, cutaway and CFD sheets, each mapped to an X1 reference in `../images/` | `rajputra_aerospace_*.jpg` |

Each guide has the same structure:

1. A design summary.
2. An optional table mapping prompts to output files.
3. One fenced `text` block per prompt.
4. A final negative-prompt block.

New prompts should follow it.

## Canonical design spec (every prompt and page must keep this consistent)

- **Fuselage:** teardrop pod with a metallic copper-orange upper shell and a matte dark carbon-fiber lower hull. The cabin flanks are completely clean, with **no side or mid-body fans**.
- **Canopy:** large panoramic curved tinted bubble canopy with two leather cockpit seats.
- **Rotor:** central roof mast carrying a **strictly 2-blade** straight carbon autogyro rotor. Image models often draw 4 blades, so prompts state the count explicitly.
- **Propulsion:** the only fans are **two rear ducted thrusters**, one at the tip of each swept aft pylon. The pylon layout is inspired by the Swallow-tailed Kite (reference photo: `Swallow-tailed_Kite_…webp`).
- **Tail:** tailless. No fin, rudder or tail boom, and no wings.
- **Landing gear:** tricycle airplane gear: one steerable nose wheel on a vertical strut, plus two wide-stance rear wheels with wire spokes on diagonal carbon cantilever struts.
  - Studio views and blueprints **show the wheels**.
  - The in-flight scenic prompts (01–07) say "no wheels / no landing gear". This is intentional. `scene_monaco_helipad_with_wheels.jpg` is the landed variant.

## Engineering figures (company spec sheet, Sept 2026, plus the technical design report)

These are design targets, not certified data. Blueprint callouts already cite some report terms: "Monocoque Teardrop Pod (Cd = 0.178)", "Boundary Layer Ingestion", "Tailless Low-Drag Boat-Tail", "Optimized High-Speed Takeoff Rake".

- **Type:** plug-in hybrid-electric autogyro, 2 seats in a single row. The rotor is powered only for vertical takeoff and landing, and autorotates unpowered in cruise. The two rear ducted fans give all forward thrust, and each swivels independently through 90° to counter rotor torque during VTOL.
- **Rotor:** 2-blade carbon rotor with a Rotating Mass Balancer on the mast. The mast rises from a "sway-back" pylon profile.
- **Power:** Motor 500 Series brushless (BLDC) motors in composite ducts, a 40 kWh fast-charging solid-state Li-ion battery, and a hybrid generator fed by a 60 L tank (E20 and biofuel compatible).
- **Dimensions:**

  | Measure | Value |
  |---|---|
  | Length | 4795 mm |
  | Width | 1855 mm |
  | Height | 3000 mm |
  | Wheelbase | 2700 mm |
  | Rotor span | 8500 mm (old report figure, not on the new spec sheet) |

  The older report and the blueprint images use 5850 mm length, 3150 mm track and 3150 mm height.

- **Mass:**

  | Measure | Value |
  |---|---|
  | Maximum takeoff weight (MTOW) | 500 kg |
  | Empty weight | 250 kg |
  | Payload | 250 kg |

- **Performance:** 300 km/h cruise, 2 h+ endurance, 600 km range, 20,000 ft ceiling, Cd 0.178.
- **Takeoff and landing:** electric VTOL from an MPV-sized parking space; ultra-short takeoff from unprepared roads or fields.
- **Economics:** about ₹20/km, about ₹6,000 per flight hour, price from ₹55 lakh.

Some claims in the report don't hold up well, so avoid repeating them uncritically:

- "Cannot stall."
- "VTOL from a parking space." The fuselage fits, but an 8.5 m rotor does not clear a typical 5 m bay.

Shared negative prompt (the blueprint guide replaces the last terms with `blurry, low resolution, messy lines`):
```
tail fin, vertical rudder, tail boom, wings, mid-body thruster fans, cabin-side rotors, 3 blades, 4 blades, helicopter tail rotor, asymmetric thrusters, low quality, cartoon, grainy, sketch, noisy, distorted canopy
```

## Known gaps in the docs

- The guides call the primary reference image `Documentation/orignal.png` (misspelled). That file doesn't exist; `top_side_view.png` does.
- The blueprint table links `rajputra_aerospace_dark_cutaway_blueprint.jpg`, but that file has not been generated yet.
- The scenic table still lists scenes 06–10 as "Prompt Below", but their images already exist.
