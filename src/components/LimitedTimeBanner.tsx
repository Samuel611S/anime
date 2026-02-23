/**
 * Limited Time Banner - Urgency/scarcity trigger
 * Highlighted discount + FOMO copy
 */
export function LimitedTimeBanner() {
  return (
    <section class="py-6 px-4 sm:px-6 bg-gradient-to-r from-brand-red-dark via-brand-red/20 to-brand-red-dark border-y border-brand-red/30">
      <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
        <div class="flex items-center justify-center gap-2 sm:gap-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red text-white text-sm font-semibold animate-pulse">
            Limited Time
          </span>
          <span class="text-white font-bold text-lg sm:text-xl">
            Special offer for new members
          </span>
        </div>
        <a
          href="/hentai"
          class="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-brand-red bg-white hover:bg-neutral-100 rounded-lg transition-colors shrink-0"
        >
          Claim Offer
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
