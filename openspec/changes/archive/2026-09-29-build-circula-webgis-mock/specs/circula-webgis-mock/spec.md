## Purpose

This capability defines the user-visible behavior of the Circula static WebGIS mock for discovering fictional donation items and receiving organizations around Grande Florianopolis.

## ADDED Requirements

### Requirement: Simulated visitor entry
The system SHALL present an initial Circula entry screen that communicates the project identity and allows the user to enter the mock without real authentication.

#### Scenario: Visitor enters the map
- **WHEN** the user selects `Entrar como visitante` from the initial screen
- **THEN** the system displays the map experience without requiring credentials or account creation

#### Scenario: Registration is visibly simulated
- **WHEN** the user opens the registration option
- **THEN** the system presents a visual registration experience or message that does not save data and makes the demonstrative nature clear

### Requirement: Grande Florianopolis donation map
The system SHALL display an interactive map focused on the Grande Florianopolis region with donation item markers and organization markers loaded from fictional local data.

#### Scenario: Map opens with mock data
- **WHEN** the user enters as a visitor
- **THEN** the system displays a map centered on Grande Florianopolis with at least one donation item marker and at least one receiving organization marker

#### Scenario: Marker types are distinguishable
- **WHEN** donation items and organizations are visible on the map
- **THEN** the system differentiates item markers from organization markers using visible styling, iconography, labels, or another clear visual treatment

### Requirement: Donation item details
The system SHALL allow the user to view details for each donation item marker in a centered overlay.

#### Scenario: User opens item details
- **WHEN** the user selects a donation item marker
- **THEN** the system opens a centered detail view showing the item name, category, description, condition or quality, approximate pickup location, donor name, fictional contact information, and a placeholder or fictional image when available

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
The system SHALL let the user filter donation item markers by category while retaining a way to restore all item markers.

#### Scenario: User filters by category
- **WHEN** the user selects one of `Alimentos`, `Móveis`, `Eletrônicos`, `Vestimentos`, `Mão de Obra`, or `Outros`
- **THEN** the system displays only donation item markers whose category matches the selected category

#### Scenario: User restores all item markers
- **WHEN** the user selects `Todos`
- **THEN** the system displays all donation item markers again

#### Scenario: Organizations remain discoverable while filtering
- **WHEN** the user applies a donation item category filter
- **THEN** the system keeps receiving organizations visible or provides an explicit interface control for their visibility

### Requirement: Simulated profile and new-item actions
The system SHALL expose visual profile and new-item actions that demonstrate intended product areas without persisting changes or adding real map data.

#### Scenario: User opens profile
- **WHEN** the user selects the profile action
- **THEN** the system displays fictional visitor profile information or a simulated profile view and indicates that edits are not persisted

#### Scenario: User opens new-item form
- **WHEN** the user selects the new-item action
- **THEN** the system displays a demonstrative item form with fields for category, item name, description, condition, donation reason, photo, and pickup point, and indicates that submissions are not saved or added to the map

### Requirement: Static mock constraints and clarity
The system SHALL behave as a static frontend mock using only fictional or approximate data, without requiring backend services, real authentication, database storage, live uploads, or real-time geolocation.

#### Scenario: User interacts with simulated flows
- **WHEN** the user uses login, registration, profile, or new-item flows
- **THEN** the system does not require a backend, does not validate real personal data, and does not persist submitted information

#### Scenario: User views map data
- **WHEN** the system displays donation items, donors, contacts, organizations, or locations
- **THEN** the displayed data is fictional, approximate, or clearly suitable for demonstration and does not expose real personal information

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen, map, filters, action controls, and centered detail overlays.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen, map controls, filters, markers, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the map, filters, action controls, and detail overlays use the available space without obscuring the main donation discovery flow
