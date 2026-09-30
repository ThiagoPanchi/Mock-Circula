## Context

The map header in `src/App.vue` renders the Circula logo inside `.brand-block` with the mock-data note beside it and action buttons in `.action-row`. The entry screen also imports a logo asset. The root `logo.png` asset exists and now represents only the symbol, so the app needs to render `Circula` as adjacent text in the entry and header brand lockups. The header should return to a compact logo symbol height similar to the earlier header size rather than the latest majority-width logo treatment.

## Goals / Non-Goals

**Goals:**
- Use root `logo.png` for both entry and header branding.
- Render `Circula` as text beside the symbol in both entry and header brand lockups.
- Reduce the header logo symbol height to the earlier compact header size.
- Preserve logo aspect ratio and avoid image distortion, cropping, or stretching.
- Keep the mock-data note and header action buttons usable alongside the compact brand lockup.
- Maintain mobile readability without introducing horizontal scrolling or overlap.

**Non-Goals:**
- Replacing or optimizing the `logo.png` asset.
- Changing header actions, map controls, filters, data, markers, or modals.
- Adding new dependencies or persistence.

## Decisions

1. Import and use root `logo.png` for the app brand asset in both entry and header views.
   - Rationale: the user specified the new logo-only symbol file, and Vite-compatible imports already work for root logo assets.
   - Alternatives considered: continuing to use `logo-circula.png`, but that would show the older text-included asset and duplicate the new text label requirement.

2. Represent the brand as a lockup: logo symbol image plus text label.
   - Rationale: `logo.png` contains only the symbol, so visible `Circula` text must be rendered separately for brand readability.
   - Alternatives considered: editing the image asset to include text, but that is unnecessary and less flexible than text markup.

3. Return the header logo symbol to the earlier compact height and size the text with CSS.
   - Rationale: the current revision made the header symbol too tall; the requested result is a compact symbol with text beside it.
   - Alternatives considered: keeping the majority-width logo and adding text, but that would further crowd the header and conflict with the requested smaller header height.

4. Keep the mock-data note separate from the brand lockup.
   - Rationale: separating the note from the symbol/text lockup prevents the note from reading as part of the logo while preserving the existing demonstrative context.
   - Alternatives considered: placing the note between the symbol and `Circula`, but that would break the brand lockup.

5. Keep a separate mobile sizing rule.
   - Rationale: compact desktop sizing still needs mobile constraints so the brand text and actions do not overflow.
   - Alternatives considered: one universal size rule, but it risks either undersizing desktop or overflowing mobile.

## Risks / Trade-offs

- [Brand text can look disconnected from the symbol] -> Keep symbol and `Circula` text inside the same brand lockup with consistent spacing.
- [Switching assets can break production bundling] -> Import `logo.png` through the same Vite asset handling used for the previous logo.
- [Header can become crowded with symbol, text, note, and actions] -> Use compact symbol height and allow header content to wrap responsively.
- [Mobile layout can overflow] -> Keep mobile-specific symbol and text sizing and allow header content to stack.

## Migration Plan

1. Update entry and header logo imports to use root `logo.png`.
2. Add visible `Circula` text beside the logo symbol in the entry and header brand lockups.
3. Update header CSS to use compact symbol height similar to the earlier header size and style the text label beside it.
4. Tune mobile brand lockup sizing and header layout so content remains readable without horizontal scrolling.
5. Verify the side panel still clears the compact header.
6. Run production build and OpenSpec validation.
