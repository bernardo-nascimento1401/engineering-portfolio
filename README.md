# Bernardo Nascimento — Engineering Portfolio

A responsive static portfolio site built from the content and screenshots in the original Google Sites portfolio.

## Preview locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` — homepage
- `projects/carbon-fiber.html` — autonomous carbon-fiber layup case study
- `projects/rocketry.html` — high-powered rocket structures case study
- `projects/turbojet.html` — hydrogen micro-turbojet case study
- `styles.css` — visual system and responsive layouts
- `script.js` — navigation, scroll effects, and section highlighting
- `assets/images/` — image crops extracted from the supplied screenshots

## Before publishing

The current image assets were extracted from screenshots, so replace them with original high-resolution files when available. Also add links for a résumé, LinkedIn, and GitHub once those URLs/files are ready.

## Deployment

The site is fully static and can be deployed directly to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any standard web host.
