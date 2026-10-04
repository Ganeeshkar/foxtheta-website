# Foxtheta: typography, diagrams and motion plan

Prepared 18 September 2026. Research and planning only; implementation is deferred to the next working session at the user's request.

## Goal

Reach the visual precision and animation quality of Baseten, using original illustrations that explain Foxtheta's actual services. The existing redesign is a starting layout, not the finished visual standard. Its substitute fonts, static hero, and simple diagram fades do not deliver the requested result.

## Reference findings

Core pages inspected, rather than an exhaustive audit of every Baseten route:

| Reference | Observed design | Application to Foxtheta |
| --- | --- | --- |
| [Homepage](https://www.baseten.co/) | Isometric compute stack, connected model cubes and clouds, changing states and counters | A flagship scene showing how company knowledge becomes a useful action |
| [Model performance](https://www.baseten.co/platform/model-performance/) | Fine wireframe cube with translucent lilac planes, green accents, small labels | Layered knowledge and retrieval illustration |
| [Model management](https://www.baseten.co/platform/model-management/) | Exploded cylindrical layers connected to cloud endpoints | Agent orchestration and integration topology |
| [Cloud infrastructure](https://www.baseten.co/platform/cloud-native-infrastructure/) | Dotted globe, cloud nodes, region labels and deployment-state indicators | Connected business systems and explicit status changes |
| [Multi-cloud capacity](https://www.baseten.co/products/multi-cloud-capacity-management/) | Suspended model cube and planes above GPU tiles and distributed cloud providers | A consistent visual hierarchy from inputs through processing to outputs |

The reference's animation implementation library has not been established. The technology below is our proposed approach, not a claim about Baseten's stack.

## Typography and composition

The live homepage's computed styles identified NeueAlteGrotesk for main text and chivoMono for technical labels/buttons. At the inspected desktop size, the homepage headline was 88px/600 with -1.76px tracking; section headings included 64px and 48px sizes. Labels/buttons used 14–16px text. These are reference measurements, not fixed sizes for every viewport.

- Use Neue Alte Grotesk with an appropriate webfont license and supplied font files. [Font supplier](https://www.myfonts.com/collections/neue-alte-grotesk-font-visualworks).
- Use [Chivo Mono](https://fonts.google.com/specimen/Chivo+Mono) for labels and compact technical annotations.
- Establish responsive type sizes, headline wrapping, line height and spacing together. The current DM Sans/IBM Plex Mono pairing and overly tight headline tracking need revision.
- Keep white space generous; use confident black text, fine rules, square controls, and a disciplined green/lilac accent palette.
- Compose text and artwork on the same grid. Every illustration should look finished when paused.

## Original scene family

| Location | Story to illustrate | Motion with a purpose |
| --- | --- | --- |
| Home | Business sources → knowledge → agent → tools → human approval → output | A request travels through the system; relevant layers activate; the result settles into place |
| AI Development | Request → planning → tool call → review → completed action | One path is traced, an approval gate changes state, then the action completes |
| RAG & Knowledge Systems | Documents → index; question → retrieval → ranked evidence → cited answer | Relevant document fragments separate, matches highlight, and citations connect to the answer |
| Workflow Automation | Incoming item → validation → decision → action or review | Normal and exception paths become visibly distinct, with an explicit human handoff |
| Integrations | CRM, ERP and database connected through a controlled interface | A data event moves between systems, followed by acknowledgement or a retry |
| Custom AI Applications | User input → model processing → useful interface result | A small, credible product interface changes state as the task completes |
| Web/mobile service | One business workflow across desktop and mobile | Shared content rearranges into each device layout while preserving task context |

Scenes are illustrative examples. Do not invent customer deployments, live telemetry or business results.

## Build approach

Use custom SVG artwork inside the existing React application, with GSAP timelines for coordinated movement. Use [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) when a scene should begin or pause as it enters or leaves view. Keep ordinary page scrolling natural.

Create a small shared illustration kit: consistent perspective, planes, document cards, system nodes, connector paths, labels, approval states and highlights. Each scene should have its own composition and story while sharing these visual rules.

Proposed motion vocabulary:

- One clear focal action at a time, with secondary movement kept quiet.
- Approximately 6–10 seconds for a full explanatory cycle, tuned after viewing; this is a proposed duration, not a measurement of Baseten.
- Gentle acceleration/deceleration, short staggered introductions, readable pauses, and a clean loop reset.
- Path-following signals, selective layer separation and meaningful state changes.
- Responsive compositions that reposition or simplify diagrams on small screens instead of shrinking all labels.
- Pause offscreen and in hidden tabs; provide a pause control for ongoing motion and a useful reduced-motion state.
- Keep essential meaning available as accessible text; use keyboard/touch controls where scenes are interactive.
- Target smooth 60fps motion on representative hardware and verify it through profiling. Avoid promising a frame rate before measurement.

## Implementation sequence for the next session

1. Resolve the font assets and rebuild the type/spacing scale. Refine the hero layout and create one finished static illustration at desktop and mobile sizes.
2. Storyboard and animate that hero. Review composition, easing, pacing, line quality and label legibility alongside the reference at the same viewport size.
3. Build the RAG service scene to prove that the illustration system supports a second, distinct explanation. Add responsive and reduced-motion behavior immediately.
4. Refine these two examples before expanding the pattern to the other services. Give each remaining page its own scene and tailor the surrounding layout to the content.
5. Finish navigation, buttons, section entrances and page transitions with restrained, consistent motion. Check all routes and contact flows.

The first implementation milestone is a polished animated homepage hero and a RAG example. A complete site at this standard requires subsequent illustration and refinement passes; it should not be promised as a single rushed pass.

## Acceptance criteria

- Typography, proportions and spacing visibly match the chosen direction.
- A paused diagram is composed clearly, with readable labels and consistent line weight.
- Watching one cycle explains a real Foxtheta capability.
- Motion has a deliberate sequence, no jumpy resets, no overlapping labels and no layout shifts.
- Mobile has an intentional composition; no clipping or horizontal overflow.
- Reduced-motion and keyboard use preserve understanding and control.
- Animations clean up on route changes and do not continue consuming resources offscreen.
- Build/lint, route navigation and contact interactions pass; performance is checked with the finished scenes running.

## Immediate dependency

Check whether the project already has licensed Neue Alte Grotesk webfont files. If absent, obtaining the appropriate assets is needed for an exact font match. Illustration and motion work can proceed independently; do not silently substitute a different font and call it matched.

## Implementation update — 18 September 2026

- Revisited the live reference after feedback. Verified Lottie-rendered SVG scenes, page-specific accent colors, heading highlights and construction lines.
- Rebuilt the homepage illustration with isometric plates, etched grids, suspended layers, path-following packets and a review output. Added distinct illustrations across all six service heroes and an interactive RAG example.
- Added green, lavender and pale blue page accents, fine section guides and tighter editorial typography. Inter remains temporary pending the user's Neue Alte Grotesk file location.
- Shared GSAP timelines pause offscreen and in hidden tabs, clean up on unmount, and respect reduced motion. Explicit Play enables an individual scene when reduced motion is selected.
- Production build and lint pass. Browser checks covered all six service routes, homepage, services overview and contact at 320px without horizontal overflow or captured browser errors. Desktop and mobile compositions, playback, RAG example switching, source disclosure and keyboard navigation were checked. Frame-rate profiling has not been completed.

## Bounded follow-up — 19 September 2026

Fixed reduced-motion preference transitions without overriding explicit user pause, enforced the visibility threshold, enlarged playback controls with clearer focus/hover states, and aligned RAG highlight end states with the next loop. Build and lint pass; browser Play/Pause/Play and pause stability verified, with no captured errors. Exact font integration and further visual refinement remain pending. Stopped early to preserve the user's 20% usage reserve.

## Illustrated service explorer and font preview — 19 September 2026

Replaced the homepage/services card grid with a keyboard-accessible six-tab service explorer. Each selection has an explanatory sequence, original diagram, service link, and green/lavender/blue accent. Agent and knowledge heroes now have distinct SVG compositions rather than reusing the homepage hero. All six selections and destinations, Home-key navigation, desktop layout and 320px overflow were checked.

The supplied font folder contains Fontspring demo OTFs and a Personal Use Only notice. Four weights are loaded only in development through font-preview.css; letter glyphs use the supplied font while symbols use the fallback because the demo replaces some symbols. Production build inspection confirmed no demo fonts or font-preview references were emitted. Licensed production webfonts remain required for full typography parity.

