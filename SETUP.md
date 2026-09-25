# Setup, GitHub and deployment

How to run the Rajputra Aerospace website on your computer, push the project to GitHub, and put the website online with **Cloudflare Pages**.

## What's in this repo

```
Rajput/                      <- the Git repository root
├── CLAUDE.md                instructions for Claude Code
├── SETUP.md                 this file
├── .gitignore
├── Documentation/           prompt guides, renders, PDFs, pitch deck (.pptx)
└── Rajputra_Aerospace_web/       the website (Vite + React + TypeScript + Tailwind)
    ├── src/data.ts          all website text, numbers and the contact email
    ├── src/components/      page sections
    ├── public/images/       compressed WebP images (generated, committed)
    ├── public/docs/         the two PDFs offered for download
    └── scripts/optimize-images.mjs
```

Only `Rajputra_Aerospace_web/` is deployed. `Documentation/` is kept in GitHub as the source material, but it is not part of the website.

## 1. Install the tools (once)

| Tool | Check | Get it |
|---|---|---|
| Node.js 22 or newer | `node -v` | https://nodejs.org (LTS) |
| Git | `git --version` | https://git-scm.com |
| GitHub CLI (optional, makes step 3 easier) | `gh --version` | https://cli.github.com |
| A GitHub account | | https://github.com/signup |
| A Cloudflare account (free) | | https://dash.cloudflare.com/sign-up |

This computer already has Node 22, Git and the GitHub CLI.

## 2. Run the website locally

```bash
cd Rajputra_Aerospace_web
npm install          # first time only
npm run dev          # opens at http://localhost:5173
```

Other commands:

```bash
npm run build        # production build into dist/ (also type-checks)
npm run preview      # serve the production build at http://localhost:4173
npm run lint         # code checks
npm run images       # rebuild public/images and public/docs from ../Documentation
```

To change text or numbers, edit `src/data.ts`.

To add or replace a photo:

1. Put the original file in `Documentation/`.
2. Add it to the list in `scripts/optimize-images.mjs`.
3. Run `npm run images`.

## 3. Before you push, check these

- [x] **Contact email.** In `Rajputra_Aerospace_web/src/data.ts`, change `CONTACT_EMAIL` from `hello@airone.example` to your real address. The enquiry form sends to this address.
- [x] **Public PDFs.** Anyone who visits the website can download the dossier and engineering PDFs from `public/docs/`. If they're confidential, delete both files and remove the two download buttons in `src/components/Reserve.tsx`.
- [x] **The build passes.** Run `npm run build` inside `Rajputra_Aerospace_web/` and make sure it finishes without errors.

## 4. Push to GitHub

Make the repository **private**. It contains the pitch deck and the engineering files. The website can still be public: Cloudflare builds from a private repository without any problem.

Run these from the `Rajput` folder (the one that contains this file). Start with `git init` and your first commit:

```bash
cd D:/Desktop/Air_one/Rajput

# one-time identity setup, if you've never used Git on this computer
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

git init -b main
git add .
git status            # check: node_modules/ and dist/ must NOT be listed
git commit -m "Rajputra Aerospace: documentation and website"
```

Then create the GitHub repository and push. Use option A if you have the GitHub CLI, or option B if you prefer the browser.

**Option A: GitHub CLI (easiest)**

```bash
gh auth login                      # first time only; choose GitHub.com, HTTPS, login with browser
gh repo create rajputra-aerospace --private --source . --push
```

**Option B: GitHub website**

1. Go to https://github.com/new, name the repository `rajputra-aerospace`, choose **Private**, and leave "Add a README" **unticked**.
2. Then run:

   ```bash
   git remote add origin https://github.com/<your-username>/rajputra-aerospace.git
   git push -u origin main
   ```

The first push uploads about 100 MB, mostly images, PDFs and the .pptx, so it can take a few minutes. If it fails with `RPC failed` or `HTTP 400`, run this once and push again:

```bash
git config http.postBuffer 524288000
```

After the first push, every later change is just:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## 5. Deploy on Cloudflare Pages (recommended)

**Why Cloudflare rather than Vercel:**

- **Commercial use:** Vercel's free (Hobby) plan is for non-commercial use only. Rajputra Aerospace is a business website with investor material, so on Vercel you'd need the paid Pro plan (about $20 a month). Cloudflare's free plan allows commercial sites.
- **Bandwidth:** unlimited on Cloudflare's free plan, which matters because this site serves large images and PDFs.
- **Speed:** Cloudflare has a large network, including many locations in India, so pages load quickly for visitors there.
- **File sizes:** Cloudflare accepts files up to 25 MB each. The biggest file here is the 17.5 MB engineering PDF, so everything fits.

### Deploy from GitHub (automatic on every push)

The site is a Cloudflare **Pages** project, which gives the address `https://rajputra-aerospace.pages.dev`. `Rajputra_Aerospace_web/wrangler.jsonc` tells Pages to publish the `dist/` folder.

A Cloudflare *Worker* can serve the same site, but its address ends in `.workers.dev`. Only a Pages project gets a `.pages.dev` address.

1. Log in at https://dash.cloudflare.com and open **Compute → Workers & Pages**.
2. Click **Create application**. Do **not** click "Connect GitHub" on the first screen, because that creates a Worker. Use the link **"Continue to Pages"** at the bottom instead.
3. Choose **Import an existing Git repository**, then select `ajit421/Rajputra_Aerospace`.
4. Enter these build settings:

   | Setting | Value |
   |---|---|
   | Project name | `rajputra-aerospace` (this becomes `rajputra-aerospace.pages.dev`) |
   | Production branch | `main` |
   | Framework preset | `Vite` (or `None`) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | **Root directory** (under *Advanced*) | `Rajputra_Aerospace_web` |
   | Environment variable | `NODE_VERSION` = `22` |

   The **Root directory** setting matters most. Without it, Cloudflare looks for the website in the wrong folder and the build fails.
5. Click **Save and Deploy**. The site goes live at `https://rajputra-aerospace.pages.dev` in about 1–2 minutes. Project names are global: if someone else already has `rajputra-aerospace`, Cloudflare adds a random suffix. In that case, pick another name, or use a custom domain (see below).

From now on, every `git push` to `main` rebuilds and redeploys the site automatically. Every other branch gets its own preview link.

**If GitHub won't connect** (error "Cloudflare Pages was unable to be installed"):

1. In GitHub → Settings → Applications, uninstall **Cloudflare Workers and Pages**.
2. In the **Authorized GitHub Apps** tab, revoke it as well.
3. Connect again from Cloudflare.

### Use your own domain (optional)

In the Pages project, open **Custom domains → Set up a custom domain**, and enter your domain, for example `rajputraaerospace.com`. If the domain is already on Cloudflare, it connects automatically. If it isn't, Cloudflare shows you the DNS record to add at your domain registrar. HTTPS is set up for you.

### Deploy without GitHub (alternative)

To put a build online directly from your computer:

```bash
cd Rajputra_Aerospace_web
npm run build
npx wrangler pages deploy  # uses wrangler.jsonc and uploads dist/ to rajputra-aerospace.pages.dev
```

The first run opens a browser so you can log in to Cloudflare.

## 6. If you'd rather use Vercel

This only suits non-commercial use on the free plan. For a business site you need Vercel Pro.

1. Go to https://vercel.com/new and import the `rajputra-aerospace` GitHub repository.
2. Set **Root Directory** to `Rajputra_Aerospace_web`. Vercel detects Vite and fills in `npm run build` and `dist` on its own.
3. Click **Deploy**. The site goes live at `rajputra-aerospace.vercel.app`, and every push redeploys it.

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| Cloudflare build says `Could not read package.json` | Root directory isn't set to `Rajputra_Aerospace_web` |
| Build fails on a Node version error | Add the env variable `NODE_VERSION` = `22`; the repo also has `Rajputra_Aerospace_web/.node-version` |
| Images missing on the live site | Commit `Rajputra_Aerospace_web/public/images/*.webp`; they're generated locally and not rebuilt on Cloudflare |
| `git push` rejected: file too large | GitHub's limit is 100 MB per file. Nothing here is that big; check you didn't add videos from `../video` |
| The enquiry form opens the wrong email | Change `CONTACT_EMAIL` in `src/data.ts`, then commit and push |
