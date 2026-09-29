## 1. Category Metadata And Assets

- [x] 1.1 Add a category metadata map for `Todos`, `Alimentos`, `Móveis`, `Aparelhos eletrônicos`, `Eletrodomésticos`, `Vestimentos`, `Mão de Obra`, and `Outros`, plus organization metadata, and verify each category resolves to the expected PNG asset.
- [x] 1.2 Make the PNG assets available to Vite imports or public URLs and verify the application can load all eight files from `png/` or their implementation-time asset location.
- [x] 1.3 Replace `Eletrônicos` with `Aparelhos eletrônicos` and add `Eletrodomésticos` across mock item categories and organization accepted donation lists, and verify existing mock data covers both electronics-related categories.

## 2. Map Icons And Legend

- [x] 2.1 Update Leaflet item marker creation to render the category-specific PNG icon and verify markers for every donation category show distinct icons.
- [x] 2.2 Update organization marker creation to render `001-Organizacao.png` and verify organizations remain visually distinct from donation items.
- [x] 2.3 Replace the generic legend dots with icon-and-label legend rows and verify the legend includes organization plus every donation category.
- [x] 2.4 Verify clicking icon-based item and organization markers still opens the correct centered detail modal.

## 3. Left-Side Filter Layout

- [x] 3.1 Move the category filter into a left-side map panel and verify it is no longer positioned along the bottom of the desktop map.
- [x] 3.2 Place the legend directly below the filter in the same left-side flow and verify ordering remains filter first, legend second.
- [x] 3.3 Update responsive styles for the left-side panel and verify the filter, legend, map controls, action buttons, and modals remain reachable on mobile-sized viewports.

## 4. Temporary New Item Flow

- [x] 4.1 Convert the new-item form from read-only simulation to an in-memory form and verify it captures category, name, description, condition, donation reason, optional photo placeholder, and pickup location input.
- [x] 4.2 Add map-click pickup selection mode and verify the user can start placement, click the map, see the selected approximate coordinates or location feedback, and cancel placement.
- [x] 4.3 Add address/location-text pickup support and verify the form can be submitted without map-click coordinates when descriptive address text is provided.
- [x] 4.4 On valid submit, add the new donation item to current app state and verify a new marker appears on the map with the correct category icon and details.
- [x] 4.5 Verify temporary items are not persisted through refresh/reload and that the UI clearly states that the added marker is session-only.

## 5. Filtering And Details

- [x] 5.1 Update category filtering to include `Aparelhos eletrônicos` and `Eletrodomésticos` separately and verify each filter only shows matching donation item markers while organizations remain discoverable.
- [x] 5.2 Verify `Todos` restores all local mock items and temporary session items.
- [x] 5.3 Update item detail presentation for temporary items and verify details include item name, category, description, condition, approximate pickup location, donor or visitor label, and fictional contact when available.

## 6. Verification

- [x] 6.1 Run the production build command and verify it completes successfully.
- [x] 6.2 Manually verify the main flow: enter as visitor, see PNG marker icons, use the left-side filter, inspect the legend below it, filter both electronics categories independently, add an item by map click, add an item by address text, and confirm temporary item details.
- [x] 6.3 Run `openspec validate enhance-map-donation-interactions --strict` and verify the change passes validation.
