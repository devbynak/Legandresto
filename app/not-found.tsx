import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-12">
      <div className="card p-8 text-center space-y-4">
        <h1 className="text-3xl font-display tracking-tight text-gold">Page not found</h1>
        <p className="text-zinc-300">The page you’re looking for doesn’t exist or has moved.</p>
        <Link className="btn bg-white text-ink hover:bg-white/90" href="/">Return Home</Link>
      </div>
    </section>
  );
}