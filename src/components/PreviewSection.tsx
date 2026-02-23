/**
 * Teaser Preview Section - Curiosity gap + social proof
 * Blurred thumbnails with locked overlay drive desire to unlock
 */
const CTA_URL = "/hentai";

// Placeholder thumbnails - use placeholder service for safe generic images
const THUMBNAILS = [
  "https://placehold.co/300x400/1a1a1a/333?text=1",
  "https://placehold.co/300x400/1a1a1a/333?text=2",
  "https://placehold.co/300x400/1a1a1a/333?text=3",
  "https://placehold.co/300x400/1a1a1a/333?text=4",
  "https://placehold.co/300x400/1a1a1a/333?text=5",
  "https://placehold.co/300x400/1a1a1a/333?text=6",
];

export function PreviewSection() {
  return (
    <section class="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div class="max-w-6xl mx-auto">
        {/* Section header */}
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            A glimpse of what's waiting
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Members get full access to our entire collection. Here's a taste of what you're missing.
          </p>
        </div>

        {/* Blurred thumbnail grid - creates curiosity */}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {THUMBNAILS.map((src, i) => (
            <div
              class="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
              style={{
                "animation-delay": `${i * 100}ms`,
              }}
            >
              <div class="absolute inset-0 bg-black/40 backdrop-blur-md" />
              <img
                src={src}
                alt={`Preview ${i + 1}`}
                class="w-full h-full object-cover blur-md scale-110 select-none"
                loading="lazy"
              />
              {/* Locked overlay - psychological trigger */}
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-brand-red/80 flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under previews */}
        <div class="text-center">
          <a
            href={CTA_URL}
            class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-brand-red hover:bg-red-600 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Unlock Full Collection
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
