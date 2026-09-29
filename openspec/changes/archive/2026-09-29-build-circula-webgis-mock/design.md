## Context

The repository currently contains `PRD.md`, a minimal `README.md`, and OpenSpec scaffolding, with no existing frontend application or source tree. The PRD requires a static frontend mock using Vue.js and Leaflet, with locally defined fictional data and no backend, authentication service, database, upload service, or required geolocation.

## Goals / Non-Goals

**Goals:**
- Establish a small Vue application that can be run locally and built as static assets.
- Keep all demo data in local modules or JSON-like structures so the mock works without network services beyond map tiles.
- Make the map the central post-entry experience, with filters, marker detail overlays, and simulated product actions available from the same flow.
- Make simulated flows explicit so users do not confuse mock login, registration, profile, or new-item interactions with real persistence.
- Provide responsive layouts for the entry screen and map experience without introducing a design system dependency.

**Non-Goals:**
- Real authentication, user registration, identity validation, uploads, chat, backend APIs, admin tooling, or persistence.
- Real personal data or exact private pickup addresses.
- A production-grade GIS platform, routing, distance search, clustering, or real-time availability tracking.

## Decisions

1. Use Vite with Vue as the application foundation.
   - Rationale: the repo is greenfield, Vite provides the smallest conventional setup for a static Vue app, and it keeps local development/build commands simple.
   - Alternatives considered: Vue via CDN would reduce tooling but weaken maintainability and component structure; Nuxt would add routing/server conventions that are unnecessary for a static mock.

2. Use Leaflet directly through a Vue map component wrapper owned by the app.
   - Rationale: the PRD names Leaflet and the app only needs a small set of map behaviors: center, markers, marker clicks, and basic map interaction.
   - Alternatives considered: a higher-level Vue Leaflet wrapper could reduce boilerplate but adds another dependency and abstraction; non-map placeholder imagery would not satisfy the WebGIS requirement.

3. Store mock data in a dedicated local data module.
   - Rationale: a single source for donation items, organizations, categories, coordinates, contacts, and placeholder image references makes filtering and marker rendering predictable.
   - Alternatives considered: hardcoding data inside components would be faster initially but makes it harder to validate coverage across categories and details; browser localStorage would imply persistence outside the PRD scope.

4. Model the app as simple client state instead of routes unless implementation reveals a need for routing.
   - Rationale: the primary flow is linear: entry screen to map, then modal-like interactions. Component state can represent current screen, selected filter, selected marker, and active simulated panel.
   - Alternatives considered: Vue Router would be useful for deep links or multiple pages, but the PRD does not require shareable URLs or browser-navigation semantics.

5. Use centered application modals for marker details and simulated actions.
   - Rationale: the PRD explicitly expects centered popup/modal details, and a shared modal treatment helps keep mobile behavior consistent.
   - Alternatives considered: native Leaflet popups are easy but can be cramped on mobile and are less suitable for detailed item/organization content.

6. Keep organizations visible when category filters are applied.
   - Rationale: the PRD allows organizations to remain visible or have separate controls; keeping them visible better supports users who want to donate directly and avoids extra interface complexity.
   - Alternatives considered: hiding organizations during item filtering would simplify marker sets but reduce discoverability; adding a separate organization toggle can be deferred unless the UI becomes crowded.

## Risks / Trade-offs

- [Map tile access depends on a public tile provider] -> Use Leaflet's standard tile layer with attribution and keep all product data local so only basemap tiles depend on the network.
- [Users may mistake simulated flows for working features] -> Add visible copy in registration, profile, and new-item panels stating that data is demonstrative and not saved.
- [External images can be inconsistent or fail to load] -> Prefer local placeholders, CSS illustrations, or stable placeholder assets instead of hotlinking arbitrary photos.
- [Map can feel cluttered on small screens] -> Start with a small curated dataset, use clear marker styles, and place filters/action controls in compact responsive containers.
- [Direct Leaflet integration can conflict with Vue lifecycle] -> Isolate map creation, marker updates, and cleanup inside a dedicated map component.

## Migration Plan

1. Add the Vue/Vite frontend scaffold and install Vue plus Leaflet dependencies.
2. Add local mock data, static assets or placeholders, and category constants.
3. Build entry, map, filter, modal, profile, and new-item components incrementally.
4. Verify locally with development server behavior and a production build.

Rollback is simple while the repo is greenfield: remove the added frontend files and dependencies if the mock direction changes before implementation is adopted.
