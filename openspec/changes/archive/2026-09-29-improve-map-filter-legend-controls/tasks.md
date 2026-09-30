## 1. Combined Selector State

- [x] 1.1 Define a marker type option list that includes all donation categories and organizations using existing icon/name metadata and verify each option has a stable id, label, icon, and type.
- [x] 1.2 Replace the single selected category plus organization mode state with a selected marker type collection defaulting to all marker types selected and verify initial map load still shows every item and organization.
- [x] 1.3 Update computed visible donation items to include JSON-loaded and temporary items only when their category marker type is selected and verify selecting multiple categories shows the union of those categories.
- [x] 1.4 Update computed visible organizations to depend only on the organization marker type selection and verify organization visibility changes do not alter selected donation categories.

## 2. Combined Filter And Legend UI

- [x] 2.1 Replace the separate category filter, organization filter, and passive legend with one combined filter-and-legend control and verify the old duplicate controls are no longer shown.
- [x] 2.2 Render every marker type control with its existing icon image and related name and verify category and organization icons match the markers shown on the map.
- [x] 2.3 Implement per-marker-type toggle behavior and verify toggling one category or organizations immediately updates visible markers and clusters.
- [x] 2.4 Add an enable-all action and verify it restores all donation item markers, temporary item markers, organization markers, and clusters.
- [x] 2.5 Add a remove-all action and verify the map hides all donation item markers, temporary item markers, organization markers, and clusters while leaving the selector usable.
- [x] 2.6 Preserve clear active/inactive visual states for each marker type and verify all-off, partial-selection, and all-on states are understandable.

## 3. Map And Session Behavior

- [x] 3.1 Verify clustered marker groups update correctly for selected categories, organization-only visibility, multiple selected categories, and all-off visibility.
- [x] 3.2 Update temporary item add/reset behavior so new temporary items follow the combined selector rules and verify a newly added item is visible when its category is selected.
- [x] 3.3 Verify item and organization detail modals still open from visible unclustered markers after selector changes.

## 4. Layout And Responsiveness

- [x] 4.1 Move the desktop side panel lower below the header and verify the header and combined selector are both readable and clickable without overlap.
- [x] 4.2 Adjust side-panel max height and scrolling after the lower offset and verify all selector options and all-on/all-off actions remain reachable on desktop.
- [x] 4.3 Update mobile spacing for the combined selector and verify it does not require horizontal scrolling and does not block primary map controls.

## 5. Verification

- [x] 5.1 Run `npm run build` and verify the production build passes.
- [x] 5.2 Run `openspec validate improve-map-filter-legend-controls --strict` and verify the change passes validation.
- [x] 5.3 Manually verify the main flow: enter as visitor, confirm the combined icon/name selector appears, toggle two item categories, toggle organizations independently, use enable all, use remove all, add a temporary item, and confirm the side panel stays below the header on desktop and reachable on mobile.
