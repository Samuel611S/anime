/**
 * Hero Section - Above the fold emotional hook
 * Primary CTA drives conversions to /hentai
 */
const CTA_URL = "/hentai";

export function Hero() {
  return (
    <section class="relative min-h-[95vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-24">
      {/* Dark gradient background with anime aesthetic */}
      <div class="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-red/20 via-transparent to-transparent opacity-60" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div class="relative z-10 max-w-4xl mx-auto text-center">
        {/* Emotional headline - curiosity + desire */}
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
          Your fantasies,
          <span class="block text-brand-red bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-red-400 pt-1 pb-2">
            brought to life
          </span>
        </h1>

        {/* Subheadline - soft sell */}
        <p class="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Exclusive anime-style content crafted for discerning fans. Premium quality, daily updates, and a private experience you won't find anywhere else.
        </p>

        {/* Primary CTA with animated glow - conversion driver */}
        <a
          href={CTA_URL}
          class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-brand-red hover:bg-red-600 rounded-xl transition-all duration-300 animate-glow-pulse hover:scale-105 active:scale-100 shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50"
        >
          Unlock Access Now
          <svg
            class="w-5 h-5"
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

        {/* Trust indicator */}
        <p class="mt-6 text-sm text-neutral-500">
          18+ members only • Private & secure • Cancel anytime
        </p>
      </div>
    </section>
  );
}
