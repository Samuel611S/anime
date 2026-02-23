# CosplayFans.ai – Hentai Landing Page Funnel

High-converting 18+ landing page for **cosplayfans.ai/lp/hentai/1**. Optimized to drive CTR to `/hentai`.

## Tech Stack

- **SolidJS** – Reactive UI
- **TailwindCSS** – Styling
- **Vite** – Build tool

## Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Build

```bash
npm run build
```

Output: `dist/` (static assets)

## GitHub Pages Deployment

1. Push to `main` – the workflow builds and deploys automatically.
2. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Site will be live at `https://samuel611s.github.io/anime/`

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero + CTA
│   ├── PreviewSection.tsx # Blurred teaser cards
│   ├── Benefits.tsx      # Value props
│   ├── WhyJoin.tsx       # Bullet triggers
│   ├── LimitedTimeBanner.tsx # Urgency banner
│   ├── Testimonials.tsx  # Social proof
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── FinalCTA.tsx      # Last CTA
│   └── LandingPage.tsx   # Main composition
├── App.tsx
├── main.tsx
└── index.css
```

## Integration

To serve at `cosplayfans.ai/lp/hentai/1`:

1. **Static**: Deploy `dist/` to your CDN and map `/lp/hentai/1` to `index.html`.
2. **SPA**: If using a parent SPA router, add a route for `/lp/hentai/1` that renders `LandingPage`.
3. **CTA links**: All CTAs point to `/hentai`. Update `CTA_URL` in components if your target path differs.

## Design

- Black + deep red theme
- Mobile-first responsive
- Subtle glow on primary CTA
- 18+ age gating copy
