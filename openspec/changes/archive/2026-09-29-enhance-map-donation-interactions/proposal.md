## Why

The current Circula mock communicates the core WebGIS flow, but category markers still use generic labels, the filter occupies the bottom of the map, and the new-item flow remains purely demonstrative. This change improves map readability and makes the mock better demonstrate how a donor would add a temporary donation point without introducing persistence.

## What Changes

- Use the PNG assets in the repository root `png/` directory as map icons and legend visuals for donation categories and organizations.
- Split the existing `Eletrônicos` donation category into `Aparelhos eletrônicos` and `Eletrodomésticos`, with separate filters, marker icons, and mock data coverage.
- Move the category filter to the left side of the map interface and display the legend directly below that filter.
- Change the new-item mock flow so the user can create a new donation item marker for the current session only.
- Allow the new-item flow to choose the pickup point either by clicking on the map or by entering an address/description, without geocoding requirements or persistence after refresh/reload.
- Preserve the static frontend-only nature of the mock: no backend, account persistence, database, uploads, or durable item storage.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `circula-webgis-mock`: Refine category behavior, marker iconography, filter/legend placement, and temporary new-item marker creation.

## Impact

- Affected code: mock data categories, category filter, legend, Leaflet marker icon rendering, new-item form state, map click handling, item detail modal, and responsive layout styles.
- Assets: existing PNG files under `png/` will be referenced or copied into the frontend asset flow during implementation.
- APIs and systems: no backend APIs, real geocoding service, authentication, database, uploads, or persisted item state are introduced.
