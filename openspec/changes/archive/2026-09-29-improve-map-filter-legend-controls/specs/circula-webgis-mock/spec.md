## MODIFIED Requirements

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

### Requirement: Responsive mock experience
The system SHALL provide a usable layout for desktop and mobile users across the entry screen with logo, branded header, map, combined filter-and-legend selector, organization controls, clustered markers, action controls, and centered detail overlays.

#### Scenario: User opens the mock on a small screen
- **WHEN** the user views the application on a mobile-sized viewport
- **THEN** the entry screen logo, header logo, map controls, combined filter-and-legend selector, organization control, markers or clusters, action buttons, and detail overlays remain reachable and readable without horizontal scrolling as the primary navigation method

#### Scenario: User opens the mock on a desktop screen
- **WHEN** the user views the application on a desktop-sized viewport
- **THEN** the entry screen logo, header logo, map, left-side combined filter-and-legend selector, organization control, action controls, markers or clusters, and detail overlays use the available space without obscuring the main donation discovery flow or overlapping the header
