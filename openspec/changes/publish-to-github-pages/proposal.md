## Why

The Circula mock should be publishable for free on GitHub Pages, but the current project-page deployment can show a blank screen when built assets are resolved from the site root instead of the repository subpath.

## What Changes

- Configure the static Vite build so generated asset paths work when the app is hosted from the GitHub Pages project path.
- Add a free GitHub Pages deployment path that builds the app and publishes the production output without requiring a backend.
- Document the expected GitHub Pages setup and deployment URL assumptions so the app can be verified after publishing.
- Preserve the existing local development flow.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `circula-webgis-mock`: Add published static deployment behavior for GitHub Pages and require that the deployed app loads without a blank screen.

## Impact

- Affected code/configuration: Vite build configuration, package scripts if needed, GitHub Actions workflow files, and README deployment notes.
- Systems: GitHub Pages static hosting using the repository's generated build output.
- Dependencies/services: GitHub Actions and GitHub Pages only; no backend, database, paid service, or durable storage is introduced.
