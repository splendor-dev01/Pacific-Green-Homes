# Deep Video Analysis & Reverse-Engineering Specification (`Pacific Green Homes`)

## Phase 1: Frame-by-Frame Visual & Interaction Analysis

### 1. Video Telemetry & Timeline Breakdown
- **Source File:** `SnapTik_Efficient_webdesign_website_websitedesign_webde.mp4` (`1080x1920`, `59.71 fps`, `621 frames`, `10.40s` duration)
- **Chronological Scroll & Camera Choreography Observed:**
  - **`0.00s – 1.00s` (Frames `0–60`):** The page is resting slightly scrolled past the sticky Hero container (`~240px` past the end of `.hero-wrapper`), showing the lower half of the final Hero frame (the luxury living room & outdoor pool panorama) and the top of the `— WHO WE ARE` (`"Exceptional construction, built the right way."`) section. The fixed top navbar is in its `.scrolled` state (`#0f1f14eb` with `backdrop-filter: blur(18px)`).
  - **`1.00s – 4.52s` (Frames `60–270`):** The user scrolls **upward** back toward `scrollY = 0`. As the scroll position re-enters `.hero-wrapper`, the sticky `100vh` Hero stage locks to the viewport, the top navbar transitions back to transparent, and the 3D camera walkthrough scrubs smoothly **in reverse**:
    - Gliding forward from the wide living room (`1.76s`) -> past the white bouclé sectional sofa and framed wall art (`2.26s`) -> into the open-concept kitchen (`2.76s`) -> along the black Nero Marquina waterfall marble kitchen island (`3.27s`) -> tilting down onto the rolled architectural blueprint (`3.77s`), which unrolls flat (`4.02s – 4.52s`) as the white centered `#hero-logo` (`PACIFIC GREEN HOMES`) fades in to `opacity: 1` over the final 10% of reverse scroll.
  - **`4.52s – 5.02s` (Frames `270–300`):** Resting at the top of the page (`scrollY = 0`). Top-down close-up of the architectural floorplan blueprint resting on the black veined marble countertop, with a silver/white tape measure at the top-right corner, a drafting pencil at the bottom-right, and the white `PACIFIC GREEN HOMES` emblem centered in the courtyard of the drawing.
  - **`5.02s – 8.79s` (Frames `300–525`):** The user scrolls **downward** from `scrollY = 0` through the entire `500vh` sticky Hero wrapper:
    - **`0% – 10%` scroll (`5.02s – 5.28s`):** The centered `#hero-logo` overlay fades out (`opacity = Math.max(0, 1 - progress / 0.1)`) and the bottom-right `SCROLL` indicator hides (`progress > 0.001`).
    - **`10% – 30%` scroll (`5.28s – 6.03s`):** The left edge of the blueprint curls up into a roll as the camera pulls back and tilts up along the polished black veined marble waterfall island.
    - **`30% – 65%` scroll (`6.03s – 7.29s`):** The camera glides backward down the length of the waterfall island past white barstools, matte charcoal tall cabinetry with built-in ovens on the left, and warm light-oak cabinetry with under-cabinet lighting and a sunlit garden window on the right.
    - **`65% – 100%` scroll (`7.29s – 8.79s`):** The camera pulls out of the kitchen into the expansive living area, revealing the curved white sectional sofa, black-framed glass coffee tables on a sage-grey rug, round charcoal accent chair, linear fireplace, and open pocket glass doors leading to the turquoise pool, sun loungers, and guest house.
  - **`8.79s – 10.40s` (Frames `525–621`):** Continued downward scroll past the sticky Hero:
    - **`9.04s – 9.55s` (Frames `540–570`):** Navbar transitions smoothly to solid translucent deep pine (`#0f1f14eb`). Section 2 (`— WHO WE ARE` / `"Exceptional construction, built the right way."`) reveals with a two-column split layout (`1fr 1fr`, `60px` gap).
    - **`9.55s – 10.05s` (Frames `570–600`):** Section 3 (`— WHAT WE DO` / `"Services built for California homes"`) on warm stone/alabaster (`#eae5dc`) background, displaying a 3x2 staggered grid of 6 white service cards (`border-radius: 14px`, `4:3` image top, `26px` body padding, title, description, and `Explore →` link).
    - **`10.05s – 10.40s` (Frames `600–621`):** Section 4 (`— THE HARD JOBS` / `"We build where others won't."`) on a full-bleed dark ink (`#1a1a1a`) background with a `1.25fr 1fr` split grid: a `16:9` rounded interior walkthrough video on the left and eyebrow + bold white heading + lead copy + `View Recent Projects` CTA on the right, followed by Section 5 (`— WHY PACIFIC GREEN` / `"Reasons homeowners choose us"`).

---

### 2. Design Tokens & Visual Identity
- **Color Palette:**
  - `--pine` / `--green-700` / `--green-deep`: `#242e21`
  - `--green`: `#2f3b2b` (interactive accent `#22943d` on form focus/submit)
  - `--olive` / `--muted`: `#545e51`
  - `--stone` / `--off-white`: `#eae5dc`
  - `--ink` / `--charcoal`: `#1a1a1a`
  - `--text`: `#22271f`
  - `--green-tint`: `#dfe4da`
  - Header Scrolled Glass: `rgba(15, 31, 20, 0.92)` with `backdrop-filter: blur(18px)`
- **Typography:**
  - Font Family: `'Inter', system-ui, -apple-system, sans-serif`
  - Headings (`h1–h6`): `font-weight: 800`, `line-height: 1.08`, `letter-spacing: -0.02em`
  - `h1`: `clamp(2.6rem, 6vw, 4.6rem)` (`intro` `h1`: `clamp(1.9rem, 3.6vw, 2.9rem)`)
  - `h2`: `clamp(2rem, 4.4vw, 3.2rem)`
  - `h3`: `clamp(1.35rem, 2.2vw, 1.7rem)`
  - Eyebrow: `0.8rem`, `font-weight: 700`, ` uppercase`, `letter-spacing: 0.16em`, preceded by a `22px × 2px` horizontal bar
- **Motion & Easing:**
  - Primary curve: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`, `--dur: 0.4s`
  - Hero scrub damping: `current += (target - current) * 0.15` per `requestAnimationFrame` tick
  - Scroll reveal (`[data-reveal]`): `opacity: 0; transform: translateY(30px)` (or `translateX(±32px)` for `left`/`right`) -> `opacity: 1; transform: none` over `0.8s cubic-bezier(0.16, 1, 0.3, 1)`
  - Staggered children (`[data-stagger]`): `0.05s`, `0.13s`, `0.21s`, `0.29s`, `0.37s`, `0.45s` delays
