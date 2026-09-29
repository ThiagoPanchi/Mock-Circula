## Why

The map now has category icons and temporary item creation, but the marker icons are visually small, the dataset is too sparse to demonstrate map density, and many nearby points can become hard to scan. This change improves the mock's visual polish and makes the WebGIS experience more realistic by adding a larger local dataset, clustered markers by icon/category, and the Circula logo in the header.

## What Changes

- Increase the rendered size of donation and organization marker icons so category imagery is easier to identify on the map.
- Move mock donation items into a JSON data file and expand the local fictional dataset to at least 50 donation item points across Grande Florianopolis.
- Keep all expanded data fictional or approximate, without exposing real personal information or exact private addresses.
- Add marker clustering grouped by category/icon so nearby points aggregate visually by donation type or organization icon rather than becoming unreadable.
- Preserve category filtering behavior with clustered markers: filters continue to limit donation item visibility, and the interface also lets users filter or toggle organization visibility.
- Use the new root `logo-circula.png` asset as the application logo on both the initial login/entry screen and the map header.
- Adjust the left-side filter and legend panel position so it does not overlap the map header on desktop or mobile layouts.
- Preserve the static frontend-only nature of the mock: no backend, database, real geocoding, real uploads, or persisted generated data.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `circula-webgis-mock`: Expand local map data, improve marker icon visibility, cluster map points by icon/category, display the Circula logo in entry/header areas, add organization filtering, and prevent filter/header overlap.

## Impact

- Affected code: mock data loading, item data shape validation/normalization, Leaflet marker rendering, clustering layer setup, item and organization filtering, entry/header branding, and responsive map styling.
- Data/assets: new JSON file for donation items; existing category PNG icons; new `logo-circula.png` root asset.
- Dependencies: likely a Leaflet clustering package or a small custom clustering strategy if implementation chooses not to add a dependency.
- APIs and systems: no backend APIs, database, real geocoding service, or persistence are introduced.
