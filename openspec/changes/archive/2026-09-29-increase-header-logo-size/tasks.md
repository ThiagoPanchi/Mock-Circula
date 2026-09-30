## 1. Header Logo Sizing

- [x] 1.1 Increase the desktop header logo size using responsive CSS constraints and verify the logo appears substantially larger than the current 44px by 180px limit.
- [x] 1.2 Adjust the header brand layout so the logo can occupy close to half the usable header width when space allows and verify the logo keeps its aspect ratio.
- [x] 1.3 Preserve `object-fit: contain` or equivalent behavior and verify the logo is not visibly distorted, cropped, or force-stretched.

## 2. Header Usability

- [x] 2.1 Verify the mock-data note remains readable beside or near the larger logo on desktop.
- [x] 2.2 Verify the `Perfil` and `Novo item` header actions remain visible, reachable, and clickable without overlapping the logo.
- [x] 2.3 Verify the side panel still sits below the header after the logo size change and does not overlap header content.

## 3. Responsive Layout

- [x] 3.1 Tune mobile header logo sizing and verify the larger logo remains readable on small viewports without horizontal scrolling.
- [x] 3.2 Verify mobile header action buttons and map controls remain reachable after the logo sizing change.

## 4. Verification

- [x] 4.1 Run `npm run build` and verify the production build passes.
- [x] 4.2 Run `openspec validate increase-header-logo-size --strict` and verify the change passes validation.
- [x] 4.3 Manually verify the main flow: enter as visitor, confirm the header logo is larger and proportional on desktop, confirm it remains readable on mobile, and confirm header actions and the side panel remain usable.

## 5. Follow-up Larger Logo Revision

- [x] 5.1 Increase the desktop header logo sizing beyond the prior roughly-half-width target and verify it occupies a majority of the usable header width when space allows.
- [x] 5.2 Adjust the brand block and mock-data note layout so the note may wrap or stack near the logo and verify the logo is no longer constrained by the note.
- [x] 5.3 Verify the `Perfil` and `Novo item` actions remain visible, reachable, and clickable with the larger majority-width logo.
- [x] 5.4 Verify the logo remains proportional and not visibly distorted, cropped, or force-stretched after the larger sizing revision.
- [x] 5.5 Verify desktop side-panel spacing and mobile header layout still remain usable after the taller/wider logo revision.
- [x] 5.6 Run `npm run build` and `openspec validate increase-header-logo-size --strict` and verify both pass after the follow-up revision.

## 6. Logo Asset And Compact Header Revision

- [x] 6.1 Update entry and header branding to use root `logo.png` and verify the production build includes the asset.
- [x] 6.2 Add visible `Circula` text beside the logo symbol on the entry screen and verify the brand remains readable before entering the map.
- [x] 6.3 Add visible `Circula` text beside the logo symbol in the map header and verify the text reads as part of the brand lockup.
- [x] 6.4 Reduce the header logo symbol height back to the earlier compact header size and verify it no longer dominates the header.
- [x] 6.5 Verify the mock-data note, `Perfil`, and `Novo item` controls remain readable, reachable, and clickable with the compact logo-plus-text lockup.
- [x] 6.6 Verify mobile header and entry branding remain readable without horizontal scrolling.
- [x] 6.7 Run `npm run build` and `openspec validate increase-header-logo-size --strict` and verify both pass after the logo asset revision.
