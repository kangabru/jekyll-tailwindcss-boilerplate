<div align="center">

# Jekyll & Tailwind CSS Boilerplate

A bare bones [Jekyll](https://jekyllrb.com/) site which comes preconfigured to use [Tailwind CSS](https://tailwindcss.com/) for styling.

👉 [Try the demo here](https://jekyll-tailwindcss-boilerplate.netlify.app/) 👈

[![Netlify Status](https://api.netlify.com/api/v1/badges/a783907c-769f-4399-80fd-3b6d511868ff/deploy-status)](https://app.netlify.com/sites/jekyll-tailwindcss-boilerplate/deploys)
</div>

## Features

- 🤍 Ships free of styling or theming. You can:
    - [Add a theme](https://jekyllrb.com/resources/)
    - [Get started with Tailwind CSS](https://tailwindcss.com/docs/utility-first/)
    - Use the [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin ([see example](https://jekyll-tailwindcss-boilerplate.netlify.app/2020/01/01/demo.html))
- 📈 Ships Google Analytics and SEO ready
- 🍕 Dev mode: your Jekyll site is refreshed on file changes and all Tailwind CSS classes are available for use.
- 💻 Release mode: CSS is optimised by striping out unused classes and minifying the file.

---

## 👟 Install

Ensure [Ruby](https://www.ruby-lang.org/en/downloads/) and [node](https://nodejs.org) (v12.13+) are installed then setup the project:
```
npm run setup
```

Configure Jekyll via `_config.yml`:
- Add your site title and description
- Add your google anlaytics ID
- Add seo config via [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) docs

## 🍕 Develop

```
npm start
```
Open your page on [localhost:4000](http://localhost:4000). Parcel and Jekyll will run concurrently so file changes update automatically.

> :warning: **CSS might not render on the very first load.** :warning:
>
> Simply open `styles/index.css` in your local text editor, save the file to trigger an update, [wait until Parcel/Jekyll update](https://raw.githubusercontent.com/kangabru/jekyll-tailwindcss-boilerplate/assets/regenerate-log.jpg), then refresh your browser.
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

## Packages

Here are the docs for packages used in this boilerplate:
- [Jekyll](https://jekyllrb.com/) - The static site generator
- [Jekyll seo](https://github.com/jekyll/jekyll-seo-tag) - Adds seo tags to your pages
- [Parcel](https://parceljs.org/) - The bundler that builds Tailwind
- [Tailwind CSS](https://tailwindcss.com) - Provides utility classes to style pages instead of CSS
- [Tailwind typography plugin](https://tailwindcss.com/docs/typography-plugin) - Makes Tailwind work nicely with markdown

---

## 🤔 FAQ

<details>
  <summary><b>What is the tailwindcss-typography plugin and do I need it?</b></summary>

- By default Tailwind [normalises](https://tailwindcss.com/docs/preflight) styles so headings, paragraphs, etc. look the same
- But Jekyll is often used for blogs and other text heavy site where you often *want* default text styles
- The typography plugin solves this and brings nice default styles to markdown generated content
- It's completely optional and easy to activate for specific content via the `prose` classes
- Note that it adds ~20kB to your final CSS file in prod. This isn't huge but is good to remove if you don't need it
- To remove it simply delete it from the `plugins` section in your `tailwind.config.js` file
</details>

<details>
  <summary><b>Why are CSS file changes slow to update?</b></summary>

- When you update  the `index.css` file all Tailwind classes have to regenerate (via Parcel) which can take up to ~10 secs
- In practise this isn't a common problem as most people don't update the file that often
- If you *are* writing custom CSS then you can add non-Tailwind CSS files and add refer to them in the `head.html` file directly which skips the Parcel build process
</details>

<details>
  <summary><b>Styles don't load when I build then open index.html locally</b></summary>

- CSS may not load if you open the `_site/index.html` file directly in you local browser
- To see the final site run `jekyll serve` and open the local server url ([localhost:4000](http://localhost:4000))
- This should not be a problem when deployed to a server
</details>

<details>
  <summary><b>Some of my styles disappear when deployed</b></summary>

-  Jekyll markdown may generate elements that are being purged by Tailwind CSS. [See these docs](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options) to whitelist elements or configure PurgeCSS further
- Don't build up class names like `"my" + "-class"`. Use full names like `"my-class"` instead
- Don't whitelist the `_site/` folder as this folder is not guaranteed to exist when deployed to a server
</details>

### Have another issue?
Contact me by posting an issue. I'll be happy to help 🙂
