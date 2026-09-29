## Why

Circula needs a static WebGIS mock that communicates how donations, donors, beneficiaries, and receiving organizations can be discovered geographically in the Grande Florianopolis region. The current repository only contains the PRD and OpenSpec scaffold, so this change defines the first user-visible application behavior for validation of the product concept.

## What Changes

- Add a Vue.js frontend application for the Circula mock, with no backend, authentication service, database, or required persistence.
- Add a simulated entry experience with project identity, optional visual login/registration affordances, and an `Entrar como visitante` path into the map.
- Add an interactive Leaflet map centered on Grande Florianopolis with locally loaded fictional donation items and receiving organizations.
- Add visually distinct markers for donation items and organizations, with centered detail modals opened from marker selection.
- Add category filtering for donation items, including `Todos`, `Alimentos`, `Moveis`, `Eletronicos`, `Vestimentos`, `Mao de Obra`, and `Outros`.
- Add visual-only profile and new-item flows that clearly communicate their simulated, non-persistent nature.
- Add responsive desktop and mobile layout behavior suitable for the login screen, map, filters, modals, and mock action controls.

## Capabilities

### New Capabilities
- `circula-webgis-mock`: Static Vue/Leaflet WebGIS mock for browsing fictional donation items and receiving organizations in Grande Florianopolis.

### Modified Capabilities
- None.

## Impact

- Affected code: new frontend application structure, Vue components, local mock data, styling, and static app configuration.
- Dependencies: Vue.js and Leaflet; likely a Vue build tool such as Vite unless implementation identifies an existing project setup before coding.
- APIs and systems: no backend APIs, real authentication, real registration, uploads, geolocation requirement, database, or persisted user/item state.
