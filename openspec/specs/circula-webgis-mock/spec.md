## Purpose

This capability defines the user-visible behavior of the Circula static WebGIS mock for discovering fictional donation items and receiving organizations around Grande Florianopolis.

## Requirements

### Requirement: Simulated visitor entry
The system SHALL present an initial Circula entry screen that communicates the project identity and allows the user to enter the mock without real authentication.

#### Scenario: Visitor enters the map
- **WHEN** the user selects `Entrar como visitante` from the initial screen
- **THEN** the system displays the map experience without requiring credentials or account creation

#### Scenario: Registration is visibly simulated
- **WHEN** the user opens the registration option
- **THEN** the system presents a visual registration experience or message that does not save data and makes the demonstrative nature clear

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

### Requirement: Receiving organization details
The system SHALL allow the user to view details for each receiving organization marker in a centered overlay.

#### Scenario: User opens organization details
- **WHEN** the user selects an organization marker
- **THEN** the system opens a centered detail view showing the organization name, description, audience served, approximate location, page or social link when available, fictional contact information when available, and accepted donation types

#### Scenario: User closes organization details
- **WHEN** the organization detail view is open and the user closes it
- **THEN** the system returns the user to the map without removing visible markers

### Requirement: Donation category filtering
The system SHALL let the user control visible map marker types from a combined filter-and-legend selector positioned on the left side of the map, while retaining clear actions to show all marker types or hide all marker types and updating clustered marker groups to match the visible selections.

#### Scenario: User filters by category
- **WHEN** the user selects one of `Alimentos`, `Móveis`, `Aparelhos eletrônicos`, `Eletrodomésticos`, `Vestimentos`, `Mão de Obra`, or `Outros` in the combined selector
- **THEN** the system displays donation item markers or item clusters for every selected donation category and hides item markers for unselected donation categories

#### Scenario: User sees icon names in the selector
- **WHEN** the combined selector is visible
- **THEN** each selectable marker type displays its map icon and the related marker type name together

#### Scenario: User restores all item markers
- **WHEN** the user selects the action to enable all marker types
- **THEN** the system displays all donation item markers, all current-session temporary item markers, and all organization markers again

#### Scenario: User hides all marker types
- **WHEN** the user selects the action to remove all marker types
- **THEN** the system hides donation item markers, current-session temporary item markers, organization markers, and their clusters from the map while leaving the controls available

#### Scenario: Organizations remain discoverable while filtering
- **WHEN** the user applies one or more donation item category selections
- **THEN** the system keeps receiving organizations independently selectable through the same combined selector

#### Scenario: User filters organizations
- **WHEN** the user toggles the organization option in the combined selector
- **THEN** the system shows or hides organization markers and organization clusters without changing the selected donation categories

#### Scenario: Legend appears below filter
- **WHEN** the map interface displays marker visibility controls
- **THEN** the icon legend and marker visibility controls are presented as one combined control instead of separate filter and legend sections

#### Scenario: Filter panel does not overlap header
- **WHEN** the map interface displays the header and the left-side combined filter-and-legend panel
- **THEN** the panel is positioned below or otherwise clear of the header so the controls and header remain readable and clickable

#### Scenario: Category labels distinguish electronics types
- **WHEN** the system displays filters, marker icons, legends, forms, item details, or clusters for electronics-related donations
- **THEN** it distinguishes `Aparelhos eletrônicos` from `Eletrodomésticos` as separate categories

### Requirement: Simulated profile and new-item actions
The system SHALL expose visual profile and new-item actions that demonstrate intended product areas without durable persistence, and the new-item action SHALL allow adding a temporary donation marker to the current map session using either a clicked map point or geocoded address text.

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
- **THEN** the system geocodes the entered address text and uses the resolved coordinates as the item's pickup point before adding the marker

#### Scenario: Address geocoding is in progress
- **WHEN** the user submits a new item with address text that requires geocoding
- **THEN** the system indicates that address lookup is in progress and prevents duplicate submissions until the lookup finishes

#### Scenario: Address geocoding fails
- **WHEN** the user submits a new item with address text and the address cannot be resolved or the geocoding request fails
- **THEN** the system does not add the marker and displays a clear message asking the user to adjust the address or choose the map-click option

#### Scenario: User adds temporary item
- **WHEN** the user completes the required new-item information and submits the form with either a clicked map point or successfully geocoded address text
- **THEN** the system adds a visible donation item marker to the map for the current session and marks the flow as simulated or non-persistent

#### Scenario: Temporary item is not durable
- **WHEN** the application is refreshed or reopened after adding a temporary item
- **THEN** the temporary item is not required to remain on the map

### Requirement: Static mock constraints and clarity
The system SHALL behave as a static frontend mock using only fictional, user-entered session data, approximate data loaded from local frontend assets, or client-side geocoding for user-entered addresses, without requiring backend services, real authentication, database storage, live uploads, or durable persistence.

#### Scenario: User interacts with simulated flows
- **WHEN** the user uses login, registration, profile, or new-item flows
- **THEN** the system does not require a backend, does not validate real personal data, and does not persist submitted information beyond the current browser session state

#### Scenario: User views map data
- **WHEN** the system displays donation items, donors, contacts, organizations, or locations
- **THEN** the displayed data is fictional, approximate, loaded from local mock JSON, user-entered for the current session, geocoded from user-entered address text for the current session, or clearly suitable for demonstration and does not expose stored real personal information

#### Scenario: Mock data source is local
- **WHEN** the system loads the default donation item dataset
- **THEN** it loads the dataset from a local JSON asset or module rather than a backend API

#### Scenario: Address geocoding is frontend-only
- **WHEN** the system geocodes a user-entered address for a temporary item
- **THEN** the lookup is initiated from the frontend without introducing a project backend, database, or durable address storage

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen with logo-plus-text branding, branded header with compact logo-plus-text lockup, map, combined filter-and-legend selector, organization controls, clustered markers, action controls, and centered detail overlays.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen logo-plus-text branding, compact responsive header brand lockup, map controls, combined filter-and-legend selector, organization control, markers or clusters, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the entry screen logo-plus-text branding, compact header brand lockup, map, left-side combined filter-and-legend selector, organization control, action controls, markers or clusters, and detail overlays use the available space without obscuring the main donation discovery flow or overlapping the header
