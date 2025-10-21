"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Page() {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={rm ? {} : { opacity: 0, y: 8 }}
      animate={rm ? {} : { opacity: 1, y: 0 }}
      transition={rm ? {} : { duration: 0.4 }}
      className="max-w-5xl mx-auto space-y-12"
    >
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">NAK MEDIA</h1>
        <p className="text-zinc-300">Clean, modern digital media for brands and hospitality.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-zinc-400">
          NAK Media is a digital studio focused on minimalist design, refined content, and performance-first web experiences.
          We partner with brands and hospitality teams to plan, design, and produce everything from identity systems and content
          to responsive websites built with modern tooling.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Brand & Identity</h3>
            <p className="text-zinc-400 text-sm">Identity systems, typography, color, and art direction establishing a cohesive visual language.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Content Production</h3>
            <p className="text-zinc-400 text-sm">Photography and short-form video with restrained aesthetics and strong narrative intent.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Web Presence</h3>
            <p className="text-zinc-400 text-sm">Fast, responsive websites with minimalist UI, solid accessibility, and thoughtful UX.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">Performance-first builds</h3>
            <p className="text-zinc-400 text-sm">Next.js 14, image optimization, route-level code splitting, and edge rendering.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">Minimalist design system</h3>
            <p className="text-zinc-400 text-sm">Typography-led layouts, accessible color, and subtle motion for polish without noise.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">SEO & indexing</h3>
            <p className="text-zinc-400 text-sm">Structured data, robots.txt, sitemap readiness, and metadata best practices.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">CMS-ready</h3>
            <p className="text-zinc-400 text-sm">Headless CMS integration (when required) with clean content models.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Capabilities</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-zinc-400 text-sm">
          <li>Brand strategy and identity systems</li>
          <li>Art direction, photography, and short-form video</li>
          <li>Responsive web design and development</li>
          <li>Performance optimization and accessibility</li>
          <li>Content planning and social media asset creation</li>
          <li>Conversion-focused landing pages and micro-sites</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Restaurant Launch</h3>
            <p className="text-zinc-400 text-sm">Identity, menu website, photography, and social kits for opening day.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Brand Refresh</h3>
            <p className="text-zinc-400 text-sm">New visual system and website with improved UX and SEO foundations.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Campaign Content</h3>
            <p className="text-zinc-400 text-sm">Short-form video and imagery to support seasonal promotions and launches.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-medium">Product Landing</h3>
            <p className="text-zinc-400 text-sm">High-converting pages for drops, promos, and limited releases.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">01 — Discovery</h3>
            <p className="text-zinc-400 text-sm">Goals, audience, constraints; moodboards, references, and scoped plan.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">02 — Design</h3>
            <p className="text-zinc-400 text-sm">Identity, layout, component system, and content plan aligned to goals.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">03 — Production</h3>
            <p className="text-zinc-400 text-sm">Photo/video capture and web implementation with iterative reviews.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-sm font-medium">04 — Launch</h3>
            <p className="text-zinc-400 text-sm">Deployment, analytics, and continual iteration informed by insights.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Deliverables</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-zinc-400 text-sm">
          <li>Logo, typographic system, and brand guidelines</li>
          <li>Photography and short-form video sets</li>
          <li>Responsive website (Next.js) and component library</li>
          <li>SEO baseline, analytics wiring, and core metadata</li>
          <li>Social media kits and reusable templates</li>
          <li>Launch assets and campaign landing pages</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tech & Tools</h2>
        <p className="text-zinc-400 text-sm">Next.js 14, Tailwind CSS, Framer Motion, Vercel, Figma, Adobe CC, Notion.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Engagement</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-zinc-400 text-sm">
          <li>Fixed-scope projects (2–6 weeks)</li>
          <li>Monthly content & site iteration retainers</li>
          <li>Campaign-specific production sprints</li>
          <li>Consulting for performance and UX</li>
        </ul>
      </section>

      <section className="space-y-4 text-center">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="flex items-center justify-center gap-3">
          <a href="mailto:nakmediaco@gmail.com" className="btn bg-white text-ink hover:bg-white/90 no-underline">Email</a>
          <a
            href="https://www.instagram.com/nakmedia.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gold text-ink hover:bg-gold/90 no-underline"
          >
            <Instagram size={18} />
            <span>@nakmedia.co</span>
          </a>
        </div>
        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} NAK MEDIA</p>
      </section>
    </motion.div>
  );
}