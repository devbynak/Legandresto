"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[APP_ERROR]", error);
  }, [error]);

  return (
    <section className="container py-12">
      <div className="card p-8 text-center space-y-4">
        <h1 className="text-3xl font-display tracking-tight text-gold">Something went wrong</h1>
        <p className="text-zinc-300">An unexpected error occurred. You can try again or go back home.</p>
        {error?.digest && (
          <p className="text-xs text-zinc-500">Error ID: {error.digest}</p>
        )}
        <div className="flex items-center justify-center gap-4">
          <button className="btn bg-gold text-ink hover:bg-gold/90" onClick={() => reset()}>Try again</button>
          <Link className="btn bg-white text-ink hover:bg-white/90" href="/">Go Home</Link>
        </div>
      </div>
    </section>
  );
}