/**
 * Final CTA Section - Last chance conversion
 * Strong emotional hook + prominent CTA
 */
const CTA_URL = "/hentai";

export function FinalCTA() {
  return (
    <section class="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div class="absolute inset-0 bg-gradient-to-b from-black via-brand-red-dark/30 to-black" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-transparent to-transparent opacity-70" />

      <div class="relative z-10 max-w-4xl mx-auto text-center">
        {/* Large headline - emotional hook */}
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Don't wonder.
          <span class="block text-brand-red mt-2">Experience it.</span>
        </h2>

        {/* Supporting copy */}
        <p class="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
          Join thousands of members who've already unlocked the full experience. Your fantasies deserve premium quality.
        </p>

        {/* Prominent CTA button */}
        <a
          href={CTA_URL}
          class="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold text-white bg-brand-red hover:bg-red-600 rounded-xl transition-all duration-300 animate-glow-pulse hover:scale-105 active:scale-100 shadow-xl shadow-brand-red/40 hover:shadow-brand-red/60"
        >
          Unlock Full Access Now
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        <p class="mt-6 text-sm text-neutral-500">
          18+ only • Cancel anytime • Secure & private
        </p>
      </div>
    </section>
  );
}
