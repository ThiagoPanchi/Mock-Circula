## MODIFIED Requirements

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen with logo-plus-text branding, branded header with compact logo-plus-text lockup, map, combined filter-and-legend selector, organization controls, clustered markers, action controls, and centered detail overlays, including when served as a static GitHub Pages project site.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen logo-plus-text branding, compact responsive header brand lockup, map controls, combined filter-and-legend selector, organization control, markers or clusters, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the entry screen logo-plus-text branding, compact header brand lockup, map, left-side combined filter-and-legend selector, organization control, action controls, markers or clusters, and detail overlays use the available space without obscuring the main donation discovery flow or overlapping the header

#### Scenario: User opens the published GitHub Pages site
- **WHEN** the user opens the Circula mock from the repository's GitHub Pages project URL
- **THEN** the application loads the entry screen and required static assets without showing a blank page caused by incorrect asset paths

#### Scenario: Published site remains frontend-only
- **WHEN** the application is served from GitHub Pages
- **THEN** the map experience remains a static frontend mock and does not require a custom backend, database, authentication service, or paid hosting service to load
