"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rm = useReducedMotion();
  const lastClickRef = useRef<number>(0);
  const handleNavClick = () => {
    const now = Date.now();
    if (now - lastClickRef.current < 300) return; // guard rapid double taps
    lastClickRef.current = now;
    // Use requestAnimationFrame instead of setTimeout for better performance
    requestAnimationFrame(() => setIsOpen(false));
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink/70 supports-[backdrop-filter]:bg-ink/60 border-b border-zinc-800/60">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Le Grandresto home" onClick={handleNavClick}>
          <motion.div whileHover={{ rotate: 3 }} whileTap={{ scale: .95 }} className="rounded-full bg-white/5 p-1">
            <Image src="/logo.png" alt="Le Grandresto Logo" width={42} height={42} priority className="h-auto w-auto" />
          </motion.div>
          <span className="font-brand ligatures font-bold tracking-tight text-gold text-lg sm:text-xl lg:text-2xl">
            Le Grandresto
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`px-4 py-2 font-menu font-medium rounded-xl transition-colors hover:bg-white/5 ${
                pathname === link.href ? "text-gold" : "text-zinc-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/5 rounded-xl"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="text-gold" /> : <Menu className="text-gold" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={rm ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: rm ? 0 : 0.2 }}
                className="fixed inset-0 bg-ink/60 backdrop-blur-sm md:hidden z-40"
                aria-hidden="true"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={rm ? {} : { x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: rm ? 0 : 0.25 }}
                className="fixed inset-y-0 right-0 w-64 bg-ink shadow-luxury md:hidden z-50 border-l border-zinc-800/60"
                id="mobile-nav"
              >
                <div className="flex flex-col p-4 h-full">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="self-end p-2 hover:bg-white/5 rounded-xl mb-4"
                    aria-label="Close menu"
                  >
                    <X className="text-gold" />
                  </button>
                  <nav className="flex flex-col gap-2 bg-ink/95 rounded-xl p-2">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`px-4 py-3 font-menu font-medium rounded-xl transition-colors hover:bg-white/10 ${
                          pathname === link.href ? "text-gold" : "text-zinc-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
