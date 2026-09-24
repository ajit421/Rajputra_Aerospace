# Setup, GitHub and deployment

How to run the Rajput Royale website on your computer, push the project to GitHub, and put the website online with **Cloudflare Pages**.

## What's in this repo

```
Rajput/                      <- the Git repository root
├── CLAUDE.md                instructions for Claude Code
├── SETUP.md                 this file
├── .gitignore
├── Documentation/           prompt guides, renders, PDFs, pitch deck (.pptx)
└── Rajput_royale_web/       the website (Vite + React + TypeScript + Tailwind)
    ├── src/data.ts          all website text, numbers and the contact email
    ├── src/components/      page sections
    ├── public/images/       compressed WebP images (generated, committed)
    ├── public/docs/         the two PDFs offered for download
    └── scripts/optimize-images.mjs
```

Only `Rajput_royale_web/` is deployed. `Documentation/` is kept in GitHub as the source material, but it is not part of the website.

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
cd Rajput_royale_web
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

- [x] **Contact email.** In `Rajput_royale_web/src/data.ts`, change `CONTACT_EMAIL` from `hello@airone.example` to your real address. The enquiry form sends to this address.
- [x] **Public PDFs.** Anyone who visits the website can download the dossier and engineering PDFs from `public/docs/`. If they're confidential, delete both files and remove the two download buttons in `src/components/Reserve.tsx`.
- [x] **The build passes.** Run `npm run build` inside `Rajput_royale_web/` and make sure it finishes without errors.

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
git commit -m "Rajput Royale: documentation and website"
```

Then create the GitHub repository and push. Use option A if you have the GitHub CLI, or option B if you prefer the browser.

**Option A: GitHub CLI (easiest)**

```bash
gh auth login                      # first time only; choose GitHub.com, HTTPS, login with browser
gh repo create rajput-royale --private --source . --push
```

**Option B: GitHub website**

1. Go to https://github.com/new, name the repository `rajput-royale`, choose **Private**, and leave "Add a README" **unticked**.
2. Then run:

   ```bash
   git remote add origin https://github.com/<your-username>/rajput-royale.git
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

- **Commercial use:** Vercel's free (Hobby) plan is for non-commercial use only. Rajput Royale is a business website with investor material, so on Vercel you'd need the paid Pro plan (about $20 a month). Cloudflare's free plan allows commercial sites.
- **Bandwidth:** unlimited on Cloudflare's free plan, which matters because this site serves large images and PDFs.
- **Speed:** Cloudflare has a large network, including many locations in India, so pages load quickly for visitors there.
- **File sizes:** Cloudflare accepts files up to 25 MB each. The biggest file here is the 17.5 MB engineering PDF, so everything fits.

### Deploy from GitHub (automatic on every push)

The site runs as a Cloudflare **Worker** with static assets. `Rajput_royale_web/wrangler.jsonc` tells Cloudflare to serve the `dist/` folder.

1. Log in at https://dash.cloudflare.com and open **Compute → Workers & Pages**.
2. Click **Create application**, then **Connect GitHub**, and select the `Rajput_Royale` repository.
3. Enter these build settings (you can change them later under **Settings → Builds**):

   | Setting | Value |
   |---|---|
   | Project name | `rajput-royale` |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | **Root directory** | `Rajput_royale_web` |
   | Branch control | `main` |
   | Variable | `NODE_VERSION` = `22` |

   The **Root directory** setting matters most. Without it, Cloudflare looks for the website in the wrong folder and the build fails.
4. Deploy, then open the Worker's **Domains** tab and switch **on** the Production URL `rajput-royale.<your-subdomain>.workers.dev`. While it's off, the site is deployed but has no address. The Overview page then says "No URLs enabled".

From now on, every `git push` to `main` rebuilds and redeploys the site automatically.

**If GitHub won't connect** (error "Cloudflare Pages was unable to be installed"):

1. In GitHub → Settings → Applications, uninstall **Cloudflare Workers and Pages**.
2. In the **Authorized GitHub Apps** tab, revoke it as well.
3. Connect again from Cloudflare.

### Use your own domain (optional)

In the Worker, open **Domains → Add Domain**, and enter your domain, for example `rajputroyale.com`. If the domain is already on Cloudflare, it connects automatically. If it isn't, Cloudflare shows you the DNS record to add at your domain registrar. HTTPS is set up for you.

### Deploy without GitHub (alternative)

To put a build online directly from your computer:

```bash
cd Rajput_royale_web
npm run build
npx wrangler deploy        # uses wrangler.jsonc and uploads dist/
```

The first run opens a browser so you can log in to Cloudflare.

## 6. If you'd rather use Vercel

This only suits non-commercial use on the free plan. For a business site you need Vercel Pro.

1. Go to https://vercel.com/new and import the `rajput-royale` GitHub repository.
2. Set **Root Directory** to `Rajput_royale_web`. Vercel detects Vite and fills in `npm run build` and `dist` on its own.
3. Click **Deploy**. The site goes live at `rajput-royale.vercel.app`, and every push redeploys it.

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| Cloudflare build says `Could not read package.json` | Root directory isn't set to `Rajput_royale_web` |
| Build fails on a Node version error | Add the env variable `NODE_VERSION` = `22`; the repo also has `Rajput_royale_web/.node-version` |
| Images missing on the live site | Commit `Rajput_royale_web/public/images/*.webp`; they're generated locally and not rebuilt on Cloudflare |
| `git push` rejected: file too large | GitHub's limit is 100 MB per file. Nothing here is that big; check you didn't add videos from `../video` |
| The enquiry form opens the wrong email | Change `CONTACT_EMAIL` in `src/data.ts`, then commit and push |
