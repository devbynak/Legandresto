export default function Loading() {
  return (
    <section className="container py-12">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gold" aria-label="Loading" />
      </div>
    </section>
  );
}