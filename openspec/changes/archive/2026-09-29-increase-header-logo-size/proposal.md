## Why

The branding asset has changed: `logo.png` now contains only the Circula symbol without the written name. The entry screen and map header should use this symbol and render the word `Circula` as adjacent text, while the header logo returns to a compact height that keeps the header balanced.

## What Changes

- Replace use of `logo-circula.png` with the root `logo.png` asset on both the initial entry screen and the map header.
- Render the word `Circula` as text beside the `logo.png` symbol wherever the app presents the brand lockup.
- Reduce the header logo symbol height back to the earlier compact header size so it no longer dominates the header.
- Preserve the logo aspect ratio and image quality by avoiding distortion, cropping, or forced stretching.
- Keep the mock-data note and header action buttons readable and clickable with the compact logo-plus-text lockup.
- Keep the static frontend-only behavior; no backend services or persistence are introduced.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `circula-webgis-mock`: Update brand logo requirements so the app uses root `logo.png`, renders `Circula` text beside the symbol, and keeps the header logo compact and usable.

## Impact

- Affected code: entry branding, header branding layout, Vite asset import, and responsive CSS for the map experience.
- Data/assets: switches branding to existing root `logo.png`; `logo-circula.png` is no longer the required app brand asset for this flow.
- APIs and systems: no backend APIs, database, authentication, geocoding, or external service dependencies are introduced.
