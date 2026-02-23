/**
 * FAQ Section - Collapsible accordion
 * SolidJS state-based expand/collapse
 */
import { createSignal, For, Show } from "solid-js";

const QUESTIONS = [
  {
    q: "What kind of content do you offer?",
    a: "We offer premium anime-style adult content for fans 18 and over. All characters depicted are adults. We focus on quality, variety, and regular updates.",
  },
  {
    q: "How do I join?",
    a: "Simply click the Unlock Access button and follow the secure checkout process. You'll have instant access to the full collection within minutes.",
  },
  {
    q: "Is my payment discreet?",
    a: "Yes. We use secure payment processing with discreet billing. Your statement will show a neutral descriptor—never our site name.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. No long-term commitment. Cancel from your account settings at any time. You'll retain access until the end of your billing period.",
  },
  {
    q: "How often is new content added?",
    a: "We add new content daily. Members get first access to everything before anyone else. You'll never run out of fresh material.",
  },
  {
    q: "Is my privacy protected?",
    a: "100%. We never sell or share your data. Anonymous usernames, encrypted connections, and discreet access. Your privacy is sacred to us.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = createSignal<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section class="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
          <p class="text-neutral-400">
            Everything you need to know before you join.
          </p>
        </div>

        <div class="space-y-3">
          <For each={QUESTIONS}>
            {(item, i) => {
              const index = i();
              const isOpen = () => openIndex() === index;
              return (
                <div
                  class="rounded-xl border border-neutral-800 overflow-hidden transition-colors hover:border-neutral-700"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    class="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors"
                  >
                    <span class="font-medium text-white">{item.q}</span>
                    <svg
                      class={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen() ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <Show when={isOpen()}>
                    <div class="px-6 pb-4 pt-0 border-t border-neutral-800">
                      <p class="text-neutral-400 text-sm leading-relaxed pt-4">
                        {item.a}
                      </p>
                    </div>
                  </Show>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </section>
  );
}
