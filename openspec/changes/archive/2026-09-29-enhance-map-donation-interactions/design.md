## Context

The current Vue/Vite app already has local mock data, a Leaflet map component, a category filter, a legend, centered modals, and a visual-only new-item form. The app currently uses generic div-based marker labels (`D` and `O`), categories include `Eletrônicos` but not `Aparelhos eletrônicos` and `Eletrodomésticos` separately, the filter sits at the bottom of the map, and new-item submission does not create a marker. The repository now has PNG assets in `png/` for organization and donation categories:

- `001-Organizacao.png`
- `002-mao-de-obra.png`
- `003-aparelhos-eletronicos.png`
- `004-alimentos.png`
- `005-moveis.png`
- `006-eletrodomesticos.png`
- `007-vestimentos.png`
- `008-outros.png`

## Goals / Non-Goals

**Goals:**
- Replace generic item/organization map markers and legend dots with category-specific PNG icons.
- Treat `Aparelhos eletrônicos` and `Eletrodomésticos` as separate item categories across data, filters, form options, markers, legend, and details.
- Move the filter and legend into a left-side map panel, with legend directly below the filter.
- Let users add a new donation item marker in the current in-memory app session.
- Support pickup location by either map click coordinates or free-text address/location description.
- Preserve the static mock behavior and clearly communicate non-persistence.

**Non-Goals:**
- Real geocoding from address text to coordinates.
- Persisting user-created items after reload, refresh, or app restart.
- Real uploads, backend validation, authentication, database writes, or exact private address handling.
- Changing organization creation or profile behavior beyond keeping the UI coherent.

## Decisions

1. Define a category metadata map as the single source for labels and icons.
   - Rationale: filters, legends, markers, and forms all need the same category names and corresponding PNG assets. A metadata map avoids mismatched strings.
   - Alternatives considered: hardcoding icons inside the map component would work initially but would duplicate category knowledge across components.

2. Use app state for temporary user-created items and combine it with local mock data for rendering.
   - Rationale: this satisfies the mock behavior while avoiding localStorage or any persistence that could imply durable storage.
   - Alternatives considered: browser localStorage would make refresh persistence possible, but that conflicts with the requested non-saved behavior.

3. Add an explicit map-pick mode for the new-item flow.
   - Rationale: clicking on the map is an intentional action that should not conflict with normal marker selection. The app can enter a temporary placement mode from the form, then capture the next map click.
   - Alternatives considered: always treating map clicks as item placement would interfere with regular navigation and marker interactions.

4. Treat address/location text as descriptive unless a map click provides coordinates.
   - Rationale: the product remains static and has no geocoding service. If the user provides only text, the app can add the marker at a safe approximate fallback location while preserving the typed location in item details.
   - Alternatives considered: calling a public geocoding API would add an external dependency and privacy implications outside the mock scope.

5. Rework filter and legend into a left-side overlay panel.
   - Rationale: the user explicitly requested left-side filter placement and legend below the filter. A single panel makes desktop placement predictable and easier to adapt on mobile.
   - Alternatives considered: separate floating cards could match the current structure but make vertical ordering and responsive behavior harder to keep consistent.

## Risks / Trade-offs

- [PNG asset paths may not be directly importable from the current root folder] -> Either move/copy assets into `src/assets` or import them with a Vite-compatible relative path during implementation.
- [Address text without geocoding may create a marker whose coordinates do not match the text] -> Clearly label address-only placement as approximate and use a neutral fallback point near Grande Florianopolis.
- [Map click placement could be confusing if mode is not visible] -> Show an explicit instruction/banner while waiting for a map click and provide a way to cancel placement.
- [Left-side panel can cover map content on small screens] -> Make the panel scrollable/collapsible or reposition it responsively while preserving filter-before-legend order.
- [Category rename from `Eletrônicos` can break filtering of existing mock data] -> Update all mock items, organizations' accepted donation lists, filters, and form options together.

## Migration Plan

1. Add category/icon metadata and update mock data categories.
2. Update map marker rendering to use PNG icons and expose map-click events for placement mode.
3. Update filter, legend, and layout styling to use the left-side panel.
4. Update the new-item form flow to create in-memory items from form input plus clicked coordinates or address text.
5. Verify build, category filtering, marker details, temporary item behavior, and OpenSpec validation.
