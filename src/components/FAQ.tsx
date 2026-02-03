'use client';

import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'Does PixelArt work offline?',
    a: 'Yes. You can color anywhere without an internet connection. Download images when online and enjoy them later offline.',
  },
  {
    q: 'How do in-app purchases and subscriptions work?',
    a: 'PixelArt may offer optional subscriptions or one-time purchases for extra content or features. Payment is processed through the App Store. You can manage or cancel subscriptions in your Apple ID settings.',
  },
  {
    q: 'What is the daily challenge?',
    a: 'The daily challenge is a small pixel art task you can complete each day—a quick, calming moment that gives you something to return to regularly.',
  },
  {
    q: 'What data does PixelArt collect?',
    a: 'We may collect general usage and analytics data to improve the app. We do not sell your personal data. For details, see our Privacy Policy.',
  },
  {
    q: 'Is my progress saved?',
    a: 'Your coloring progress and saved pieces are stored on your device. Time-lapse and sharing features may use cloud or local storage as described in the app.',
  },
  {
    q: 'Can I use my own images?',
    a: 'Yes. You can color your own images in PixelArt. Add photos or pictures from your device and turn them into pixel art to color.',
  },
  {
    q: 'Who do I contact for support or privacy questions?',
    a: 'For support or privacy questions, contact us using the email provided in the App Store listing or in our Privacy Policy.',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-white py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          id="faq-heading"
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently asked questions
        </motion.h2>

        <ul className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <motion.li
              key={faq.q}
              className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
