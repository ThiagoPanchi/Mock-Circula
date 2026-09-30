## Context

The project is a Vite/Vue static app. `vite.config.js` currently only registers the Vue plugin and does not set `base`, while `index.html` loads the entry module from `/src/main.js`. For a GitHub Pages project site, production assets are served below the repository path, so root-relative built asset URLs can make the published page render blank even when the build succeeds. There is no existing `.github/workflows/` deployment workflow and the README has no deployment guidance.

## Goals / Non-Goals

**Goals:**
- Make the production build resolve app assets correctly when hosted as a GitHub Pages project site.
- Provide a free GitHub Actions deployment workflow that publishes the Vite `dist` output to GitHub Pages.
- Keep local `npm run dev`, `npm run build`, and `npm run preview` behavior simple for development.
- Document the GitHub Pages source/settings and published URL expectations.

**Non-Goals:**
- Adding a backend, custom domain, paid hosting service, database, authentication provider, or durable storage.
- Replacing Vite, Vue, Leaflet, or the current static mock architecture.
- Implementing client-side routing fallback behavior, because the app currently does not use route-based navigation.

## Decisions

1. Configure Vite with a GitHub Pages-compatible base path for production deployment.
   - Rationale: The blank screen symptom is consistent with built JS/CSS assets resolving from `/assets/...` instead of `/<repository>/assets/...` on a project page.
   - Assumption: The repository slug used for the project page is `Mock-Circula`, so the default project-page base path should be `/Mock-Circula/` unless implementation discovers a different remote repository name.
   - Alternatives considered: using the root base `/`, which only works for user/organization pages or custom domains; using relative base `./`, which can work for simple static apps but makes the intended GitHub Pages project URL less explicit.

2. Add a GitHub Actions workflow that builds and deploys `dist` through GitHub Pages Actions.
   - Rationale: This keeps deployment free and repeatable without committing generated build output.
   - Alternatives considered: manual `gh-pages` branch deployment, but that adds operational steps and generated artifacts to branch management.

3. Keep deployment documentation minimal and specific.
   - Rationale: The README currently contains only a title, so it should document the commands and Pages settings needed to reproduce deployment without becoming a full operations manual.
   - Alternatives considered: documenting multiple hosting providers, but the request is specifically GitHub Pages.

## Risks / Trade-offs

- [Repository name differs from `Mock-Circula`] -> Confirm the remote slug during implementation or make the base configurable through an environment variable used by the workflow.
- [GitHub Pages is not enabled for GitHub Actions] -> Document that Pages source must be set to GitHub Actions in the repository settings.
- [External map/geocoding providers block or rate-limit requests] -> The app should still load; provider availability affects runtime map/geocoding behavior rather than the blank-page deployment fix.
- [Case sensitivity in the project path] -> Match the repository slug exactly in the default base path or generated workflow value.

## Migration Plan

1. Update Vite deployment configuration for the GitHub Pages project path.
2. Add a GitHub Actions Pages workflow that installs dependencies, builds the app, uploads `dist`, and deploys it.
3. Update README with local verification, deployment instructions, and the expected Pages URL pattern.
4. Verify with `npm run build`, local preview using the configured base path where feasible, and OpenSpec validation.
5. After merging to the publishing branch, enable Pages from GitHub Actions and confirm the published URL loads the entry screen instead of a blank page.
