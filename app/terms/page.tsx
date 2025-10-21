export const metadata = {
  title: "Terms of Service | Le Grandresto",
  description: "Terms governing use of Le Grandresto website and services.",
};

export default function TermsPage() {
  return (
    <section className="container py-12">
      <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-gold mb-6">Terms of Service</h1>
      <div className="prose prose-invert max-w-none">
        <p>
          By accessing or using this website, you agree to be bound by these terms
          and applicable laws. Content is provided for informational purposes only,
          and may change without notice.
        </p>
        <p>
          For questions about these terms, contact us at
          <a href="mailto:legrandhut@gmail.com" className="ml-1 underline hover:text-gold">legrandhut@gmail.com</a>.
        </p>
        <p className="mt-8 text-sm text-zinc-400">These terms may be updated periodically.</p>
      </div>
    </section>
  );
}