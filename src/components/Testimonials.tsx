/**
 * Social Proof Section - Anonymous testimonials
 * 5-star indicators + credible copy
 */
import { For } from "solid-js";

const TESTIMONIALS = [
  {
    username: "AnimeFan_***",
    rating: 5,
    text: "Best quality I've found. Daily updates keep it fresh. Worth every penny.",
  },
  {
    username: "S***_Lover",
    rating: 5,
    text: "Private, discreet, and the content is exactly what I was looking for. No regrets.",
  },
  {
    username: "Cosplay***",
    rating: 5,
    text: "Finally a site that gets it. Premium quality and actually respects your privacy.",
  },
  {
    username: "J***Tokyo",
    rating: 5,
    text: "Joined last month. Already my go-to. The daily drops are incredible.",
  },
];

function StarRating(props: { rating: number }) {
  return (
    <div class="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          class={`w-5 h-5 ${i < props.rating ? "text-amber-400" : "text-neutral-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section class="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-950">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            What members are saying
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Join thousands of satisfied members who made the switch.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <For each={TESTIMONIALS}>
            {(testimonial) => (
              <div class="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <StarRating rating={testimonial.rating} />
                <p class="mt-4 text-neutral-300 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p class="mt-4 text-neutral-500 text-xs">
                  — {testimonial.username}
                </p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
