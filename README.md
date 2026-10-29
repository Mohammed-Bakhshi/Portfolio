# Mohammed Bakhshi — Portfolio

Personal portfolio site: a single-page React app served with [Bun](https://bun.com). It showcases experience, skills, and projects for recruiters and hiring managers.

**Author:** [Mohammed Bakhshi](https://github.com/Mohammed-Bakhshi) · [LinkedIn](https://www.linkedin.com/in/mohammed-bakhshi/) · [CV (PDF)](https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV.pdf)

## Tech stack

| Layer | Choice |
| --- | --- |
| Runtime & dev server | Bun (`Bun.serve`, HMR) |
| UI | React 19, TypeScript (strict) |
| Components | MUI icons where needed; section styling in co-located CSS |
| Build | `bun build` → static assets in `dist/` |

## Features

- **Content-driven sections** — copy and links live under `src/content/`, not buried in JSX.
- **Light / dark theme** — persisted in `localStorage` via `useColorMode`.
- **Scroll-driven UX** — active nav section, reveal animations, and scroll helpers in `src/hooks/`.
- **Design tokens** — shared colours and typography in `src/styles/tokens.css` and `base.css`.

## Project structure

```
src/
├── components/     # UI sections (Hero, About, WorkHistory, Skills, Projects, …)
├── content/        # Data: about, jobs, skills, projects, links
├── hooks/          # Theme, scroll, and section behaviour
├── pages/          # HomePage composition
├── styles/         # Global tokens and base styles
├── assets/         # Images and icons
├── index.ts        # Bun server (dev + production)
├── index.html      # Entry HTML
└── frontend.tsx    # React bootstrap
```

Path alias `@/*` → `./src/*` is configured in `tsconfig.json` for optional use.

## Prerequisites

- [Bun](https://bun.com) (v1.3+ recommended)

## Scripts

```bash
bun install          # install dependencies
bun dev              # dev server with HMR (port 3000)
bun run build        # production bundle to dist/
bun start            # serve in production mode
```

After `bun run build`, deploy the contents of `dist/` to any static host (S3, CloudFront, Netlify, etc.).

## Local development

1. Clone the repository.
2. Run `bun install` then `bun dev`.
3. Open `http://localhost:3000`.

## TypeScript

The project uses strict compiler options (`strict`, `noUncheckedIndexedAccess`, `verbatimModuleSyntax`, etc.). See `tsconfig.json`.

## License

Private — all rights reserved unless stated otherwise in the repository settings.
