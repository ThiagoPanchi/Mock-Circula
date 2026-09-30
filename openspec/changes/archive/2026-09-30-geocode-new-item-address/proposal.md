## Why

The new-item form currently accepts an address or reference, but when the user submits by text address it places the temporary marker at a fixed fallback point instead of the address location. Users expect the typed address to determine the marker position, so the mock should geocode the address before adding the item.

## What Changes

- Add frontend address geocoding to the new-item flow when the user provides an address or location text instead of selecting a map point.
- Use the geocoded coordinates to place the temporary donation marker at the resolved address location.
- Preserve map-click placement behavior: a clicked map point remains accepted without geocoding.
- Show user-visible feedback while geocoding and when geocoding fails or returns no result.
- Keep temporary item persistence unchanged: items remain session-only and disappear on refresh.
- Update static mock constraints to allow frontend geocoding for user-entered addresses while still avoiding backend services, databases, authentication, and durable storage.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `circula-webgis-mock`: Update new-item address behavior so typed addresses are geocoded to marker coordinates, and update static constraints to permit client-side geocoding.

## Impact

- Affected code: new-item form submission, address validation, async geocoding state, temporary item coordinate assignment, user feedback, and error handling.
- Dependencies/services: may use a browser-side HTTP request to a public geocoding endpoint or an equivalent frontend-only geocoding provider; no backend proxy is introduced.
- Privacy/constraints: user-entered address text may be sent to the selected geocoding provider; no address data is stored beyond current session state.
