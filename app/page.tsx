"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const rm = useReducedMotion();
  return (
    <main className="space-y-16">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={rm ? {} : { opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: rm ? 0 : 0.5 }} 
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Luxury on a Plate, <span className="text-gold">Warmth in Every Bite</span>
          </h1>
          <p className="text-zinc-300 max-w-xl">
            Welcome to <span className="text-gold font-medium">Le Grandresto</span> — where Filipino & Arabic flavors meet Kerala&apos;s legendary spices.
            A modern dining experience in the heart of Deira.
          </p>
          <div className="flex gap-4">
            <Link href="/menu" aria-label="Explore our full menu" className="btn bg-gold text-ink hover:bg-gold/90 shadow-luxury inline-flex items-center gap-2 px-5 py-3">
              <span className="font-medium">Explore Menu</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a className="btn bg-white text-ink hover:bg-white/90 px-5 py-3" href="https://maps.google.com/?q=Salah%20al%20din%20metro%20station%2C%20gate%20no%202%20Muteena%2C%20deira%2C%20dubai">Visit Us</a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: rm ? 1 : 0, scale: rm ? 1 : 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: rm ? 0 : 0.5 }} 
          className="relative rounded-3xl overflow-hidden border border-zinc-800/60 shadow-luxury"
        >
          <Image 
            src="/restaurant front img.JPG" 
            alt="Le Grand Restaurant frontage" 
            width={1600} 
            height={900} 
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-auto object-cover" 
            priority 
            loading="eager"
            quality={85}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-sm text-zinc-300">Salah Al Din • Deira • Dubai</p>
          </div>
        </motion.div>
      </section>

      {/* Specialties */}
      <section className="card p-6 text-center">
        <p className="text-sm text-zinc-300">We specialize in <span className="text-gold font-medium">Filipino</span> and <span className="text-gold font-medium">Arabic</span> cuisine — our bestselling offerings.</p>
      </section>

      <section className="grid sm:grid-cols-3 gap-6">
        <div className="card p-6 flex flex-col gap-3">
          <h3 className="font-semibold text-gold">Explore Menu</h3>
          <p className="text-sm text-zinc-300">Discover Filipino–Arabic fusion and chef specials.</p>
          <Link href="/menu" className="btn bg-gold text-ink hover:bg-gold/90 w-fit">Browse Menu</Link>
        </div>
        <div className="card p-6 flex flex-col gap-3">
          <h3 className="font-semibold text-gold">Visit Us</h3>
          <p className="text-sm text-zinc-300">Salah Al Din • Deira • Dubai</p>
          <a className="btn bg-white text-ink hover:bg-white/90 w-fit" href="https://maps.google.com/?q=Salah%20al%20din%20metro%20station%2C%20gate%20no%202%20Muteena%2C%20deira%2C%20dubai">Get Directions</a>
        </div>
        <div className="card p-6 flex flex-col gap-3">
          <h3 className="font-semibold text-gold">Opening Hours</h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>Open 24 hours — All days</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
