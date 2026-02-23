/**
 * Why Join Section - Bullet points with psychological triggers
 * Exclusivity, scarcity, community, premium access
 */
import { For } from "solid-js";

const REASONS = [
  "Exclusive content you won't find anywhere else",
  "New uploads added every single day",
  "Join a private community of like-minded fans",
  "Cancel anytime—no long-term commitment",
  "Secure payment with discreet billing",
  "HD quality optimized for all devices",
];

export function WhyJoin() {
  return (
    <section class="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why thousands have already joined
          </h2>
          <p class="text-neutral-400">
            It's not just content—it's an experience built for you.
          </p>
        </div>

        <div class="space-y-4 mb-12">
          <For each={REASONS}>
            {(reason) => (
              <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-brand-red/20 transition-colors">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center mt-0.5">
                  <svg
                    class="w-4 h-4 text-brand-red"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span class="text-neutral-200">{reason}</span>
              </div>
            )}
          </For>
        </div>

        <div class="text-center">
          <a
            href="/hentai"
            class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-brand-red hover:bg-red-600 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Join Now
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
        </div>
      </div>
    </section>
  );
}
