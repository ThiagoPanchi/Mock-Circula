## MODIFIED Requirements

### Requirement: Grande Florianopolis donation map
The system SHALL display an interactive map focused on the Grande Florianopolis region with donation item markers and organization markers loaded from fictional local data or created temporarily during the current session.

#### Scenario: Map opens with mock data
- **WHEN** the user enters as a visitor
- **THEN** the system displays a map centered on Grande Florianopolis with at least one donation item marker and at least one receiving organization marker

#### Scenario: Marker types are distinguishable
- **WHEN** donation items and organizations are visible on the map
- **THEN** the system differentiates item markers from organization markers using distinct visual treatment

#### Scenario: Donation category icons are shown
- **WHEN** donation item markers are visible on the map
- **THEN** each marker uses the PNG icon that corresponds to its donation category

#### Scenario: Organization icon is shown
- **WHEN** organization markers are visible on the map
- **THEN** each organization marker uses the organization PNG icon

### Requirement: Donation item details
The system SHALL allow the user to view details for each donation item marker, including temporary session items, in a centered overlay.

#### Scenario: User opens item details
- **WHEN** the user selects a donation item marker
- **THEN** the system opens a centered detail view showing the item name, category, description, condition or quality, approximate pickup location, donor name or visitor label, fictional contact information when available, and a placeholder or fictional image when available

#### Scenario: User closes item details
- **WHEN** the item detail view is open and the user closes it
- **THEN** the system returns the user to the map without changing the selected category filter

### Requirement: Donation category filtering
The system SHALL let the user filter donation item markers by category from a control positioned on the left side of the map, while retaining a way to restore all item markers.

#### Scenario: User filters by category
- **WHEN** the user selects one of `Alimentos`, `Móveis`, `Aparelhos eletrônicos`, `Eletrodomésticos`, `Vestimentos`, `Mão de Obra`, or `Outros`
- **THEN** the system displays only donation item markers whose category matches the selected category

#### Scenario: User restores all item markers
- **WHEN** the user selects `Todos`
- **THEN** the system displays all donation item markers again

#### Scenario: Organizations remain discoverable while filtering
- **WHEN** the user applies a donation item category filter
- **THEN** the system keeps receiving organizations visible or provides an explicit interface control for their visibility

#### Scenario: Legend appears below filter
- **WHEN** the map interface displays the category filter
- **THEN** the system displays the marker legend below the filter on the left side of the map

#### Scenario: Category labels distinguish electronics types
- **WHEN** the system displays filters, marker icons, legends, forms, or item details for electronics-related donations
- **THEN** it distinguishes `Aparelhos eletrônicos` from `Eletrodomésticos` as separate categories

### Requirement: Simulated profile and new-item actions
The system SHALL expose visual profile and new-item actions that demonstrate intended product areas without durable persistence, and the new-item action SHALL allow adding a temporary donation marker to the current map session.

#### Scenario: User opens profile
- **WHEN** the user selects the profile action
- **THEN** the system displays fictional visitor profile information or a simulated profile view and indicates that edits are not persisted

#### Scenario: User opens new-item form
- **WHEN** the user selects the new-item action
- **THEN** the system displays a demonstrative item form with fields for category, item name, description, condition, donation reason, photo, and pickup point

#### Scenario: User chooses pickup point by map click
- **WHEN** the user is adding a new item and selects the map-click pickup option
- **THEN** the system allows the user to click the map to set the item's approximate pickup point before adding the marker

#### Scenario: User chooses pickup point by address text
- **WHEN** the user is adding a new item and enters an address or location description instead of clicking the map
- **THEN** the system accepts the text as the item's approximate pickup location without requiring real geocoding

#### Scenario: User adds temporary item
- **WHEN** the user completes the required new-item information and submits the form with either a clicked map point or address text
- **THEN** the system adds a visible donation item marker to the map for the current session and marks the flow as simulated or non-persistent

#### Scenario: Temporary item is not durable
- **WHEN** the application is refreshed or reopened after adding a temporary item
- **THEN** the temporary item is not required to remain on the map

### Requirement: Static mock constraints and clarity
The system SHALL behave as a static frontend mock using only fictional, user-entered session data, or approximate data, without requiring backend services, real authentication, database storage, live uploads, real-time geolocation, or real address geocoding.

#### Scenario: User interacts with simulated flows
- **WHEN** the user uses login, registration, profile, or new-item flows
- **THEN** the system does not require a backend, does not validate real personal data, and does not persist submitted information beyond the current browser session state

#### Scenario: User views map data
- **WHEN** the system displays donation items, donors, contacts, organizations, or locations
- **THEN** the displayed data is fictional, approximate, user-entered for the current session, or clearly suitable for demonstration and does not expose real personal information

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen, map, left-side filter and legend, action controls, and centered detail overlays.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen, map controls, filters, legend, markers, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the map, left-side filter and legend, action controls, and detail overlays use the available space without obscuring the main donation discovery flow
