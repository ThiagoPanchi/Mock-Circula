## Context

The current Vue/Vite app keeps category metadata, organizations, and donation items in `src/data/mockData.js`. Donation markers use imported PNG category icons through Leaflet `divIcon` at 44x44, organizations use their own PNG icon, and filtering is performed before passing visible items to `DonationMap.vue`. The default dataset currently has a small number of items, and no marker clustering dependency or custom clustering layer is present. A new `logo-circula.png` file exists at the repository root and should become the header logo.

## Goals / Non-Goals

**Goals:**
- Load the default donation item dataset from a local JSON file.
- Provide at least 50 fictional donation points distributed around Grande Florianopolis across all supported donation categories.
- Increase marker icon dimensions so category PNGs are easier to recognize.
- Cluster nearby markers by category/icon type while preserving marker details and category filters.
- Add the Circula logo image to both the entry screen and map header in a responsive way.
- Add an organization visibility/filter option alongside donation category filtering.
- Position the left-side filter and legend panel so it does not overlap the header.
- Keep all behavior static and frontend-only.

**Non-Goals:**
- Backend data fetching, databases, real donor records, exact private addresses, or generated data persisted after runtime.
- Real geocoding, server-side clustering, route planning, or distance search.
- Changing the new-item session-only persistence behavior.

## Decisions

1. Store default donation items in a local JSON file under `src/data/`.
   - Rationale: JSON makes a 50+ item dataset easier to inspect, expand, and keep separate from category/icon metadata and helper constants.
   - Alternatives considered: keeping the array in `mockData.js` avoids import changes but makes the data module too large and less clearly data-only.

2. Keep category metadata in JavaScript and import JSON data into that module for export.
   - Rationale: PNG imports and computed metadata remain easier in JS, while the item records move to JSON. Existing consumers can continue importing `donationItems` from the same module.
   - Alternatives considered: importing category icon paths directly into JSON is not viable because JSON cannot import assets.

3. Use a Leaflet-compatible clustering approach, preferably `leaflet.markercluster` if implementation confirms it works cleanly with Vite.
   - Rationale: it is a standard Leaflet clustering solution and avoids hand-rolling spatial clustering behavior.
   - Alternatives considered: custom category layer clustering would avoid a dependency but risks more code and weaker behavior. If dependency integration is problematic, a minimal custom grouping strategy may be used while still satisfying visible category/icon grouping.

4. Cluster by category/icon using separate cluster groups per icon category.
   - Rationale: the user asked for clusters by icon type. Separate groups make cluster styling and counts category-specific and keep mixed clusters from obscuring donation type.
   - Alternatives considered: one global cluster group is simpler but can combine unrelated categories into generic clusters.

5. Increase marker icon size and tune cluster sizes together.
   - Rationale: larger icons improve recognition but increase overlap, making clustering more important. Cluster styling should remain visually distinct from individual markers.
   - Alternatives considered: increasing only the inner image size could improve legibility but may not give enough click target improvement.

6. Import or reference `logo-circula.png` through Vite-compatible asset handling and reuse it in both entry and map header views.
   - Rationale: the asset is currently at the repository root, and implementation can either import it from a relative path or move/copy it to `src/assets` if needed for reliable bundling.
   - Alternatives considered: using the existing text-only header would not satisfy the request; referencing the raw root path may fail after build if not handled by Vite.

7. Add organization visibility as an explicit filter state separate from donation category.
   - Rationale: donation categories and organizations are different marker types. A separate organization control keeps category filters focused while letting users show, hide, or isolate organizations.
   - Alternatives considered: adding `Organizações` as a normal donation category would mix incompatible marker semantics and could make item filtering ambiguous.

8. Compute or style the side panel offset relative to the header area.
   - Rationale: the current side panel can overlap the header when header height changes. Explicit spacing keeps both controls usable.
   - Alternatives considered: placing the filter back at the bottom avoids the header but conflicts with the established left-side panel requirement.

## Risks / Trade-offs

- [Adding 50+ markers may make the UI visually dense] -> Use category/icon clustering and verify filtering still narrows visible points.
- [Cluster dependency CSS may be required] -> Import required cluster styles where Leaflet styles are imported, or implement equivalent local styles.
- [Separate category cluster groups may create nearby clusters side-by-side] -> Prefer category clarity over mixed clusters, and tune cluster radius/icon size if visual overlap is excessive.
- [Large icons can obscure map details] -> Increase moderately and validate desktop/mobile usability rather than making icons oversized.
- [JSON data can drift from category constants] -> Add implementation checks or manual verification that every item category is one of `ITEM_CATEGORIES`.
- [Root logo asset may not bundle directly] -> Use a Vite-compatible import path or relocate the asset into an app asset directory during implementation.
- [Logo reuse can create layout crowding] -> Size the entry and header logo independently and allow wrapping or stacking on smaller screens.
- [Organization filter can conflict with category filters] -> Model organization visibility separately from donation category selection and verify combined states.
- [Filter panel offset may be brittle across breakpoints] -> Use responsive spacing based on header placement and validate desktop and mobile layouts.

## Migration Plan

1. Add the local JSON dataset with at least 50 fictional donation items and update the JS data module to import/export it.
2. Add/verify clustering dependency or implement a minimal category cluster strategy.
3. Update the map component to use larger marker icons and category-specific cluster groups.
4. Update the entry screen and header to render `logo-circula.png` and adjust responsive styles.
5. Add organization filter/visibility state and connect it to organization marker rendering.
6. Adjust the side filter/legend panel offset so it clears the header across desktop and mobile breakpoints.
7. Verify build, filtering, organization visibility, clustering behavior, marker details, dataset coverage, logo rendering, and OpenSpec validation.
