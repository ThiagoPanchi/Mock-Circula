## 1. Geocoding State And Helper

- [x] 1.1 Add new-item geocoding loading and error state and verify the form can display both states.
- [x] 1.2 Add a frontend address geocoding helper and verify it returns latitude/longitude coordinates for a known Grande Florianopolis address.
- [x] 1.3 Bias or constrain geocoding toward Grande Florianopolis when supported by the chosen provider and verify ambiguous address text does not intentionally use the fixed fallback point.

## 2. New-Item Submission Behavior

- [x] 2.1 Update new-item submission to await geocoding when address text is provided without clicked coordinates and verify the temporary marker uses the resolved coordinates.
- [x] 2.2 Preserve clicked-map placement precedence and verify selecting a map point adds the item at the clicked coordinates without geocoding.
- [x] 2.3 Remove the fixed fallback coordinate behavior for address-only submissions and verify unresolved addresses do not add a marker at the map center or old fallback point.
- [x] 2.4 Prevent duplicate submissions while geocoding and verify repeated clicks do not create duplicate temporary items.

## 3. User Feedback And Error Handling

- [x] 3.1 Show an address lookup progress message or disabled submit state while geocoding and verify it clears after completion.
- [x] 3.2 Show a clear error message when geocoding fails or returns no result and verify the user can edit the address or choose the map-click option afterward.
- [x] 3.3 Update temporary item location text to reflect the entered address and resolved coordinates and verify item details show the geocoded pickup information.

## 4. Verification

- [x] 4.1 Run `npm run build` and verify the production build passes.
- [x] 4.2 Run `openspec validate geocode-new-item-address --strict` and verify the change passes validation.
- [x] 4.3 Manually verify the main flow: add an item with a valid address, see the marker at the geocoded point, try an invalid address and see an error without marker creation, then add an item by clicking the map.
