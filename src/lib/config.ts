/**
 * Single source of truth for app and link config.
 * Replace placeholders with real URLs when ready.
 */

export const APP_NAME = 'PixelArt';

export const APP_STORE_URL =
  'https://apps.apple.com/app/pixelart-number-coloring-book/id6745549624';

export const TERMS_URL =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

export const PRIVACY_URL = '/privacy';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pixelart.example.com';

export const META = {
  title: `${APP_NAME}: Number Coloring Book – Relaxing Pixel Painting`,
  description:
    'Peaceful paint-by-number pixel art. Slow down, unwind, and watch calm scenes take shape one square at a time. Offline-friendly, daily challenge, soothing sounds.',
  ogImage: '/icon.png',
};
