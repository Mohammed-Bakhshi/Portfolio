# Mohammed Bakhshi — Portfolio

This is my personal site. It is a single-page React app, served with [Bun](https://bun.com), and it walks through my experience, skills, and projects.

**Mohammed Bakhshi** · [GitHub](https://github.com/Mohammed-Bakhshi) · [LinkedIn](https://www.linkedin.com/in/mohammed-bakhshi/) · [CV (PDF)](https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV.pdf)

## What it is built with

- **Bun** runs the dev server (with hot reload) and the production build.
- **React 19** and **TypeScript**, with strict compiler settings.
- **MUI** `Box` and `Stack` for layout. Styles live in TypeScript `const` objects, next to each component.
- `bun build` writes the static files into `dist/`.

## How the code is organised

Copy and links sit in `src/content/` as `*.content.ts` files. The light and dark theme is saved in `localStorage` by `useColorMode`. Scroll behaviour (the active nav item, reveal animations, and related helpers) lives in `src/hooks/`. Shared colours and motion live in `src/styles/tokens.ts` and `global.ts`.

```
src/
├── components/     # One folder per component (index.tsx + styles.ts)
├── content/        # *.content.ts data, re-exported from index.ts
├── hooks/          # Theme, scroll, and section behaviour
├── sections/       # Page composition (Home)
├── styles/         # Global tokens and motion
├── assets/         # Images and icons
├── index.ts        # Bun server (dev and production)
├── index.html      # Entry HTML
└── frontend.tsx    # React bootstrap
```

`@/*` maps to `./src/*` in `tsconfig.json`. TypeScript is strict (`strict`, `noUncheckedIndexedAccess`, `verbatimModuleSyntax`). The full options are in `tsconfig.json`.

## Running it locally

You need [Bun](https://bun.com) (v1.3 or newer is a good bet).

```bash
bun install
bun dev              # http://localhost:3000, with hot reload
bun run build        # writes the production bundle to dist/
bun start            # serves the production build
```

Clone the repo, run `bun install`, then `bun dev`, and open `http://localhost:3000`. After `bun run build`, the `dist/` folder is what you deploy (S3, CloudFront, Netlify, or any other static host).
