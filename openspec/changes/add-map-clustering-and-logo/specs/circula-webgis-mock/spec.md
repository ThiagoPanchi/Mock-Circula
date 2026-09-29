## ADDED Requirements

### Requirement: Header brand logo
The system SHALL display the Circula logo asset on the initial entry screen and in the application header after the visitor enters the map experience.

#### Scenario: Entry screen shows Circula logo
- **WHEN** the user opens the initial login or visitor entry screen
- **THEN** the screen displays the `logo-circula.png` asset in a way that keeps the Circula identity readable

#### Scenario: Header shows Circula logo
- **WHEN** the user is viewing the map experience
- **THEN** the header displays the `logo-circula.png` asset alongside or in place of the text brand in a way that remains readable

## MODIFIED Requirements

### Requirement: Grande Florianopolis donation map
The system SHALL display an interactive map focused on the Grande Florianopolis region with donation item markers and organization markers loaded from local fictional data or created temporarily during the current session.

#### Scenario: Map opens with mock data
- **WHEN** the user enters as a visitor
- **THEN** the system displays a map centered on Grande Florianopolis with at least 50 local fictional donation item points and at least one receiving organization marker

#### Scenario: Marker types are distinguishable
- **WHEN** donation items and organizations are visible on the map
- **THEN** the system differentiates item markers from organization markers using distinct visual treatment

#### Scenario: Donation category icons are shown
- **WHEN** donation item markers are visible on the map
- **THEN** each marker uses a PNG icon that corresponds to its donation category and is large enough to be recognizable during normal map browsing

#### Scenario: Organization icon is shown
- **WHEN** organization markers are visible on the map
- **THEN** each organization marker uses the organization PNG icon and is large enough to be recognizable during normal map browsing

#### Scenario: Nearby points cluster by icon type
- **WHEN** multiple visible markers of the same icon or category are close enough to overlap at the current zoom level
- **THEN** the system groups them into a cluster that visually communicates the shared icon or category and the number of grouped points

#### Scenario: Clusters expand as user zooms
- **WHEN** the user zooms in far enough that clustered points no longer need aggregation
- **THEN** the system reveals the individual item or organization markers represented by the cluster

### Requirement: Donation item details
The system SHALL allow the user to view details for each donation item marker, including temporary session items and JSON-loaded mock items, in a centered overlay.

#### Scenario: User opens item details
- **WHEN** the user selects a donation item marker
- **THEN** the system opens a centered detail view showing the item name, category, description, condition or quality, approximate pickup location, donor name or visitor label, fictional contact information when available, and a placeholder or fictional image when available

#### Scenario: User closes item details
- **WHEN** the item detail view is open and the user closes it
- **THEN** the system returns the user to the map without changing the selected category filter

### Requirement: Donation category filtering
The system SHALL let the user filter donation item markers by category and control organization visibility from controls positioned on the left side of the map, while retaining a way to restore all item markers and updating clustered marker groups to match the visible selections.

#### Scenario: User filters by category
- **WHEN** the user selects one of `Alimentos`, `Móveis`, `Aparelhos eletrônicos`, `Eletrodomésticos`, `Vestimentos`, `Mão de Obra`, or `Outros`
- **THEN** the system displays only donation item markers or item clusters whose category matches the selected category

#### Scenario: User restores all item markers
- **WHEN** the user selects `Todos`
- **THEN** the system displays all donation item markers again, including local JSON-loaded items and current-session temporary items

#### Scenario: Organizations remain discoverable while filtering
- **WHEN** the user applies a donation item category filter
- **THEN** the system keeps receiving organizations visible or provides an explicit interface control for their visibility

#### Scenario: User filters organizations
- **WHEN** the user uses the organization filter or visibility control
- **THEN** the system can show organizations, hide organizations, or show only organizations according to the selected organization option

#### Scenario: Legend appears below filter
- **WHEN** the map interface displays the category filter
- **THEN** the system displays the marker legend below the filter on the left side of the map

#### Scenario: Filter panel does not overlap header
- **WHEN** the map interface displays the header and the left-side filter and legend panel
- **THEN** the filter and legend panel is positioned below or otherwise clear of the header so the controls and header remain readable and clickable

#### Scenario: Category labels distinguish electronics types
- **WHEN** the system displays filters, marker icons, legends, forms, item details, or clusters for electronics-related donations
- **THEN** it distinguishes `Aparelhos eletrônicos` from `Eletrodomésticos` as separate categories

### Requirement: Static mock constraints and clarity
The system SHALL behave as a static frontend mock using only fictional, user-entered session data, or approximate data loaded from local frontend assets, without requiring backend services, real authentication, database storage, live uploads, real-time geolocation, or real address geocoding.

#### Scenario: User interacts with simulated flows
- **WHEN** the user uses login, registration, profile, or new-item flows
- **THEN** the system does not require a backend, does not validate real personal data, and does not persist submitted information beyond the current browser session state

#### Scenario: User views map data
- **WHEN** the system displays donation items, donors, contacts, organizations, or locations
- **THEN** the displayed data is fictional, approximate, loaded from local mock JSON, user-entered for the current session, or clearly suitable for demonstration and does not expose real personal information

#### Scenario: Mock data source is local
- **WHEN** the system loads the default donation item dataset
- **THEN** it loads the dataset from a local JSON asset or module rather than a backend API

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen with logo, branded header, map, left-side filter and legend, organization controls, clustered markers, action controls, and centered detail overlays.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen logo, header logo, map controls, filters, organization controls, legend, markers or clusters, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the entry screen logo, header logo, map, left-side filter and legend, organization controls, action controls, markers or clusters, and detail overlays use the available space without obscuring the main donation discovery flow
