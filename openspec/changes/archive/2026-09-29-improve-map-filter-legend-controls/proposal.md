## Why

The current map controls split category filtering, organization visibility, and the legend into separate sections, which makes the user repeat mental mapping between controls and icons. The side panel also still sits too close to the header, so the controls need a clearer combined layout and more reliable header clearance.

## What Changes

- Replace the separate item filter, organization visibility control, and passive legend with a combined filter-and-legend selector.
- Show each selectable map icon with its icon image and related name so users can directly choose which marker types are visible.
- Support multi-select marker visibility instead of a single item category plus a separate organization mode.
- Add actions to enable all marker types and remove all marker types from the current map view.
- Preserve the ability to show only organizations, only one or more donation categories, or any combination of item categories and organizations.
- Update clustered marker visibility to follow the combined selector state.
- Move the left side panel lower so it no longer overlaps or crowds the header on desktop and remains reachable on mobile.
- Keep the app static and frontend-only, with no backend, persistence, or new external data source.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `circula-webgis-mock`: Change the map filtering and legend behavior into a combined icon selector with all-on/all-off actions and stronger side-panel/header separation.

## Impact

- Affected code: map filter UI, legend rendering, selected marker visibility state, computed visible item and organization arrays, clustered marker updates, and responsive side-panel styles.
- Data/assets: reuses existing category and organization icon metadata; no new data files are required.
- APIs and systems: no backend APIs, database, authentication, geocoding, persistence, or new service dependencies are introduced.
