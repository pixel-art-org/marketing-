'use client';

import { motion } from 'framer-motion';

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
        <motion.h2
          id="reviews-heading"
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Loved by coloring fans worldwide
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-xl text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          A peaceful paint-by-number experience to help you slow down and unwind.
        </motion.p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.li
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                {t.label}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
