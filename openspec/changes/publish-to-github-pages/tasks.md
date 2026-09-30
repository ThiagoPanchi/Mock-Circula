## 1. Build Configuration

- [x] 1.1 Confirm the GitHub repository slug used for Pages and verify the chosen Vite base path matches the project URL path.
- [x] 1.2 Update Vite production base configuration for GitHub Pages project hosting and verify the generated `dist/index.html` references assets under the expected project path.
- [x] 1.3 Verify local development still works with `npm run dev` and production build still works with `npm run build`.

## 2. GitHub Pages Deployment

- [x] 2.1 Add or update a GitHub Actions workflow for GitHub Pages deployment and verify it builds `dist` and uses GitHub Pages artifact/deploy actions.
- [x] 2.2 Configure the workflow permissions, Pages environment, and branch trigger and verify the workflow syntax is valid by reviewing the YAML and, if available, running a local lint or dry-read check.
- [x] 2.3 Update GitHub Actions action versions and Node setup to avoid deprecated Node.js 20 action-runtime warnings, and verify the workflow uses Node 24-compatible action/runtime settings.

## 3. Documentation

- [x] 3.1 Update README with the local build/preview commands and verify the documented commands match `package.json` scripts.
- [x] 3.2 Document GitHub Pages setup steps, including selecting GitHub Actions as the Pages source, and verify the expected URL pattern includes the repository path.

## 4. Verification

- [x] 4.1 Run `npm run build` and verify the production build passes after the workflow runtime adjustments.
- [x] 4.2 Inspect or serve the built output under the project path and verify the entry screen loads instead of a blank page.
- [x] 4.3 Run `openspec validate publish-to-github-pages --strict` and verify the change passes validation.
- [ ] 4.4 After pushing to GitHub, verify the Pages deployment completes without the Node.js 20 action-runtime deprecation failure and the published site loads the Circula entry screen with static assets.
