# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Eleventy 3 source for dillonmok.com, a personal website and blog. Markdown content and Nunjucks templates live under `src/`:

- `src/pages/`: standalone pages and listing templates.
- `src/blog/`: articles; `blog.11tydata.js` assigns their shared layout.
- `src/_includes/`: base, page, post, and feed templates.
- `src/_data/`: shared site metadata and app data.
- `src/assets/`: CSS, fonts, and icons, copied into the build output.
- `src/feeds/`: RSS feed entry template.
- `config/filters/date.js`: Luxon date filters using `Pacific/Auckland`.

`eleventy.config.js` configures plugins, collections, Markdown, and output. `_site/` is generated and Git-ignored; edit source files instead.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npm start`: run Eleventy’s local development server.
- `npm run build`: generate the static site in `_site/`.

## Coding Style & Naming Conventions

Use JavaScript ES modules (`import`/`export`), matching the package’s `"type": "module"`. Follow the existing four-space indentation in JavaScript, CSS, and templates, and retain surrounding quote and semicolon conventions. No formatter or linter is configured.

Use descriptive, lowercase, hyphenated filenames. Published articles generally follow `YYYY-MM-DD-title-slug.md`. Include YAML front matter with `title`, `permalink`, `date`, `excerpt`, and `tags`, following nearby posts. Preserve existing permalinks when editing content. Keep shared styles in `src/assets/css/` and reuse existing layouts.

## Testing Guidelines

There is no automated test framework, test naming convention, or coverage threshold configured. For content, template, or configuration changes, run `npm run build`, then inspect affected pages with `npm start`. Check navigation, links, article dates, tag listings, and RSS when relevant. For styling changes, check narrow and wide viewports and both light and dark appearances.

## Commit & Pull Request Guidelines

Recent commits use short, plain descriptions such as `Update now page` and `Update favicon`; no mandatory prefix convention is evident. Keep commits focused and describe the concrete change.

Pull requests should summarize the change, identify affected pages, and state validation performed. Link related issues when applicable and include screenshots for visible layout or styling changes. Exclude generated `_site/`, dependencies, and local secrets such as `.env`.
