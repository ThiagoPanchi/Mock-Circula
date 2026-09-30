## MODIFIED Requirements

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
