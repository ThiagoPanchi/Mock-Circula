## 1. Frontend Foundation

- [x] 1.1 Create a Vite Vue application structure in the repo root and verify `package.json`, `index.html`, and `src/` entry files exist.
- [x] 1.2 Add Vue and Leaflet dependencies plus required build scripts and verify dependency installation succeeds with the chosen package manager.
- [x] 1.3 Import Leaflet base styles and add global application styles and verify the initial app renders without console errors in the development server.

## 2. Mock Data

- [x] 2.1 Add a dedicated local mock data module for categories, donation items, and receiving organizations and verify it includes all required item categories plus at least one organization.
- [x] 2.2 Populate Grande Florianopolis fictional or approximate coordinates, donor/contact fields, organization details, and placeholder image references and verify no real personal data or exact private addresses are present.
- [x] 2.3 Add reusable category constants for `Todos`, `Alimentos`, `Móveis`, `Eletrônicos`, `Vestimentos`, `Mão de Obra`, and `Outros` and verify filters and mock item categories use the same values.

## 3. Entry And Simulated Flows

- [x] 3.1 Build the Circula entry/login screen with project identity, simulated login fields or affordances, `Registrar`, and `Entrar como visitante`, and verify the visitor button enters the map experience.
- [x] 3.2 Implement the simulated registration view or modal and verify it clearly states that registration is demonstrative and does not save data.
- [x] 3.3 Implement the profile action and simulated visitor profile view and verify edits or fields are presented as non-persistent mock content.
- [x] 3.4 Implement the new-item action and demonstrative item form and verify submitting or closing it does not add markers or persist data.

## 4. Map Experience

- [x] 4.1 Build the map component using Leaflet centered on Grande Florianopolis and verify the map loads after visitor entry.
- [x] 4.2 Render donation item markers from local data and verify item markers are visible on the map.
- [x] 4.3 Render receiving organization markers from local data with a distinct visual treatment and verify users can distinguish organizations from items.
- [x] 4.4 Wire marker click handling to application state and verify selecting an item or organization opens the appropriate centered detail modal.
- [x] 4.5 Ensure Leaflet map setup and cleanup are isolated in the map component and verify repeated entry or component remounting does not duplicate map instances or markers.

## 5. Details And Filtering

- [x] 5.1 Implement the donation item detail modal and verify it shows name, category, description, condition, approximate pickup location, donor name, fictional contact, and image or placeholder.
- [x] 5.2 Implement the organization detail modal and verify it shows name, description, audience served, approximate location, page or social link when available, fictional contact when available, and accepted donation types.
- [x] 5.3 Implement category filtering for donation item markers and verify each category only displays matching item markers.
- [x] 5.4 Implement the `Todos` filter behavior and verify it restores all donation item markers.
- [x] 5.5 Keep organization markers visible while item filters are applied and verify organization markers remain discoverable after changing filters.

## 6. Responsive UI And Mock Clarity

- [x] 6.1 Add responsive layout behavior for the entry screen, map controls, filters, action buttons, and modals and verify usability at mobile and desktop viewport sizes.
- [x] 6.2 Add visible mock-data or demonstrative-flow copy where needed and verify users can tell which features are simulated and non-persistent.
- [x] 6.3 Tune marker, filter, and action-control placement to avoid map clutter and verify the primary donation discovery flow remains usable on small screens.

## 7. Verification

- [x] 7.1 Run the production build command and verify it completes successfully.
- [x] 7.2 Manually verify the success flow from PRD: enter as visitor, view map, view item markers, view organization markers, open item details, open organization details, filter by category, restore `Todos`, open profile, and open new-item simulation.
- [x] 7.3 Run `openspec validate build-circula-webgis-mock --strict` and verify the change passes validation.
