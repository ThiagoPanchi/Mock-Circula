## 1. Data And Assets

- [x] 1.1 Add a local JSON donation item dataset under `src/data/` and verify it contains at least 50 fictional donation item records.
- [x] 1.2 Ensure every JSON item has id, name, category, description, condition, reason, imageLabel, locationName, coordinates, donorName, and contact fields and verify coordinates are approximate Grande Florianopolis points.
- [x] 1.3 Update the existing data module to import/export donation items from the JSON file while preserving category metadata exports and verify current consumers still import `donationItems` successfully.
- [x] 1.4 Verify every JSON item category matches one of the supported item categories and each category has at least one item.
- [x] 1.5 Make `logo-circula.png` available through Vite-compatible asset handling and verify the production build can include it.

## 2. Larger Icons

- [x] 2.1 Increase individual donation marker icon dimensions and verify category PNGs are visibly larger and recognizable at normal map zoom.
- [x] 2.2 Increase organization marker icon dimensions consistently and verify organization markers remain visually distinct from donation items.
- [x] 2.3 Adjust marker CSS and icon anchors to keep click targets aligned and verify clicking larger markers still opens the correct detail modal.

## 3. Category/Icon Clustering

- [x] 3.1 Add a Leaflet-compatible clustering implementation or dependency and verify the app builds with any required scripts and CSS.
- [x] 3.2 Render donation item markers through category/icon-specific cluster groups and verify nearby markers of the same category aggregate into clusters.
- [x] 3.3 Render organization markers through an organization cluster group or compatible non-mixed grouping and verify organization markers do not become visually indistinguishable from donation categories.
- [x] 3.4 Style clusters to show the shared category/icon type and count and verify the user can identify what kind of points are grouped.
- [x] 3.5 Verify clusters expand or reveal individual markers as the user zooms in.

## 4. Filtering With Clusters

- [x] 4.1 Preserve category filtering with clustered markers and verify each category filter only displays markers or clusters for that category.
- [x] 4.2 Verify `Todos` restores all JSON-loaded donation item markers, all temporary session item markers, and all relevant cluster groups.
- [x] 4.3 Verify organizations remain discoverable while donation category filters are applied.
- [x] 4.4 Verify selecting clustered or unclustered item markers still opens item details with JSON-loaded item fields.

## 5. Header Logo And Responsive UI

- [x] 5.1 Add `logo-circula.png` to the map header and verify it appears after visitor entry.
- [x] 5.2 Adjust header layout so the logo remains readable alongside the mock-data note and action buttons on desktop.
- [x] 5.3 Adjust responsive styles and verify the logo/header, left filter, legend, map controls, clusters, action buttons, and modals remain reachable on mobile-sized viewports.

## 6. Verification

- [x] 6.1 Run the production build command and verify it completes successfully.
- [x] 6.2 Manually verify the main flow: enter as visitor, see the logo header, see larger icons, observe category/icon clusters, zoom until clusters expand, filter at least two categories, restore `Todos`, and open item details from a JSON-loaded marker.
- [x] 6.3 Run `openspec validate add-map-clustering-and-logo --strict` and verify the change passes validation.

## 7. Requested Follow-up Revisions

- [x] 7.1 Add `logo-circula.png` to the initial login/entry screen and verify it appears before the visitor enters the map.
- [x] 7.2 Add an organization visibility/filter option and verify users can show organizations with item filters, hide organizations, and view only organizations.
- [x] 7.3 Connect organization filter state to clustered organization marker rendering and verify donation category filters still affect only donation item markers.
- [x] 7.4 Reposition the left-side filter and legend panel so it does not overlap the header on desktop and verify both areas remain clickable.
- [x] 7.5 Update mobile responsive spacing and verify the logo/header, filter, legend, organization control, and map controls remain reachable.
- [x] 7.6 Run `npm run build` and `openspec validate add-map-clustering-and-logo --strict` and verify both pass after the follow-up revisions.
