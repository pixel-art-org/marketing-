'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { APP_NAME, APP_STORE_URL, PRIVACY_URL } from '@/lib/config';

export function Hero() {
  return (
    <section
      id="main"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50/80 via-white to-sky-50/60 pointer-events-none" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

      <div className="relative z-0 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Calm builds,{' '}
              <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
                one pixel at a time
              </span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-lg text-gray-600 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Peaceful paint-by-number pixel art. Slow down, unwind, and watch calm,
              detailed scenes take shape. Daily challenge, soothing sounds, works offline.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex min-h-[48px] min-w-[280px] cursor-pointer items-center justify-center rounded-2xl bg-gray-900 px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-gray-800 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:bg-gray-700"
                aria-label="Download PixelArt on the App Store"
              >
                Download on the App Store
              </a>
              <Link
                href={PRIVACY_URL}
                className="inline-flex items-center text-gray-600 underline decoration-gray-300 underline-offset-4 hover:text-violet-600 hover:decoration-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 rounded"
              >
                Read Privacy Policy
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-400/20 to-sky-400/20 blur-2xl" />
              <div className="relative rounded-3xl p-3 shadow-soft ring-1 ring-black/5">
                <Image
                  src="/icon.png"
                  alt={`${APP_NAME} app icon`}
                  width={240}
                  height={240}
                  className="rounded-2xl object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
