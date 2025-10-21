export const metadata = {
  title: "Privacy Policy | Le Grandresto",
  description: "Our commitment to protecting your privacy at Le Grandresto.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container py-12">
      <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-gold mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>
          We value your privacy. This page describes how we handle personal data
          collected through our website and services. We only collect information
          necessary to provide a high-quality experience and do not sell your data.
        </p>
        <p>
          If you have questions about this policy, please contact us at
          <a href="mailto:legrandhut@gmail.com" className="ml-1 underline hover:text-gold">legrandhut@gmail.com</a>.
        </p>
        <p className="mt-8 text-sm text-zinc-400">This document may be updated from time to time.</p>
      </div>
    </section>
  );
}