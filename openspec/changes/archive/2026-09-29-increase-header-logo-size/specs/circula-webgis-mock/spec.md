## MODIFIED Requirements

### Requirement: Header brand logo
The system SHALL display the root `logo.png` symbol and adjacent `Circula` text on the initial entry screen and in the application header after the visitor enters the map experience, with the header logo rendered compactly, proportionally, and without reducing header usability.

#### Scenario: Entry screen shows Circula logo
- **WHEN** the user opens the initial login or visitor entry screen
- **THEN** the screen displays the `logo.png` symbol with adjacent `Circula` text in a way that keeps the Circula identity readable

#### Scenario: Header shows Circula logo
- **WHEN** the user is viewing the map experience on a desktop-sized viewport
- **THEN** the header displays the `logo.png` symbol with adjacent `Circula` text in a compact brand lockup, using approximately the earlier compact header logo height while preserving the image aspect ratio and readability

#### Scenario: Header logo preserves image quality
- **WHEN** the header logo symbol is displayed
- **THEN** the system avoids visible distortion, cropping, or forced stretching that would degrade the logo presentation

#### Scenario: Header remains usable with compact logo
- **WHEN** the header displays the compact logo-plus-text lockup alongside the mock-data note and action buttons
- **THEN** the note and action buttons remain readable, reachable, and clickable without overlapping the brand lockup

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen with logo-plus-text branding, branded header with compact logo-plus-text lockup, map, combined filter-and-legend selector, organization controls, clustered markers, action controls, and centered detail overlays.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen logo-plus-text branding, compact responsive header brand lockup, map controls, combined filter-and-legend selector, organization control, markers or clusters, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the entry screen logo-plus-text branding, compact header brand lockup, map, left-side combined filter-and-legend selector, organization control, action controls, markers or clusters, and detail overlays use the available space without obscuring the main donation discovery flow or overlapping the header
