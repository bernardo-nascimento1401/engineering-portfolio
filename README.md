# Bernardo Nascimento — Engineering Portfolio

A responsive static portfolio website built with HTML, CSS, and JavaScript. It can be hosted directly on GitHub Pages, Netlify, Vercel, or any static web host.

## Site structure

- `index.html` — homepage, featured work, experience, and contact information
- `projects/carbon-fiber.html` — autonomous carbon-fiber layup and IntelliDrape research poster
- `projects/rocketry.html` — high-powered rocket structures
- `projects/turbojet.html` — hydrogen micro-turbojet nozzle and fuel-system work
- `projects/pcb.html` — micro-UAV optical sensing PCB
- `projects/heat-engine.html` — Stirling heat-engine design and manufacturing
- `projects/titan-aircraft.html` — aircraft-on-Titan analysis with embedded PDF
- `assets/images/` — website images
- `assets/documents/` — research poster and Titan paper PDF
- `styles.css` — all site styling
- `script.js` — navigation, scroll reveals, and email-copy buttons

## Preview locally

Open `index.html` directly in a browser, or run a simple local server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Upload **the contents of this folder** to the root of your GitHub repository. `index.html` must be visible at the top level.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. GitHub will provide the public website URL.

## Updating the site

Replace edited files in the same repository paths and commit the changes. GitHub Pages will automatically republish the site at the same URL.
