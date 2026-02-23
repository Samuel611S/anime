/**
 * Landing Page - High-converting sales funnel for cosplayfans.ai
 * Target: /lp/hentai/1 -> Primary goal: CTR to /hentai
 *
 * Funnel structure:
 * 1. Hero - Emotional hook + CTA
 * 2. Preview Section - Curiosity gap
 * 3. Benefits - Value props
 * 4. Why Join - Bullet triggers
 * 5. Limited Time Banner - Urgency
 * 6. Testimonials - Social proof
 * 7. FAQ - Objection handling
 * 8. Final CTA - Last chance
 */
import { Hero } from "./Hero";
import { PreviewSection } from "./PreviewSection";
import { Benefits } from "./Benefits";
import { WhyJoin } from "./WhyJoin";
import { LimitedTimeBanner } from "./LimitedTimeBanner";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";

export function LandingPage() {
  return (
    <main class="min-h-screen bg-black text-white antialiased">
      {/* 1. Hero - Above fold conversion driver */}
      <Hero />

      {/* 2. Teaser preview - Curiosity gap */}
      <PreviewSection />

      {/* 3. Benefits - Value propositions */}
      <Benefits />

      {/* 4. Why Join - Psychological triggers */}
      <WhyJoin />

      {/* 5. Limited time banner - Urgency/scarcity */}
      <LimitedTimeBanner />

      {/* 6. Social proof - Testimonials */}
      <Testimonials />

      {/* 7. FAQ - Objection handling */}
      <FAQ />

      {/* 8. Final CTA - Last chance conversion */}
      <FinalCTA />

      {/* Minimal footer */}
      <footer class="py-8 px-4 text-center text-neutral-600 text-sm">
        <p>18+ only. All characters depicted are adults.</p>
        <p class="mt-2">
          <a href="/terms" class="hover:text-neutral-400 transition-colors">Terms</a>
          {" · "}
          <a href="/privacy" class="hover:text-neutral-400 transition-colors">Privacy</a>
        </p>
      </footer>
    </main>
  );
}
