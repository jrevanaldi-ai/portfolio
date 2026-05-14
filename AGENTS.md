# Repository Guidelines

## Project Structure & Module Organization

This repository is a small Next.js portfolio site using the App Router.

- `app/layout.jsx` defines root metadata, language, and shared HTML structure.
- `app/page.jsx` contains the main portfolio page and client-side interactions.
- `app/services/page.jsx` contains the services/pricing route at `/services`.
- `app/globals.css` holds global styles, layout rules, responsive behavior, and design tokens.
- `assets/` stores static image assets such as `enterprise-hero.png`.
- `DESIGN.md` and `framer/DESIGN.md` are design reference documents.

Keep route-specific UI in the matching `app/.../page.jsx` file unless it is reused enough to justify extracting a component.

## Build, Test, and Development Commands

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build and catches many routing/rendering issues.
- `npm run start` serves the production build after `npm run build`.
- `npm run lint` runs the configured Next.js lint command from `package.json`.

Install dependencies with `npm install` when `package-lock.json` changes.

## Coding Style & Naming Conventions

Use JSX with ES modules, function components, and React hooks as shown in `app/page.jsx`. Use 2-space indentation, double quotes for strings, and semicolons. Name components in `PascalCase` (`AsciiLogo`, `MailIcon`) and arrays/constants in `camelCase` (`navItems`, `servicePlans`).

CSS is global. Prefer existing custom properties in `:root`, reuse established class naming, and add responsive rules in `app/globals.css` near related styles.

## Testing Guidelines

There is currently no test framework or test suite in this repository. Before opening a change, at minimum run:

```bash
npm run build
```

For visual/UI changes, also run `npm run dev` and manually check `/` and `/services` at desktop and mobile widths. If tests are added later, place them near the feature they cover and document the new command here.

## Commit & Pull Request Guidelines

Git history currently contains only `first push`, so no strict convention is established. Use concise, imperative commit messages such as `Update services pricing layout` or `Add mobile nav polish`.

Pull requests should include a short description, list of changed routes/components, screenshots for UI changes, and any verification performed, especially `npm run build`. Link issues when applicable.

## Security & Configuration Tips

Do not commit secrets, private contact credentials beyond intentional public profile links, or generated build output. Keep `.next/` and `node_modules/` out of version control.
