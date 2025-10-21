import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-800/60 bg-ink">
      <div className="container py-10 space-y-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Intro */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Le Grandresto home" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Le Grandresto Logo" width={42} height={42} />
              <span className="font-brand ligatures font-bold tracking-tight text-gold text-xl">Le Grandresto</span>
            </Link>
            <p className="text-sm text-zinc-400">
              A modern Filipino × Arabic dining experience, crafted with Kerala spices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-menu font-medium text-gold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="font-menu hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/menu" className="font-menu hover:text-gold transition-colors">Our Menu</Link></li>
              <li><Link href="/contact" className="font-menu hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-menu font-medium text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>Salah Al Din Metro Station, Gate 2, Muteena, Deira, Dubai</span>
              </li>
              <li>
                <a href="tel:+971561183828" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" />
                  <span className="numbers">+971 56 118 3828</span>
                </a>
              </li>
              <li>
                <a href="tel:042225820" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" />
                  <span className="numbers">04 222 5820</span>
                </a>
              </li>
              <li>
                <a href="mailto:legrandhut@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold" />
                  legrandhut@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h4 className="font-menu font-medium text-gold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex justify-between">
                <span>Open 24 Hours</span>
                <span className="text-gold">All Days</span>
              </li>
            </ul>
            <h4 className="font-menu font-medium text-gold mb-3">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/legrandrestaurant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Le Grandresto on Instagram"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Instagram size={20} />
              </a>
              
              <a 
                href="https://maps.google.com/?q=Salah%20al%20din%20metro%20station%2C%20gate%20no%202%20Muteena%2C%20deira%2C%20dubai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <div>© {currentYear} <span className="font-brand ligatures font-bold text-gold text-xs sm:text-sm">Le Grandresto</span>. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="font-menu hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="font-menu hover:text-gold transition-colors">Terms of Service</Link>
              <Link href="/developer" className="font-menu hover:text-gold transition-colors">Developer</Link>
              <a 
                href="https://maps.google.com/?q=Salah%20al%20din%20metro%20station%2C%20gate%20no%202%20Muteena%2C%20deira%2C%20dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-menu flex items-center gap-1 hover:text-gold transition-colors"
              >
                Get Directions
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
