## Context

The current `src/App.vue` new-item flow accepts either a map-click coordinate or address text. If no map coordinate exists but address text is present, it creates the temporary item at fixed fallback coordinates `[-27.5949, -48.5482]` and labels the location as approximate. The main spec previously prohibited real address geocoding, but the user explicitly chose real geocoding for this change.

## Goals / Non-Goals

**Goals:**
- Convert user-entered address text into coordinates before adding a temporary marker.
- Keep map-click placement as the fastest path when coordinates are already selected.
- Provide clear loading and failure feedback for address lookup.
- Avoid duplicate submissions while geocoding is in progress.
- Keep all added items session-only.

**Non-Goals:**
- Adding a backend proxy, database, durable address storage, authentication, or real donor validation.
- Persisting geocoded results across refreshes.
- Changing default mock dataset coordinates.
- Changing the marker clustering implementation or item detail modal beyond showing the existing location text.

## Decisions

1. Geocode from the frontend during form submission when no clicked coordinates exist.
   - Rationale: the project is a static frontend mock and the user requested real geocoding without adding backend infrastructure.
   - Alternatives considered: local simulated geocoding, but the user explicitly selected real geocoding.

2. Prefer clicked map coordinates over address geocoding when both are present.
   - Rationale: a user-selected map point is already explicit and avoids unnecessary network lookup.
   - Alternatives considered: always geocode address text, but that could override a deliberately selected map point.

3. Use a minimal fetch-based geocoding helper instead of adding a dependency.
   - Rationale: a single address lookup can be implemented with browser `fetch` and keeps bundle/dependency changes minimal.
   - Alternatives considered: adding a geocoding package, but that adds dependency weight for a small mock feature.

4. Limit geocoding scope to the Grande Florianopolis context when supported by the provider.
   - Rationale: the mock map is focused on Grande Florianopolis, so ambiguous text should resolve in the intended region where possible.
   - Alternatives considered: global unrestricted search, but that can place markers outside the demo area for ambiguous addresses.

5. Fail closed when geocoding does not resolve an address.
   - Rationale: adding a marker at a fallback point would repeat the current bug; the user should correct the address or click the map.
   - Alternatives considered: falling back to the map center, but that creates misleading marker locations.

## Risks / Trade-offs

- [Public geocoding endpoint may rate-limit or block requests] -> Show a clear failure message and preserve map-click placement as a fallback.
- [User-entered address is sent to a third-party provider] -> Keep the behavior frontend-only and do not store address or geocoded results beyond session state.
- [Ambiguous addresses can resolve outside the intended region] -> Bias or constrain lookup toward Grande Florianopolis when possible and include returned coordinates in item location text.
- [Async submission can create duplicates] -> Disable duplicate submission while geocoding is in progress.

## Migration Plan

1. Add geocoding state for loading and error messages in the new-item flow.
2. Add a small frontend geocoding helper that resolves address text to coordinates.
3. Update `addTemporaryItem` to await geocoding when only address text is provided.
4. Prevent duplicate submissions while geocoding and show progress/error feedback in the form.
5. Keep map-click coordinates unchanged and avoid geocoding when a point has already been selected.
6. Verify build, OpenSpec validation, successful geocoding, failed geocoding, and map-click fallback behavior.
