# Jekyll & Tailwind CSS Boilerplate

A bare bones [Jekyll](https://jekyllrb.com/) site which comes preconfigured to use [Tailwind CSS](https://tailwindcss.com/) for styling.

👉 [Try the demo here](https://jekyll-tailwindcss-boilerplate.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/a783907c-769f-4399-80fd-3b6d511868ff/deploy-status)](https://app.netlify.com/sites/jekyll-tailwindcss-boilerplate/deploys)

## Features

- 🤍 Ships free of styling or theming. [Add a theme](https://jekyllrb.com/resources/) or [get started with Tailwind CSS](https://tailwindcss.com/docs/utility-first/).
- 📈 Ships Google Analytics and SEO ready
- 🍕 Dev mode: your Jekyll site is refreshed on file changes and all Tailwind CSS classes are available for use.
- 💻 Release mode: CSS is optimised by striping out unused classes and minifying the file.

---

## 👟 Install

Ensure [Ruby](https://www.ruby-lang.org/en/downloads/) and [node](https://nodejs.org) (v11+) are installed then setup the project:
```
npm run setup
```

## 🍕 Develop

```
npm start
```
Open your page on [localhost:4000](http://localhost:4000). Parcel and Jekyll will run concurrently so file changes update automatically.

> :warning: **CSS might not render on the very first load.** :warning:
>
> Simply open [`index.css`](/index.css), save the file to trigger an update, then refresh your browser.
>
> Jekyll and Parcel run concurrently in dev builds so the CSS may not generate in time. This only happens once (when the file doesn't exist) and is not an issue in prod builds.

## 💻 Release

```
npm run build
```
Tailwind CSS is minified and Jekyll outputs the site to the `_site` folder.

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kangabru/jekyll-tailwindcss-boilerplate)

Deploy statically (e.g. [Netlify](https://www.netlify.com/)) with the following build settings:
- Command: `npm run build`
- Directory: `_site`

---

## 🤔 Troubleshoot

### My styling disappears when deployed
-  Jekyll markdown may generate elements that are being purged by Tailwind CSS. [See these docs](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options) to whitelist elements or configure PurgeCSS further.
- Don't build up class names like `"my" + "-class"`. Use full names like `"my-class"` instead.
- Don't whitelist the `_site/` folder as this folder is not guaranteed to exist when deployed to a server.

### Have another issue?
Contact me by posting an issue. I'll be happy to help 🙂
