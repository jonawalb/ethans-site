# ethan-connell.github.io

Personal site for **Ethan Connell** — maritime intelligence analyst, Assistant Director of the Taiwan Security Monitor.

Static HTML / CSS / JS, no build step. Designed to deploy on GitHub Pages.

## Local preview

```bash
cd ethan-connell-site
python3 -m http.server 8000
# → open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo named `ethan-connell.github.io` (for a user site) **or** any repo name (for a project site).
2. Push the contents of this folder to the default branch.
3. Repo → Settings → Pages → Build & deployment → Source: **Deploy from a branch** → `main` / root.
4. For a project site the URL will be `https://<user>.github.io/<repo>/`. For a user site it's `https://<user>.github.io/`.

`.nojekyll` is included so GitHub Pages serves files verbatim (no Jekyll processing of leading-underscore assets).

## Before going live

- Replace the placeholder email in `index.html` (`#hail` section) with Ethan's preferred contact.
- Add real links to publications if/when they go online (the `.entry` blocks accept `<a>` wrappers).
- Optionally add a `og:image` social preview card.

## Stack

- Pure HTML + CSS + vanilla JS
- Google Fonts: Fraunces (display), Spectral (body), JetBrains Mono (metadata)
- No frameworks, no dependencies, no analytics

## Design notes

Aesthetic direction: Admiralty chart × naval-intelligence dossier. Deep midnight ocean ground, weathered brass detail, parchment text. Compass rose responds to pointer; coordinate ticker rotates through Indo-Pacific bearings. Section labels follow a dossier convention (I, II, III …) and chart annotation tone.
