# Getting Started

The [Svelte Tutorial](../001-svelte-tutorial/) is a detailed introduction to Svelte. This quickstart is 60-second jumpstart for the curious or the impatient.

---


## 1. Scaffold New Project

Create a new project using [SvelteKit](https://kit.svelte.dev/):

```bash
$ npm create svelte@latest my-first-app
```
I selected all default options as shown, For the additional options, I selected _all_ the options shown (none were selected by default).

```bash
Need to install the following packages:
  create-svelte@latest
Ok to proceed? (y) 

create-svelte version 3.1.2

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ● SvelteKit demo app (A demo app showcasing some of the features of SvelteKit - play a word
guessing game that works without JavaScript!)
│  ○ Skeleton project
│  ○ Library project

│
◆  Add type checking with TypeScript?
│  ● Yes, using JavaScript with JSDoc comments
│  ○ Yes, using TypeScript syntax
│  ○ No
└
│
◆  Select additional options (use arrow keys/space bar)
│  ◼ Add ESLint for code linting
│  ◼ Add Prettier for code formatting
│  ◼ Add Playwright for browser testing
│  ◼ Add Vitest for unit testing
```

The process completes in seconds with this output

```

│  Add ESLint for code linting, Add Prettier for code formatting, Add Playwright for browser
testing, Add Vitest for unit testing
│
└  Your project is ready!

✔ Type-checked JavaScript
  https://www.typescriptlang.org/tsconfig#checkJs

✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte3

✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options

✔ Playwright
  https://playwright.dev

✔ Vitest
  https://vitest.dev

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd my-first-app
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

## 2. Run the App

```bash
$ cd my-first-app
$ npm install
$ npm run dev
```