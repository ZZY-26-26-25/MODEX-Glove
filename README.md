# MODEX-Glove

MODEX-Glove is a modular exoskeleton glove for dexterous hand motion tracking and interaction. This repository currently hosts the project page for the research project while the paper, hardware releases, and other materials are still under development.

This project page is intentionally lightweight and designed to be easy to extend as the research progresses. The site is built as a static academic landing page and is ready for GitHub Pages deployment.

## Preview locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## GitHub Pages deployment

This site is designed to work under the GitHub Pages subpath:

```text
https://ZZY26-26-25.github.io/MODEX-Glove/
```

The repository should serve the static site from the `main` branch using the GitHub Pages workflow.

## Future assets

Place future project assets in the repository as follows:

```text
assets/
  images/
    modex-glove-cover.jpg
  videos/
  docs/
```

Use the project cover image as the primary hero image when it is available. Keep placeholders and “Coming Soon” labels until the research materials are ready.

## Notes

- This website intentionally avoids fake author names, fake institutions, and fake experimental results.
- The project page is a clean v0.1 foundation that can later be extended with a paper, video, dataset, code, hardware CAD, and experiments.
- The site is designed to feel like a modern academic robotics project page rather than a corporate landing page.
