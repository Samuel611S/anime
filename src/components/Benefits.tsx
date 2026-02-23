/**
 * Benefits Section - Value propositions
 * Clear reasons to convert with icons
 */
import { For } from "solid-js";

const BENEFITS = [
  {
    icon: (
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Premium Quality",
    description: "High-resolution anime-style art crafted with attention to detail. Every piece meets our strict quality standards.",
  },
  {
    icon: (
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Daily Updates",
    description: "Fresh content added every day. Never run out of new material to explore.",
  },
  {
    icon: (
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "100% Private",
    description: "Discreet billing and anonymous access. Your privacy is our priority.",
  },
  {
    icon: (
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
      </svg>
    ),
    title: "Access Anywhere",
    description: "Stream or download. Works on all your devices—phone, tablet, or desktop.",
  },
];

export function Benefits() {
  return (
    <section class="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-950">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why members love us
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            We've built something special for fans who appreciate quality and discretion.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <For each={BENEFITS}>
            {(benefit) => (
              <div class="group p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-brand-red/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/5">
                <div class="text-brand-red mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 class="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p class="text-neutral-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
