# Website Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. For Docusaurus 2.2 , build requirement is  `Node.js >=16.14` - I'm uaing `v16.18.0`.


## 1. Setup

Scaffold classic Docusaurus site under the `website/` folder. 

```bash
$ node --version
v16.18.0
$ npx create-docusaurus@latest website classic
```

Verify version installed (and get help to see what else is supported)

```bash
$ cd website
$ npx docusaurus --version
2.2.0

$ npx docusaurus --help
Usage: docusaurus <command> [options]

Options:
  -V, --version     output the version number 
  -h, --help        display help for command
..
..
```

## 2. Build & Preview Dev

Start the local dev server to preview default site:

```
$ cd website
$ npx docusaurus start
[INFO] Starting the development server...
...
...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

```

## 3. Build & Preview Prod

```
$ cd website
$ npx docusaurus build
[INFO] [en] Creating an optimized production build...
...
...
[SUCCESS] Generated static files in "build".
[INFO] Use `npm run serve` command to test your build locally.

$ npm run serve
...
...
[SUCCESS] Serving "build" directory at: http://localhost:3000/
```

## 4. Customize Site

1. Modify `docusaurus.config.js` to configure site details
2. Modify `src/css/custom.css` to customize dark/light theme, global styles
3. Install (npm) packages for any relevant plugins used

```bash
$ cd website
$ npm install --save @docusaurus/plugin-ideal-image
$ npm install --save @docusaurus/theme-mermaid
$ npm install --save @docusaurus/plugin-sitemap
```

## 5. Customize Content Types

 1. Delete blog directory (after setting blog:false in config above)
 2. Configure `sidebars.js` to define the sidebar for docs (and thus "/")
 3. Make sure `docs/` folder contains files, paths reflecting structure in (2)

## 6. Deploy to GitHub Pages

Follow the [guidance](https://docusaurus.io/docs/deployment#github-pages-overview):
 1. [Modify `docusuaurus.config.js`](https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings) to add _organizationName_, _projectName_, _deploymentBranch_, and update _url_, _baseURL_ to suit.
 2. [Add GitHub Action Workflows](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) that are activated by 'push' (commit) and 'pull` (request) triggers.

The action above will build the static site (from Docusaurus content) and push it into the `gh-pages` branch of the repo (creating it if necessary). 

Now visit the [Settings/Pages](https://github.com/30DaysOf/svelte/settings/pages) tab of the repo and activate it to deploy from the `gh-pages` branch. (You should see an additional bot action worklow added to the [GitHub Actions](https://github.com/30DaysOf/svelte/actions) panel on your repo).

```
---

## CHANGELOG

Documenting iterative changes here after initial setup.

> Dec 19, 2022

 * Initial site setup and deploy completed.