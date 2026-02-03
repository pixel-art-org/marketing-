import Link from 'next/link';
import { APP_NAME, APP_STORE_URL, TERMS_URL, PRIVACY_URL } from '@/lib/config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              <li>
                <Link
                  href={PRIVACY_URL}
                  className="text-gray-600 hover:text-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={TERMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                >
                  App Store
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          &copy; {year} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
