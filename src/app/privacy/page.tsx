import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_NAME, META } from '@/lib/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `Privacy Policy – ${APP_NAME}`,
  description: `Privacy policy for ${APP_NAME}: Number Coloring Book. Data collection, use, and your choices.`,
};

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'collection', title: 'Information Collection and Use' },
  { id: 'third-party', title: 'Third Party Access' },
  { id: 'opt-out', title: 'Opt-Out Rights' },
  { id: 'retention', title: 'Data Retention Policy' },
  { id: 'children', title: 'Children' },
  { id: 'security', title: 'Security' },
  { id: 'changes', title: 'Changes' },
  { id: 'consent', title: 'Your Consent' },
  { id: 'contact', title: 'Contact Us' },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">
            Last updated: May 28, 2025
          </p>

          <nav className="mt-8 rounded-2xl border border-gray-100 bg-gray-50/80 p-6" aria-label="Table of contents">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">On this page</h2>
            <ul className="mt-3 space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-violet-600 hover:text-violet-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose prose-gray mt-12 max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline">
            <section id="intro">
              <h2>Introduction</h2>
              <p>
                This privacy policy applies to the <strong>{APP_NAME}: Number Coloring Book</strong> app
                (hereby referred to as &quot;Application&quot;) for mobile devices that was created by{' '}
                <strong>Aliaksei Kernazhytski</strong> (hereby referred to as &quot;Service Provider&quot;) as
                an Ad Supported service. This service is intended for use &quot;AS IS&quot;.
              </p>
            </section>

            <section id="collection">
              <h2>Information Collection and Use</h2>
              <p>
                The Application collects information when you download and use it. This information may include
                information such as:
              </p>
              <ul>
                <li>Your device&apos;s Internet Protocol address (e.g. IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
              <p>
                The Application does not gather precise information about the location of your mobile device.
              </p>
              <p>
                The Service Provider may use the information you provided to contact you from time to time to
                provide you with important information, required notices and marketing promotions.
              </p>
              <p>
                For a better experience, while using the Application, the Service Provider may require you to
                provide us with certain personally identifiable information. The information that the Service
                Provider request will be retained by them and used as described in this privacy policy.
              </p>
            </section>

            <section id="third-party">
              <h2>Third Party Access</h2>
              <p>
                Only aggregated, anonymized data is periodically transmitted to external services to aid the
                Service Provider in improving the Application and their service. The Service Provider may share
                your information with third parties in the ways that are described in this privacy statement.
              </p>
              <p>
                Please note that the Application utilizes third-party services that have their own Privacy
                Policy about handling data. Below are the links to the Privacy Policy of the third-party
                service providers used by the Application:
              </p>
              <ul>
                <li>AdMob</li>
                <li>Google Analytics for Firebase</li>
                <li>Firebase Crashlytics</li>
                <li>AppLovin</li>
              </ul>
              <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
              <ul>
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
              </ul>
            </section>

            <section id="opt-out">
              <h2>Opt-Out Rights</h2>
              <p>
                You can stop all collection of information by the Application easily by uninstalling it. You may
                use the standard uninstall processes as may be available as part of your mobile device or via
                the mobile application marketplace or network.
              </p>
            </section>

            <section id="retention">
              <h2>Data Retention Policy</h2>
              <p>
                The Service Provider will retain User Provided data for as long as you use the Application and
                for a reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you
                have provided via the Application, please contact them at{' '}
                <a href="mailto:itsart.developer@gmail.com">itsart.developer@gmail.com</a> and they will
                respond in a reasonable time.
              </p>
            </section>

            <section id="children">
              <h2>Children</h2>
              <p>
                The Service Provider does not use the Application to knowingly solicit data from or market to
                children under the age of 13.
              </p>
              <p>
                The Application does not address anyone under the age of 13. The Service Provider does not
                knowingly collect personally identifiable information from children under 13 years of age. In
                the case the Service Provider discover that a child under 13 has provided personal information,
                the Service Provider will immediately delete this from their servers. If you are a parent or
                guardian and you are aware that your child has provided us with personal information, please
                contact the Service Provider (<a href="mailto:itsart.developer@gmail.com">itsart.developer@gmail.com</a>) so
                that they will be able to take the necessary actions.
              </p>
            </section>

            <section id="security">
              <h2>Security</h2>
              <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information.
                The Service Provider provides physical, electronic, and procedural safeguards to protect
                information the Service Provider processes and maintains.
              </p>
            </section>

            <section id="changes">
              <h2>Changes</h2>
              <p>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will
                notify you of any changes to the Privacy Policy by updating this page with the new Privacy
                Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued
                use is deemed approval of all changes.
              </p>
              <p>This privacy policy is effective as of 2025-05-28.</p>
            </section>

            <section id="consent">
              <h2>Your Consent</h2>
              <p>
                By using the Application, you are consenting to the processing of your information as set
                forth in this Privacy Policy now and as amended by us.
              </p>
            </section>

            <section id="contact">
              <h2>Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the Application, or have questions
                about the practices, please contact the Service Provider via email at{' '}
                <a href="mailto:itsart.developer@gmail.com">itsart.developer@gmail.com</a>.
              </p>
              <p className="text-sm text-gray-500">
                This privacy policy page was generated by App Privacy Policy Generator.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Disclaimer:</strong> This is a general privacy policy template; update to match your
            actual practices.
          </div>

          <p className="mt-8">
            <Link
              href="/"
              className="text-violet-600 hover:text-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            >
              &larr; Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
