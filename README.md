# Your Photography Portfolio

A minimal, scrolling story-style portfolio. Three files: `index.html`, `style.css`, `script.js`.

## 1. Swap in your own photos

Each `<img class="frame-img" ...>` in `index.html` currently points to a placeholder
(`picsum.photos`) so you can see the layout. Replace each `src` with your own image —
easiest way:

1. Create an `images/` folder next to `index.html`.
2. Put your photos in it (e.g. `images/lake.jpg`).
3. Update the `src` to `images/lake.jpg`.

Keep images reasonably large (1600–2400px on the long edge) but compressed — aim for
under ~500KB each so the site loads fast. Also update each `alt` description to
describe your actual photo (helps accessibility and search).

## 2. Edit the copy

- Your name: in `.topnav-mark` and the footer copyright.
- Hero title/subtitle: `.hero-title`, `.hero-sub`.
- Each frame's title, meta line (location/time/settings), and caption text.
- Email and social links in the footer (`#contact`).
- Add or remove `<section class="frame">` blocks freely — the progress rail and
  numbering update automatically based on however many frames exist. Alternate
  `frame` / `frame frame--right` classes to keep the left-right rhythm, or drop
  `frame--right` entirely if you'd rather every frame align left.

## 3. Put it on GitHub Pages

1. Create a new **public** repo on GitHub named `yourusername.github.io`
   (replace with your actual username) if you want it at the root domain —
   any other name works too, it'll just publish at `yourusername.github.io/repo-name`.
2. Upload `index.html`, `style.css`, `script.js`, and your `images/` folder to the repo
   (drag-and-drop via "Add file → Upload files" works fine, or use git).
3. In the repo, go to **Settings → Pages**, set Branch to `main` / folder `/ (root)`, and save.
4. Your site goes live in a minute or two at the URL shown on that settings page.

## Notes

- No build step, no dependencies beyond two Google Fonts loaded via CDN link — it's
  plain HTML/CSS/JS, so it'll just work on GitHub Pages as-is.
- Respects `prefers-reduced-motion` — reveal animations are skipped for users who
  have that OS setting on.
- The rail on the right (progress + frame count) hides automatically below 640px
  width to keep mobile clean.
