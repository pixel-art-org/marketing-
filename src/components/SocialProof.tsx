'use client';

const testimonials = [
  {
    quote: 'Nice pictures and relaxing music. Perfect to unwind.',
    label: 'User feedback',
  },
  {
    quote: 'Cool music and images. I keep coming back for the daily challenge.',
    label: 'User feedback',
  },
  {
    quote: 'Simple and calming. Works great offline on the train.',
    label: 'User feedback',
  },
];

export function SocialProof() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-gradient-to-b from-white to-gray-50/80 py-16 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="reviews-heading"
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Loved by coloring fans worldwide
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          A peaceful paint-by-number experience to help you slow down and unwind.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft"
            >
              <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                {t.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
