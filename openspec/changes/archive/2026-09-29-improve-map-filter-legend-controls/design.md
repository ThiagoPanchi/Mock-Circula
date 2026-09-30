## Context

The current Vue/Vite app keeps marker type metadata in `src/data/mockData.js`, including `CATEGORY_METADATA`, `ORGANIZATION_METADATA`, and `LEGEND_ITEMS`. `src/App.vue` currently tracks one selected donation category plus a separate `organizationFilter` mode, renders `CategoryFilter.vue`, renders organization buttons separately, and renders `LEGEND_ITEMS` as a passive legend. `src/styles.css` positions `.side-panel` at `top: 104px` on desktop and at the bottom of the viewport on mobile.

## Goals / Non-Goals

**Goals:**
- Represent donation categories and organizations as one list of selectable marker types using existing icon metadata.
- Let users toggle each marker type independently, including selecting multiple donation categories at once.
- Provide explicit enable-all and remove-all actions that operate on both donation categories and organizations.
- Keep clustered item and organization marker layers synchronized with selected marker types.
- Move the side panel farther below the header on desktop and keep the combined controls reachable on mobile.

**Non-Goals:**
- Changing map data, category names, organization records, icon assets, cluster dependency, or marker detail modals.
- Adding persisted filter preferences, backend services, geocoding, authentication, or new dependencies.
- Reworking unrelated entry screen, modal, profile, or new-item flows.

## Decisions

1. Replace single selected category state with a selected marker type collection.
   - Rationale: a collection naturally supports multiple visible item categories plus organization visibility in one model.
   - Alternatives considered: keep `selectedCategory` and add more special organization states, but that preserves the split behavior the change is meant to remove.

2. Build the combined selector from existing metadata exports.
   - Rationale: `CATEGORY_METADATA`, `ORGANIZATION_METADATA`, and `LEGEND_ITEMS` already centralize icon/name pairing and avoid duplicating label/icon paths.
   - Alternatives considered: hard-code the selector options in the component, but that risks drift from map marker icons and category labels.

3. Use explicit all-on and all-off button actions rather than a tri-state master checkbox.
   - Rationale: the requested actions are direct, visible, and easy to verify in a mock UI.
   - Alternatives considered: a single select-all checkbox is compact but less clear when no marker types are selected or when some are selected.

4. Keep map filtering in `App.vue` computed data before passing props to `DonationMap.vue`.
   - Rationale: the map component already receives visible `items` and `organizations`, so cluster updates can continue to react to prop changes without adding map-specific filter logic.
   - Alternatives considered: pass selected marker types into `DonationMap.vue`, but that spreads filtering responsibilities across components.

5. Treat temporary items like regular donation items for visibility.
   - Rationale: temporary items have a donation category and should follow the same selected icon/category rules as JSON-loaded items.
   - Alternatives considered: always show temporary items, but that would violate the all-off and category-specific selector behavior.

6. Increase desktop side-panel offset and cap its height relative to the new offset.
   - Rationale: the existing `top: 104px` can crowd or overlap the taller header; a larger offset keeps the header and controls independently clickable.
   - Alternatives considered: moving controls to the bottom on desktop would avoid overlap but conflicts with the left-side control requirement.

## Risks / Trade-offs

- [Multi-select state can make existing single-category assumptions invalid] -> Update computed item filtering and new temporary item reset behavior to use the selected marker type collection.
- [All-off can create an intentionally empty map that looks broken] -> Keep controls visible and make the selected/off state visually clear.
- [A larger desktop offset reduces available panel height] -> Use scrollable panel content and adjust `max-height` to the remaining viewport space.
- [Mobile bottom panel can cover map controls] -> Verify spacing against Leaflet zoom controls and keep the panel height constrained.

## Migration Plan

1. Replace the existing category filter plus organization control UI with one combined selector component or one consolidated panel section.
2. Convert visibility state from single category plus organization mode to selected marker type ids with defaults selecting every marker type.
3. Filter donation items by selected donation category ids and organizations by the organization marker type selection.
4. Wire enable-all and remove-all actions to update the selected marker type collection.
5. Keep cluster rendering driven by the filtered `items` and `organizations` props already passed to `DonationMap.vue`.
6. Adjust desktop and mobile side-panel CSS to sit lower than the header while staying scrollable and reachable.
7. Verify production build, OpenSpec validation, and manual marker visibility flows including all-on, all-off, organization-only, and multiple selected categories.
