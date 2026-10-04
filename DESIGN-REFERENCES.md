# Foxtheta redesign

Primary reference selected by the user: [Baseten](https://www.baseten.co/).

## Reviewed references
- [Baseten](https://www.baseten.co/): bold black typography, white backgrounds, fine grid divisions, green infrastructure illustrations, square buttons.
- [Work & Co](https://www.work.co/): clear positioning, editorial hierarchy and restrained navigation.
- [Instrument](https://www.instrument.com/): confident scale and a recognizable identity.

## Implemented direction
White, black and bright green with lavender and pale blue accents; square surfaces, construction lines and original SVG illustrations animated with GSAP. The homepage uses a layered isometric system; service pages have distinct workflow, integration, knowledge and application scenes.

Baseten's live hero uses Lottie-rendered SVG. Its typography uses Neue Alte Grotesk and Chivo Mono. Production currently uses Inter and Chivo Mono. The supplied Neue Alte Grotesk files are demos marked Personal Use Only; their letterforms are enabled in the local development preview only. Licensed webfonts are still needed for production. See `handoff/CLAUDE-HANDOFF.md` for the current state.

The illustration and example workflows are original and describe capabilities. They are not customer deployments or performance claims. Existing service details, contact information, routes and the omission of unverified customer proof are retained. Generic social-network homepage links are omitted from the footer.

## Review locally
Run `npm run dev -- --host 127.0.0.1` and open http://127.0.0.1:5173/.
